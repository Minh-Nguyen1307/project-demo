import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Completion() {
  return (
    <div>
      <div className='flex justify-center my-5'>
        <div className='w-56 h-56 bg-emerald-700 rounded-full'>
          <div className='h-56  flex justify-center items-center'>
            <FontAwesomeIcon icon={faCheck} className='h-40 text-white' />
          </div>
        </div>
      </div>
      <div className='text-center p-3 mb-10'>
        <p className='font-bold text-2xl'>Order Complete</p>
        <p>You will receive a confirmation email soon!</p>
      </div>
      <Link to='/MyCourse'>
        <div className='text-center mb-20'>
          <button className='btn btn-success w-1/4'>Learn now</button>
        </div>
      </Link>
    </div>
  );
}
