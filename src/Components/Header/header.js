import React from 'react'
import './header.css'

function header() {
  return (
    <div className='header'>
      <div className='headertitle'>
        <span className='headertitlesm'>React & Node</span>
        <span className='headertitlelg'>Blog</span>
      </div>
      <img 
        className="headerimg"
        src="../../Images/img2.jpg"
        alt=""
      />
    </div>
  )
}

export default header
