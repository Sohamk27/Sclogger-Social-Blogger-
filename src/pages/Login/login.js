import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginform">
            <label>Email</label>
            <input type="email" className="logininput" name="email" placeholder="Enter your Email..." />
            <label>Password</label>
            <input type="password" className="logininput" name="password" placeholder="Enter your Password..." />
            <button className="loginbutton">Login</button>
        </form>
        <button className="registerbutton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}

export default login
