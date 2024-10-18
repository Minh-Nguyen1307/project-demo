import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
      const user = storedUsers.find((user) => user.email === loggedInUser.email);

      if (user && user.cart) {
        setCartItems(user.cart);
      } else {
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, []);

  const updateLocalStorageCart = (updatedItems) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
      const userIndex = storedUsers.findIndex((user) => user.email === loggedInUser.email);

      if (userIndex !== -1) {
        storedUsers[userIndex].cart = updatedItems;
        localStorage.setItem("userDetails", JSON.stringify(storedUsers));
      }
    }
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        alert("This course is already in your cart.");
        return prevItems; 
      }

      const updatedItems = [...prevItems, item];
      updateLocalStorageCart(updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      updateLocalStorageCart(updatedItems);
      return updatedItems;
    });
  };

  const resetCart = () => {
    setCartItems([]);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
      const userIndex = storedUsers.findIndex((user) => user.email === loggedInUser.email);

      if (userIndex !== -1) {
        storedUsers[userIndex].cart = [];
        localStorage.setItem("userDetails", JSON.stringify(storedUsers));
      }
    }
  };
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.setItem('discountedPrice', JSON.stringify([]));

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
      const userIndex = storedUsers.findIndex((user) => user.email === loggedInUser.email);
  
      if (userIndex !== -1) {
       
        storedUsers[userIndex].cart = [];
        localStorage.setItem("userDetails", JSON.stringify(storedUsers));
      }
    }
  };
  const cartCount = cartItems.length;
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount, resetCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
