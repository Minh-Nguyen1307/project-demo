import React from "react";
import Course from "./1.3.1.1 Course/Course";
import { Link } from "react-router-dom";

export default function ListCourses(props) {
  const { topCourses = [] } = props;
  const listCourses =
    topCourses &&
    topCourses.map((course) => (
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
  return (
    <div>
      <h4 className='text-4xl font-semibold text-gray-800 mx-10 mt-5'>
        Top Courses
      </h4>
      <Link to='/Courses' className='text-blue-800 d-flex justify-end m-10'>
        See all
      </Link>
      <div className='grid grid-cols-4 gap-32 mx-10'>{listCourses}</div>
    </div>
  );
}
