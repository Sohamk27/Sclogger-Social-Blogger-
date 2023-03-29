import React, {useState, useEffect} from 'react'
import './sidebar.css'
import img3 from '../../Images/img6.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
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
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarlistitem">{c.name}</li>
                    </Link>
                ))}
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

export default Sidebar
