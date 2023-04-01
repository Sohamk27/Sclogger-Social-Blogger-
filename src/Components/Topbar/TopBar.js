import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./TopBar.css"
import Userimg from "../../Images/img1.jpg"
import {Context} from '../../context/Context'

function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }
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
                    <li className="toplistitem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="toplistitem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="toplistitem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="toplistitem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="toplistitem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topright">
                {
                    user ? (
                        <Link classname="link" to="/setting">
                            <img 
                                className="topimg" 
                                src={user.profilePic ? user.profilePic : Userimg}
                                alt="" 
                            />
                        </Link>
                    ) : (
                        <ul className="toplist">
                            <li className="toplistitem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="toplistitem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar
