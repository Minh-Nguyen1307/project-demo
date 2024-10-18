import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../CartContext";

export default function LogIn() {
  const [errorLogIn, setErrorLogIn] = useState("");
  const { resetCart, addToCart } = useCart();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const { email, password } = formValue; 

    const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
    const storedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (storedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      
      resetCart();

      
      const userCart = storedUser.cart || [];
      userCart.forEach((item) => addToCart(item));

      
      window.location.href = '/';
      setErrorLogIn(""); 
    } else {
      setErrorLogIn("Incorrect email or password.");
    }
  };

  const { email, password } = formValue;

  return (
    <div className='row no-gutters'>
      <div className='col-12 col-sm-6 col-md-8 d-flex flex-col items-center'>
        <h3 className='text-4xl font-semibold text-gray-800 mt-44 mb-10'>
          Log in to your account
        </h3>
        <form
          className='d-flex flex-col justify-center item h-[300px] w-[500px]'
          onSubmit={handleForm}
        >
          <div>
            <p className='text-gray-950 font-medium text-xl my-4'>
              Email <span className='text-red-600'>*</span>
            </p>
            <input
              type='email'
              placeholder='Email ID'
              className='border rounded-md w-full pl-4 h-9'
              onChange={handleChange}
              name='email'
              value={email}
              required
            />
          </div>

          <div>
            <p className='text-gray-950 font-medium text-xl my-4'>
              Password <span className='text-red-600'>*</span>
            </p>
            <input
              type='password'
              placeholder='Enter Password'
              className='border rounded-md w-full pl-4 h-9'
              onChange={handleChange}
              name='password'
              value={password}
              required
            />
          </div>

          {errorLogIn && <p className='text-red-500 text-sm'>{errorLogIn}</p>}

          <button type='submit' className='btn btn-dark mt-4 text-xl my-4'>
            Log In <FontAwesomeIcon icon={faArrowRight} className='h-4 mx-2' />
          </button>
        </form>
        <div className='text-center my-4'>
          ----------------------Log in with ----------------------
          <div className='d-flex justify-between my-3 w-[500px]'>
            <button className='btn btn-light'>
              <img src='/8. LogIn/1.png' alt='' className='' />
            </button>
            <button className='btn btn-light mx-5'>
              <img src='8. LogIn/2.png' alt='' className='' />
            </button>
            <button className='btn btn-light'>
              <img src='8. LogIn/3.png' alt='' className='' />
            </button>
          </div>
        </div>
      </div>

      <div className='col-6 col-md-4 p-0'>
        <img
          src='/8. LogIn/signup.png'
          alt='Sign Up'
          className='h-[900px] text-end'
        />
      </div>
    </div>
  );
}
