import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../CartContext';

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const navigate = useNavigate();
  const { clearCart, removeFromCart } = useCart();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedDiscountedPrice = localStorage.getItem("discountedPrice") || 0;

    setCartItems(storedCartItems);
    setDiscountedPrice(storedDiscountedPrice);
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const existingUserData = JSON.parse(localStorage.getItem('userDetails')) || [];

    if (loggedInUser) {
      const userIndex = existingUserData.findIndex(user => user.id === loggedInUser.id);

      if (userIndex !== -1) {
        existingUserData[userIndex].itemCount = cartItems.length;
        existingUserData[userIndex].discountedPrice = discountedPrice;

        localStorage.setItem('userDetails', JSON.stringify(existingUserData));
      }
    }
  }, [cartItems, discountedPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
      const existingUserData = JSON.parse(localStorage.getItem('userDetails')) || [];
      const userIndex = existingUserData.findIndex(user => user.id === loggedInUser.id);

      if (userIndex !== -1) {
        const user = existingUserData[userIndex];
        const existingCourses = user.myCourse || [];

      
        const duplicates = cartItems.filter(cartItem =>
          existingCourses.some(course => course.id === cartItem.id)
        );

        
        duplicates.forEach(duplicate => {
          removeFromCart(duplicate.id);
        });

     
        if (duplicates.length > 0) {
          alert("Some courses in your cart have already been purchased and have been removed from your cart.");
          navigate('/Cart'); 
          return; 
        }

        user.myCourse = user.myCourse ? [...user.myCourse, ...cartItems] : [...cartItems];
        localStorage.setItem('userDetails', JSON.stringify(existingUserData));
      }
    }

    clearCart();
    navigate('/Completion');}
      
  return (
    <div className='mx-5'>
      <div className='my-5 text-lg'>
        <h1 className='text-4xl font-medium my-4'>Check out</h1>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Courses'>Categories</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Cart'>Shopping Cart</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Check out
            </li>
          </ol>
        </nav>
      </div>
      <div className='flex justify-between'>
        <div className='w-1/2 mb-5 border p-4 bg-stone-100'>
          <div className='flex justify-between mb-4'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="creditDebitCard" defaultChecked />
              <label className="form-check-label font-bold text-xl" htmlFor="creditDebitCard">
                Credit/Debit Card
              </label>
            </div>
            <img src="/visa.png" alt="Credit Card Logos" />
          </div>
          <form className="needs-validation" noValidate onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label font-semibold">Name on Card</label>
              <input 
                type="text" 
                className="form-control" 
                id="cardName" 
                placeholder='Name on card' 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label font-semibold">Card Number</label>
              <input 
                type="text" 
                className="form-control" 
                id="cardNumber" 
                placeholder='Card Number' 
                required 
              />
              <div className="invalid-tooltip">
                Please provide a valid card number.
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-3 w-1/2 mr-2">
                <label htmlFor="expiryDate" className="form-label font-semibold">Expiry Date</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="expiryDate" 
                  placeholder="MM/YYYY" 
                  pattern="^(0[1-9]|1[0-2])/([0-9]{4})$" 
                  required 
                />
                <div className="invalid-tooltip">
                  Please provide a valid expiry date (MM/YYYY).
                </div>
              </div>
              <div className="mb-3 w-1/2 ml-2">
                <label htmlFor="cvc" className="form-label font-semibold">CVC/CVV</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="cvc" 
                  placeholder='CVC' 
                  required 
                />
                <div className="invalid-tooltip">
                  Please provide a valid CVC/CVV code.
                </div>
              </div>
            </div>
            <div className='flex justify-center p-2'>
              <button className="btn btn-dark w-1/2" type="submit" >Pay now <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
          </form>
        </div>
        <div className='mt-5 w-1/3'>
          <div>
            <h1 className='text-2xl font-bold mb-5'>Order Details</h1>
            <div>
              <table className="table w-1/2 border-none">
                <tbody>
                  <tr>
                    <th scope="row">Items</th>
                    <td>{cartItems.length}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table w-3/4 border-none text-xl">
                <tbody>
                  <tr>
                    <th scope="row">Total</th>
                    <td className='font-bold'>${discountedPrice}</td>
                  </tr>
                </tbody>
              </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      
)}
      