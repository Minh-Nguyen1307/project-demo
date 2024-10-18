import React, { useState } from "react";

import ListComments from "./1.4.1 ListComments/ListComments";
import { allComments } from "../../../Data/2. AllComments/AllComments";

export default function Comments() {
  const [topComments, setTopComments] = useState(allComments);
  const nextSlide = () => {
    setTopComments((comment) => {
      const newComment = [...comment];
      newComment.push(newComment.shift());
      return newComment;
    });
  };
  const prevSlide = () => {
    setTopComments((comment) => {
      const newComment = [...comment];
      newComment.unshift(newComment.pop());
      return newComment;
    });
  };

  return (
    <div>
      <ListComments
        topComments={topComments.slice(0, 4)}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
}
