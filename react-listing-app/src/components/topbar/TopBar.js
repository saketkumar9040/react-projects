 import React from 'react' ;
import './TopBar.css' 
import { NavLink } from 'react-router-dom';

function TopBar(){
  return(
    <div className="topbar">
    <div className='topbar-left'>
    <i className="topbar-social-icon fa-brands fa-square-instagram"></i>
    <i className="topbar-social-icon fa-brands fa-square-facebook"></i>
    <i className="topbar-social-icon fa-brands fa-linkedin"></i>
    <i className="topbar-social-icon fa-brands fa-square-twitter"></i>
    </div>
    <div className="topbar-center">
        <ul className="topbar-list">
           <li className="topbar-list-item">
           <NavLink to="/"> HOME</NavLink>
            </li>
           <li className="topbar-list-item">ABOUT</li>
           <li className="topbar-list-item">CONTACT</li>
           <li className="topbar-list-item">
            <NavLink to="/create">CREATE PROPERTY</NavLink></li>
           <li className="topbar-list-item">LOG OUT</li>
        </ul>
    </div>
    <div className="topbar-right">
        <img className="topbar-profile-picture" src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt='profilePicture'/>
        <i className=" topbar-search  fa-sharp fa-solid fa-magnifying-glass"></i>
       </div> 
    </div>
  )
};
export default TopBar;


