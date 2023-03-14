import React from 'react'
import './sidebar.css'
import img3 from '../../Images/img3.jpg'

function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img
                className="sidebarimg"
                src={img3}
                alt=""
            />
            <p>Lorem njdhcjshciwhckw dhwchwic hwqihiwjciwq chiw qciw hwi  
            iqfhiowhfi qwhfiewhfw f whfihwi</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
                <li className="sidebarlistitem">Cinema</li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial">
                <i className="sidebaricon fa-brands fa-square-twitter"></i>
                <i className="sidebaricon fa-brands fa-square-instagram"></i>
                <i className="sidebaricon fa-brands fa-linkedin"></i>
                <i className="sidebaricon fa-brands fa-square-facebook"></i>
                <i className="sidebaricon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

export default sidebar
