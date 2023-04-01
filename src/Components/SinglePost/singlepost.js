import React, {useEffect, useState, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import './singlepost.css'
// import img5 from '../../Images/img5.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // console.log(path);
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/Images/";
  const {user} = useContext(Context);


  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      // console.log(res.data)
      setPost(res.data);
    }
    getpost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`,{
        data:{username: user.username}
      });
      window.location.replace("/");
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img
              src={PF + post.photo}
              alt=""
              className="singlepostimg"
          />
        )}
        <h1 className="singleposttitle">
            {post.title}
            {post.username === user?.username && 
              <div className="singlepostedit">
                  <i class="singleposticon fa-solid fa-pen-to-square"></i>
                  <i class="singleposticon fa-solid fa-trash" onClick={handleDelete} ></i>
              </div>
            }
        </h1>
        <div className="singlepostinfo">
            <span className="singlepostauthor">
            Author: 
              <Link to={`/?user=${post.username}`} className='link' >
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlepostdate">{new Date(post.createdAt).toDateString()} </span>
        </div>
        <p className="singlepostdesc">
            {post.description}
        </p>
      </div>
    </div>
  )
}

export default Singlepost
