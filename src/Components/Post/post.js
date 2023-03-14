import React from 'react'
import './post.css'
import img4 from '../../Images/img4.jpg'

function post() {
  return (
    <div className="post">
        <img
            className="postimg"
            src={img4}
            alt="img4"
        />
        <div className="postinfo">
            <div className="postcats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>
            </div>
            <span className="posttitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postdate">1 hour ago</span>
        </div>
        <p className="postdesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
            lacinia nisl, vitae aliquam nisl nunc vel mauris. Sed
            tincidunt, nisl eget ultricies tincidunt, nunc nisl lacini
            a nisl, vitae aliquam nisl nunc vel mauris. Sed tincidunt,
            nisl eget ultricies tincidunt, nunc nisl lacinia nisl, vitae
            aliquam nisl nunc vel mauris. Sed tincidunt, nisl eget
            ultricies tincidunt, nunc nisl lacinia nisl, vitae aliquam
            nisl nunc vel mauris. Sed tincidunt, nisl eget ultricies
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
            lacinia nisl, vitae aliquam nisl nunc vel mauris. Sed
            tincidunt, nisl eget ultricies tincidunt, nunc nisl lacini
            a nisl, vitae aliquam nisl nunc vel mauris. Sed tincidunt,
            nisl eget ultricies tincidunt, nunc nisl lacinia nisl, vitae
            aliquam nisl nunc vel mauris. Sed tincidunt, nisl eget
            ultricies tincidunt, nunc nisl lacinia nisl, vitae aliquam
            nisl nunc vel mauris. Sed tincidunt, nisl eget ultricies
        </p>
    </div>
  )
}

export default post
