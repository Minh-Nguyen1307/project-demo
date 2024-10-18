import React, { useState } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { allCourses } from "../../Data/1. AllCourses/AllCourses";
import { useCart } from "../../CartContext";



export default function Information() {
    const navigate = useNavigate();
    const { addToCart } = useCart();
  const [visibleSection, setVisibleSection] = useState(null);
  
  const { title } = useParams();
  const userDetails = JSON.parse(localStorage.getItem("loggedInUser"));
    const isLoggedIn = !!userDetails;
  const handleClick = (section) => {
    setVisibleSection((prevSection) =>
      prevSection === section ? null : section
    );
  };
  const handleAddToCart = () => {
    const course = allCourses.find(
      (course) => course.title === decodeURIComponent(title)
    );

    if (!course) {
      return; 
    }
    if (isLoggedIn) {
      addToCart(course);
      navigate('/Cart'); 
      alert(`${course.title} has been added to your cart!`);
    } else {
      alert("Please log in to add courses to your cart.");
      navigate('/LogIn'); 
    }
    
  };

  const course = allCourses.find(
    (course) => course.title === decodeURIComponent(title)
  );

  if (!course) {
    return <p>Course not found. Please go back and select a valid course.</p>;
  }

  const { intro, rating, content, imageCourse, cost, id, author } = course;
  return (
    <div className='mx-10'>
      <div>
        <div>
          <p className='text-4xl font-medium my-4'>Information Course</p>
        </div>
        <nav aria-label='breadcrumb' className=' text-lg my-5'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Courses'>Courses</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {title}
            </li>
          </ol>
        </nav>
      </div>
      <div className='d-flex justify-around h-[400px]'>
        <div className='my-1 p-3 bg-gray-50 rounded-3xl  w-1/2 flex flex-col justify-around'>
          <p className='text-3xl'>{title}</p>
          <div className='text-lg w-full '>
            <div className='font-semibold'>Introduction:</div>

            <div>{intro}</div>
          </div>
          <div className='text-red-700'>{author}</div>
          <p>⭐⭐⭐⭐⭐ {rating} Ratings</p>
          <p>{content}</p>
        </div>
        <div>
          <div className='card h-[410px] w-[400px]'>
            <img src={imageCourse} className='card-img-top p-3 ' alt={id}></img>
            <div className='card-body'>
              <h5 className='card-title text-2xl text-center'>{title}</h5>
              <p className='card-text text-2xl font-medium text-center'>
                {cost}
              </p>
              <button
                className='btn btn-success w-full p-3 my-3'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              
                
              
            </div>
          </div>
        </div>
      </div>
      <div className='my-10 w-8/12 flex justify-around'>
        <button
          className='btn btn-light w-1/6 h-16 font-medium'
          onClick={() => handleClick("description")}
        >
          Description
        </button>
        <button
          className='btn btn-light w-1/6 h-16 font-medium'
          onClick={() => handleClick("instructor")}
        >
          Instructor
        </button>
        <button
          className='btn btn-light w-1/6 h-16 font-medium'
          onClick={() => handleClick("syllabus")}
        >
          Syllabus
        </button>
        <button
          className='btn btn-light w-1/6 h-16 font-medium'
          onClick={() => handleClick("reviews")}
        >
          Reviews
        </button>
      </div>

      {visibleSection === "description" && (
        <div className='w-1/2 mx-32 '>
          <p>
            {intro}
            {intro}
            {intro}
          </p>
        </div>
      )}
      {visibleSection === "instructor" && (
        <div className='w-1/2 mx-32 '>
          <p>
            {intro}
            {intro}
          </p>
        </div>
      )}
      {visibleSection === "syllabus" && (
        <div className='w-1/2 mx-32 '>
          <p>{intro}</p>
        </div>
      )}
      {visibleSection === "reviews" && (
        <div className='w-1/2 mx-32 '>
          <p>
            {intro}
            {intro}
            {intro}
            {intro}
          </p>
        </div>
      )}
    </div>
  );
}
