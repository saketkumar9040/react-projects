// import React from 'react' ;
import './TopBar.css' 

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
           <li className="topbar-list-item">HOME</li>
           <li className="topbar-list-item">ABOUT</li>
           <li className="topbar-list-item">CONTACT</li>
           <li className="topbar-list-item">CREATE LISTING</li>
           <li className="topbar-list-item">LOG OUT</li>
        </ul>
    </div>
    <div className="topbar-right">
        <img className="topbar-profile-picture" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profilePicture'/>
        <i className=" topbar-search  fa-sharp fa-solid fa-magnifying-glass"></i>
       </div> 
    </div>
  )
};
export default TopBar;


