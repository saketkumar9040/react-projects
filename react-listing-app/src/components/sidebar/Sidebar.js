import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          className="sidebar-img "
          src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
          alt="pics"
        />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old
        </p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">categories</span>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Hostel</li>
          <li className="sidebar-category">
            B&B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us </span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fa-brands fa-square-instagram"></i>
          <i className="sidebar-social-icon fa-brands fa-square-facebook"></i>
          <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
          <i className="sidebar-social-icon fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
