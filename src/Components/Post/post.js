import React from 'react'
import {Link} from 'react-router-dom'
import './post.css'
import img4 from '../../Images/img4.jpg'

function post({post}) {
    const PF = "http://localhost:5000/Images/";
  return (
    <div className="post">
        {post.photo && (
            <img
                className="postimg"
                src={PF + post.photo}
                alt="img4"
            />
        )}
        <div className="postinfo">
            <div className="postcats">
                {post.categories.map((c) => (
                    <span className="postcat">{c.name}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <span className="posttitle">{post.title}</span>
            </Link>
            <hr/>
            <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postdesc">
            {post.description}
        </p>
    </div>
  )
}

export default post
