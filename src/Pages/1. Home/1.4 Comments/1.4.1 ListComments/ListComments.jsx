import React from "react";
import Comment from "./1.4.1.1 Comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ListComments(props) {
  const { topComments = [], nextSlide, prevSlide } = props;
  const listComments =
    topComments &&
    topComments.map((allComments) => (
      <Comment
        key={allComments.id}
        commentText={allComments.commentText}
        avatar={allComments.avatar}
        commentJob={allComments.commentJob}
        commentName={allComments.commentName}
      />
    ));
  return (
    <div className="my-5">
      <div>
        <h3 className='text-4xl font-semibold text-gray-800 mx-10'>
          What Our Customer Say
        </h3>
        <h3 className='text-4xl font-semibold text-gray-800 mx-10'>About Us</h3>
      </div>
      <div className='d-flex justify-end mx-10 gap-2 my-5'>
        <div>
          <button type='click' className='btn btn-light'>
            <FontAwesomeIcon icon={faArrowLeft} className='h-8' onClick={prevSlide} />
          </button>
        </div>
        <div>
          <button type='click' className='btn btn-light'>
            <FontAwesomeIcon icon={faArrowRight} className='h-8' onClick={nextSlide} />
          </button>
        </div>
      </div>
      <div className='d-flex items-start justify-between mx-10 my-10 '>
        {listComments}
      </div>
    </div>
  );
}
