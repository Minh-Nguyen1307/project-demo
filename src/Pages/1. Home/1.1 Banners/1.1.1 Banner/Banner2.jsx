import React from "react";

export default function Banner2() {
  return (
    <div className=' h-[800px] mx-10 d-flex justify-between items-center'>
      <div className='w-3/5'>
        <h2 className='text-5xl font-bold text-gray-800 mb-4'>
          Unlock Your Potential
        </h2>
        <p className='w-3/4'>
          At Byway, we empower you to reach your full potential through
          accessible and engaging education. Our platform provides you with the
          tools and resources you need to excel, whether you're pursuing new
          skills, enhancing your professional qualifications, or simply
          nurturing a passion for lifelong learning. Join us and take the first
          step towards your brightest future.
        </p>
        <button type='button' className='btn btn-primary mt-4 p-2'>
          Start your instructor journey
        </button>
      </div>
      <div className='w-2/5 p-4 relative h-[600px] d-flex justify-center items-center'>
        <div className=' bg-sky-400 rounded-3xl w-96 h-[483px] '>
          <img
            src=' 3. Banner/banner2.png'
            alt=''
            className='w-96 absolute rounded-full'
          />
        </div>
        <img
          src=' 3. Banner/banner21.png'
          alt=''
          className='w-25 absolute bottom-0 left-0'
        />
        <img
          src=' 3. Banner/banner22.png'
          alt=''
          className='w-25 absolute top-0 left-0'
        />
        <img
          src=' 3. Banner/banner23.png'
          alt=''
          className='w-25 absolute top-0 right-0'
        />
      </div>
    </div>
  );
}
