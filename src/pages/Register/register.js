import React from 'react'
import './register.css'

function register() {
  return (
    <div className="register">
        <span className="registertitle">Login</span>
        <form className="registerform">
            <label>Username</label>
            <input type="text" className="registerinput" name="username" placeholder="Enter your Username..." />
            <label>Email</label>
            <input type="email" className="registerinput" name="email" placeholder="Enter your Email..." />
            <label>Password</label>
            <input type="password" className="registerinput" name="password" placeholder="Enter your Password..." />
            <button className="loginbutton">Register</button>
        </form>
        <button className="registerbutton">Login</button>
    </div>
  )
}

export default register
