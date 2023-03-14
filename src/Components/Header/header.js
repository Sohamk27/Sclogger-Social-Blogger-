import React from 'react'
import './header.css'
import img2 from '../../Images/img2.jpg'

function header() {
  return (
    <div className='header'>
      <div className='headertitle'>
        <span className='headertitlesm'>React & Node</span>
        <span className='headertitlelg'>Blog</span>
      </div>
      <img 
        className="headerimg"
        src={img2}
        alt=""
      />
    </div>
  )
}

export default header
