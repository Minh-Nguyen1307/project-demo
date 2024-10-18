import React, { useState } from "react";
import ListCourses from "./1.3.1 ListCourses/ListCourses";
import { allCourses } from "../../../Data/1. AllCourses/AllCourses";

export default function TopCourses() {
  const [topCourses, setTopCourses] = useState(allCourses);
  

  return (
    <div>
      <ListCourses topCourses={topCourses.slice(0, 4)} />
    </div>
  );
}
