import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const HomeDropDown = ({ handleClose, toggleSubMenu, showSubMenu }) => {
  return (
    <div className="drop-down">
      <div onClick={toggleSubMenu} className="drop-down-link">
        <div className="icon">
          <AiFillHome />
        </div>
        Home
      </div>
      <div className={`sub-menu ${showSubMenu ? "open" : ""}`}>
        <NavLink to="/admin/dashboard/home/slogan" onClick={handleClose}>
          Slogan
        </NavLink>
        <NavLink to="/admin/dashboard/home/video" onClick={handleClose}>
          Video
        </NavLink>
        <NavLink to="/admin/dashboard/home/family" onClick={handleClose}>
          Family
        </NavLink>
        <NavLink to="/admin/dashboard/home/achievements" onClick={handleClose}>
          Achievements
        </NavLink>
        <NavLink to="/admin/dashboard/home/partners" onClick={handleClose}>
          Partners
        </NavLink>
        <NavLink to="/admin/dashboard/home/testimonials" onClick={handleClose}>
          Testimonials
        </NavLink>
      </div>
    </div>
  );
};

export default HomeDropDown;
