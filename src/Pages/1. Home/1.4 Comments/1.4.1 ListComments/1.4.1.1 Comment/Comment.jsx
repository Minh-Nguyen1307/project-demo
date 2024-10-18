import React from "react";

export default function Comment(props) {
  const { commentText, avatar, commentJob, commentName } = props;
  return (
    <div className="mx-10 w-1/5">
      <div className='w-full border-4 rounded-2xl h-80 d-flex flex-col items-center justify-around '>
        <p className='my-3 mx-3'>{commentText}</p>
        <img src={avatar} alt='' />
        <p className="font-bold">{commentName}</p>
        <p>{commentJob}</p>
      </div>
    </div>
  );
}
