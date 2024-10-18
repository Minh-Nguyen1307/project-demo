import React, {useState} from 'react'
import { allPosters } from '../../../Data/3. AllPosters/AllPosters'
import ListPosters from './1.2.1 ListPosters/ListPosters'

export default function Poster() {
  const [poster, setPoster] = useState(allPosters)
  return (
    <div>
      <ListPosters poster = {poster} />
    </div>
  )
}
