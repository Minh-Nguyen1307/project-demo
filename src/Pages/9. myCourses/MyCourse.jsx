import React from 'react'
import { Link } from 'react-router-dom'
import MyCourses from '../10. Profile/10.1 My Courses/MyCourses'


export default function MyCourse() {
  return (
    <div className='mx-5'>
        
        <div>
          <p className='text-4xl font-medium my-4'>My Courses</p>
        </div>
        <nav aria-label='breadcrumb' className=' text-lg my-5'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/Profile'>Profile</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              My Courses
            </li>
          </ol>
        </nav>
        <div>
            <MyCourses />
        </div>
    </div>
    
  )
}
