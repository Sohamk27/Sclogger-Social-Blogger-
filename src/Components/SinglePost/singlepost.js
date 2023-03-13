import React from 'react'
import './singlepost.css'

function singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
            src="../../Images/img5"
            alt=""
            className="singlepostimg"
        />
        <h1 className="singleposttitle">
            Lorem ipsum dolor sit amet.
            <div className="singlepostedit">
                <i class="singleposticon fa-solid fa-pen-to-square"></i>
                <i class="singleposticon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlepostinfo">
            <span className="singlepostauthor">Author: <b>Soham</b></span>
            <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, voluptate. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, voluptate. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
      </div>
    </div>
  )
}

export default singlepost
