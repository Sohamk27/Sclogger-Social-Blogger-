import React from 'react'
import "./TopBar.css"

function TopBar() {
    return (
        <div className="top">
            <div className="topleft">
                <i className="topicon fa-brands fa-square-twitter"></i>
                <i className="topicon fa-brands fa-square-instagram"></i>
                <i class="topicon fa-brands fa-linkedin"></i>
                <i className="topicon fa-brands fa-square-facebook"></i>
                <i className="topicon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">Home</li>
                    <li className="toplistitem">About</li>
                    <li className="toplistitem">Contact</li>
                    <li className="toplistitem">Write</li>
                    <li className="toplistitem">Logout</li>
                </ul>
            </div>
            <div className="topright">
                <img 
                    className="topimg" 
                    src="../../Images/img1.jpg"
                    alt="" 
                />
                <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar
