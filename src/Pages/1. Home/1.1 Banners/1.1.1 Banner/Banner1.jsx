import React from "react";

export default function Banner1() {
  return (
   
      <div className=' h-[800px] mx-10 d-flex justify-between items-center'>
        <div className='w-3/5'>
          <h2 className='text-5xl font-bold text-gray-800 mb-4'>
            Unlock Your Potential
          </h2>
          <p className='w-3/4'>
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success. Whether you're a
            student, professional, or lifelong learner, our cutting-edge
            Learning Management System is designed to elevate your learning
            experience
          </p>
          <button type='button' className='btn btn-success mt-4 p-2'>
            Start your instructor journey
          </button>
        </div>
        <div className='w-1/5 p-4 relative h-96 d-flex justify-center items-end rounded-full border-b-2 border-t-2'>
          <img
            src=' 3. Banner/banner1.png'
            alt=''
            className='w-64 absolute rounded-full'
          />
          <div className=' bg-red-400 rounded-full w-64 h-64 '></div>
        </div>
        <div className='w-1/5 h-[600px] d-flex flex-col justify-around items-center rounded-full border-b-2 border-t-2 '>
          <div className='bg-sky-500 rounded-full border-r-2'>
            <img
              src=' 3. Banner/banner11.png'
              alt=''
              className='w-64 h-64 rounded-full '
            />
          </div>
          <div className='bg-yellow-500 rounded-full w-64'>
            <img
              src=' 3. Banner/banner12.png'
              alt=''
              className='w-64 h-64 rounded-full '
            />
          </div>
        </div>
      </div>

  );
}
