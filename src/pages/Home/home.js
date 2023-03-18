import React from 'react'
import './home.css'
import Header from '../../Components/Header/header'
import Posts from '../../Components/Posts/posts'
import Sidebar from '../../Components/Sidebar/sidebar'
// import axios from 'axios'

function home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default home
