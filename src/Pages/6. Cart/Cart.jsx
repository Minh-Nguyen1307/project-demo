
import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { useCart } from "../../CartContext";
import { allCourses } from "../../Data/1. AllCourses/AllCourses";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
    const { title } = useParams();
  const { cartItems, removeFromCart } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  
  const course = allCourses.find(
    (course) => course.title === decodeURIComponent(title)
    
  );
  
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + parseFloat(item.cost),
      0
    );
    const newDiscountedPrice = (
      totalPrice -
      totalPrice * discountAmount
    ).toFixed(2);
    setDiscountedPrice(newDiscountedPrice);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("discountedPrice", newDiscountedPrice);
  }, [cartItems, discountAmount]);

  const applyDiscount = () => {
    let discount = 0;
    if (discountCode === "SAVE10") {
      discount = 0.1;
    } else if (discountCode === "SAVE20") {
      discount = 0.2;
    } else {
      alert("Invalid discount code");
    }
    setDiscountAmount(discount);
  };

  return (
    <div className='mx-5'>
      <div className='my-5 text-lg'>
        <h1 className='text-4xl font-medium my-4'>Shopping Cart</h1>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Courses'>Categories</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Shopping Cart
            </li>
          </ol>
        </nav>
      </div>
      <div className='grid grid-cols-3 gap-4 my-16'>
        <div className='col-span-2 border-t w-3/4'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((course, index) => (
              <div
                key={course.id}
                className='flex my-4 border p-4 justify-between w-full'
              >
                <div className='flex'>
                  <div className='mr-4 text-2xl font-bold flex items-center justify-center p-2'>
                    {index + 1}
                  </div>
                  <img
                    src={course.imageCourse}
                    alt={course.title}
                    className='w-30 h-full mr-4'
                  />
                  <div>
                  <Link to={`/Information/${encodeURIComponent(course.title)}`} state={{ title: course.title }}><h2 className='text-xl font-bold'>{course.title}</h2></Link>
                    <p>{course.author}</p>
                    <p>⭐⭐⭐⭐⭐({course.rating})</p>
                    <p className='text-lg font-semibold text-red-500'>
                      ${course.cost}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    className='text-red-500 font-semibold btn-close hover:font-bold'
                    aria-label='Close'
                    onClick={() => removeFromCart(course.id)}
                  >
                   
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <h1 className='text-2xl font-bold mb-5'>Order Details</h1>
          <div>
            <table className='table w-3/4 border-none'>
              <tbody>
                <tr>
                  <th scope='row'>Total Items</th>
                  <td>{cartItems.length}</td>
                </tr>
                <tr>
                  <th scope='row'>Price</th>
                  <td>
                    $
                    {cartItems
                      .reduce((total, item) => total + parseFloat(item.cost), 0)
                      .toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Discount</th>
                  <td>
                    {discountAmount > 0
                      ? `${(discountAmount * 100).toFixed(0)}%`
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Total</th>
                  <td>${discountedPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className='my-2 w-3/4 flex'>
              <input
                type='text'
                placeholder='Enter discount code'
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className='border p-2 w-3/4 mr-4'
              />
              <button onClick={applyDiscount} className='btn btn-success w-1/4'>
                Apply
              </button>
            </div>
          </div>
          <Link
            to={{
              pathname: "/Checkout",
              state: { cartItems, discountedPrice },
            }}
          >
            <button className='btn btn-dark w-3/4 mt-5' type='submit' >
              Check out <FontAwesomeIcon icon={faArrowRight} className='h-4 mx-2' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
