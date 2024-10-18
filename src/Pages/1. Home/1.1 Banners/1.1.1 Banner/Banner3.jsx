import React from "react";

export default function Banner3() {
  return (
    <div className=' h-[800px] mx-10 d-flex justify-between items-center'>
      <div className='w-3/5'>
        <h2 className='text-5xl font-bold text-gray-800 mb-4'>
          Unlock Your Potential
        </h2>
        <p className='w-3/4'>
          Byway is more than just a Learning Management System—it's your partner
          in growth and development. We offer a wide range of courses and
          interactive tools that cater to various learning styles and needs,
          helping you unlock opportunities for success in your academic,
          professional, and personal life. Embrace a limitless learning
          experience with Byway.
        </p>
        <button type='button' className='btn btn-warning mt-4 p-2'>
          Start your instructor journey
        </button>
      </div>
      <div className='w-2/5 p-4 relative h-[600px] d-flex justify-center items-center'>
        <div className='w-[600px] h-[600px] d-flex justify-center items-center '>
          <img src=' 3. Banner/banner33.png' alt='' className='w-[700px] absolute' />
          <img
            src=' 3. Banner/banner3.png'
            alt=''
            className='w-96 absolute rounded-full'
          />
        </div>
        <img
          src=' 3. Banner/banner31.png'
          alt=''
          className='w-25 absolute bottom-0 left-0'
        />
        <img
          src=' 3. Banner/banner31.png'
          alt=''
          className='w-25 absolute top-0 right-0'
        />
      </div>
    </div>
  );
}
