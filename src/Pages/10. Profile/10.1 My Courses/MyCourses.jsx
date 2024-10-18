import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyCourses() {
  const [userCourses, setUserCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const existingUserData =
      JSON.parse(localStorage.getItem("userDetails")) || [];
    if (loggedInUser) {
      const user = existingUserData.find(
        (user) => user.email === loggedInUser.email
      );

      if (user && user.myCourse) {
        setUserCourses(user.myCourse);
      } else {
        console.warn("No courses found.");
      }
    }
  }, []);

  const removeCourse = (courseId) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const existingUserData =
      JSON.parse(localStorage.getItem("userDetails")) || [];

    if (loggedInUser) {
      const userIndex = existingUserData.findIndex(
        (user) => user.email === loggedInUser.email
      );

      if (userIndex !== -1) {
        const user = existingUserData[userIndex];
        user.myCourse = user.myCourse.filter(
          (course) => course.id !== courseId
        );

        localStorage.setItem("userDetails", JSON.stringify(existingUserData));
        setUserCourses(user.myCourse);
      }
    }
  };

  
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = userCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(userCourses.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <div className="border rounded-xl pb-2 w-full">
        {currentCourses.length > 0 ? (
          currentCourses.map((course, index) => (
            <div
              key={course.id}
              className="flex my-4 mx-20 border p-4 justify-between"
            >
              <div className="flex">
                <div className="mr-4 text-2xl font-bold flex items-center justify-center p-2">
                  {index + 1 + (currentPage - 1) * coursesPerPage}
                </div>
                <img
                  src={course.imageCourse}
                  alt={course.title}
                  className="w-30 h-auto mr-4"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p>{course.author}</p>
                    <p>⭐⭐⭐⭐⭐ ({course.rating})</p>
                    <p>{course.content}</p>
                    <p>{course.intro}</p>
                  </div>
                  <Link to="/Launch">
                    <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                      Launch now
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-start">
                <button
                  type="button"
                  className="text-red-500 font-semibold hover:font-bold"
                  aria-label="Remove course"
                  onClick={() => removeCourse(course.id)}
                >
                  ✖
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center p-4">No courses available</p>
        )}

        {userCourses.length > coursesPerPage && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
