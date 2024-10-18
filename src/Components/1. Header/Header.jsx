import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartPlus,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";




export default function Header({ setSearchKeyword }) {
 
  const { cartCount } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [firstLetter, setFirstLetter] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
   
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("loggedInUser"));
    setIsLoggedIn(!!userDetails);
    if (userDetails && userDetails.firstName) {
      setFirstLetter(userDetails.firstName.charAt(0).toUpperCase());
    }

    
    
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setDropdownVisible(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    setDropdownVisible(false);
    navigate("/Profile");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCartClick = () => {
    navigate("/Cart");
  };
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value); 
    if (e.target.value) {
      navigate("/Search"); 
    }
  };
  return (
    <div className='bg-slate-50'>
      <div className='mx-10 flex justify-between items-center h-20'>
        <div>
          <Link to='/' className='text-2xl'>
            <img src='/Logo1.png' alt='Logo of Byway' className='w-32' />
          </Link>
        </div>
        <div>
          <Link to='/Courses' className='text-2xl'>
            Courses
          </Link>
        </div>
        <div className='w-1/2'>
        <form className='border border-black rounded-lg flex justify-start'>
            <button type='button' className='flex items-center' onClick={handleSearchChange}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2 text-2xl' />
            </button>
            <input
              type='search'
              placeholder='Search Courses'
              className='w-11/12 border-none focus:outline-none p-2 bg-slate-50'
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className='w-1/12 flex justify-between items-center'>
          {isLoggedIn ? (
            <div className='w-60 flex justify-around items-center relative'>
              <div
                onClick={handleCartClick}
                className='cursor-pointer relative'
              >
                <FontAwesomeIcon icon={faCartPlus} className='text-2xl' />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                  {cartCount}
                </span>
                )}
              </div>
              <Link to='/MyCourse'><div>
              <FontAwesomeIcon icon={faBook} className="text-2xl" />
              </div></Link>
              <div
                className='user-avatar bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                {firstLetter}
              </div>

              {dropdownVisible && (
                <div
                  ref={dropdownRef}
                  className='absolute w-32 left-14 top-4 mt-12 bg-white border border-gray-300 shadow-lg rounded-lg z-50 text-lg'
                >
                  <Link
                    to='/Profile'
                    onClick={handleProfileClick}
                    className='block text-center px-2 py-2 text-black hover:bg-gray-100'
                  >
                    Profile
                  </Link>
                  <hr />
                  <button
                    onClick={handleSignOut}
                    className='w-full block text-center px-2 py-2 text-black hover:bg-gray-100'
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className='flex space-x-4'>
              <Link to='/LogIn'>
                <button className='border border-gray-300 p-2'>Log in</button>
              </Link>
              <Link to='/SignUp'>
                <button className='border bg-emerald-800 text-white p-2'>
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
