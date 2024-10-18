import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faArrowUpWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import Course from "../1. Home/1.3 TopCourses/1.3.1 ListCourses/1.3.1.1 Course/Course";
import { allCourses } from "../../Data/1. AllCourses/AllCourses";

export default function Courses() {
  const [allCourse, setAllCourse] = useState(allCourses);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  const [costFilter, setCostFilter] = useState("none");
  const [relevanceFilters, setRelevanceFilters] = useState([]);
  

 
  const parseCost = (cost) => parseFloat(cost.replace(/[^0-9.-]+/g, ""));


  const filteredAndSortedCourses = allCourse
    .filter((course) => {
     
      if (relevanceFilters.length > 0) {
        return relevanceFilters.some((filter) =>
          course.content.toLowerCase().includes(filter)
        );
      }
      return true; 
    })
    .sort((a, b) => {
      
      const costA = parseCost(a.cost);
      const costB = parseCost(b.cost);

      if (costFilter === "asc") {
        return costA - costB; 
      } else if (costFilter === "desc") {
        return costB - costA; 
      }
      return 0; 
    });

  const totalPages = Math.ceil(filteredAndSortedCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  
  const currentCourses = filteredAndSortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const listAllCourses = currentCourses.map((course) => (
    <Course
      key={course.id}
      imageCourse={course.imageCourse}
      title={course.title}
      author={course.author}
      rating={course.rating}
      content={course.content}
      cost={course.cost}
    />
  ));

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCostFilterChange = (filter) => {
    setCostFilter(filter);
    setCurrentPage(1);
  };

  const handleRelevanceFilterChange = (filter) => {
    setRelevanceFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className='page-link' onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className='mx-10 h-[1300px]'>
      <div>
        <p className='text-4xl font-medium my-4'>Design Courses</p>
      </div>
      <nav aria-label='breadcrumb' className=' text-lg my-5'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Courses
          </li>
        </ol>
      </nav>

      <div className='flex justify-between w-full'>
        <div className='w-1/6 h-10 flex flex-col justify-between'>
          <div className='mr-20 ml-10'>
            <button className='btn btn-dark w-full font-bold mb-4'>
              <FontAwesomeIcon icon={faSliders} className='mr-2 ' />
              Filter
            </button>
          </div>

          <div className="h-96 flex flex-col justify-between mr-10 ">
            <div className='mb-4'>
              <p className='text-sm font-semibold'>Sort by</p>
              <div className="text-center bg-gray-100 border mx-14 my-2 font-bold rounded-lg">Price</div>
              <div>
                <div className='form-check mb-2'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='lowToHigh'
                    checked={costFilter === "asc"}
                    onChange={() => handleCostFilterChange("asc")}
                  />
                  <label className='form-check-label' htmlFor='lowToHigh'>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='mx-2' />
                    Low to High
                  </label>
                </div>
                <div className='form-check mb-2'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='highToLow'
                    checked={costFilter === "desc"}
                    onChange={() => handleCostFilterChange("desc")}
                  />
                  <label className='form-check-label' htmlFor='highToLow'>
                    <FontAwesomeIcon icon={faArrowDownShortWide} className='mx-2' />
                    High to Low
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold mt-10'>Relevance</p>
              <div className="text-center bg-gray-100 border mx-14 my-2 font-bold rounded-lg">Level</div>
              <div>
                <div className='form-check mb-2'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='beginner'
                    onChange={() => handleRelevanceFilterChange("beginner")}
                  />
                  <label className='form-check-label' htmlFor='beginner'>
                    Beginner
                  </label>
                </div>
                <div className='form-check mb-2'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='intermediate'
                    onChange={() => handleRelevanceFilterChange("intermediate")}
                  />
                  <label className='form-check-label' htmlFor='intermediate'>
                    Intermediate
                  </label>
                </div>
                <div className='form-check mb-2'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='advanced'
                    onChange={() => handleRelevanceFilterChange("advanced")}
                  />
                  <label className='form-check-label' htmlFor='advanced'>
                    Advanced
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-5/6 rounded-xl border p-4'>
          <div className='grid grid-cols-4 gap-5'>{listAllCourses}</div>

          {filteredAndSortedCourses.length > coursesPerPage && (
            <div className='d-flex justify-center mt-14 '>
              <nav aria-label='Page navigation example'>
                <ul className='pagination '>
                  <li className='page-item '>
                    <button
                      className='page-link'
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {renderPagination()}
                  <li className='page-item'>
                    <button
                      className='page-link'
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
