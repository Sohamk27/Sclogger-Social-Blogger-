import React from 'react'
import './setting.css'
import Sidebar from '../../Components/Sidebar/sidebar'
import img7 from '../../Images/img7.jpg'

function setting() {
  return (
    <div className="setting">
      <div className="settingwrapper">
        <div className="settingtitle">
          <span className="settingupdatetitle">Update Your Account</span> 
          <span className="settingdeletetitle">Delete Account</span>
        </div>
        <form className="settingform">
          <label>Profile Picture</label>
          <div className="settingpp">
            <img
              src={img7}
              alt=""
              className="settingimg"
            />
            <label htmlFor="fileInput">
              <i class="settingppicon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Soham" />
          <label>Email</label>
          <input type="email" placeholder="soham@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default setting
