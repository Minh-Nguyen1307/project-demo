import React from 'react'
import Banners from './1.1 Banners/Banners'
import Posters from './1.2 Posters/Posters'
import TopCourses from './1.3 TopCourses/TopCourses'
import Comments from './1.4 Comments/Comments'
import Apendix from './1.5 Apendix/Apendix'

export default function Home() {
  return (
    <div>
      <Banners />
      <Posters />
      <TopCourses />
      <Comments />
      <Apendix />
    </div>
  )
}
