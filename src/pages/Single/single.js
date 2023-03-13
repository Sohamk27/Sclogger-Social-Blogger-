import React from 'react'
import './single.css'
import Sidebar from '../../Components/Sidebar/sidebar'
import SinglePost from '../../Components/SinglePost/singlepost'

function single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default single
