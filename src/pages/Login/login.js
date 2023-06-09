import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { Context } from '../../context/Context'
import axios from 'axios'

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              className="logininput" 
              name="username" 
              placeholder="Enter your Username..." 
              ref={userRef}  
            />
            <label>Password</label>
            <input 
              type="password" 
              className="logininput" 
              name="password" 
              placeholder="Enter your Password..." 
              ref={passwordRef}
            />
            <button className="loginbutton" disabled={isFetching}>Login</button>
        </form>
        <button className="registerbutton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}

export default Login
