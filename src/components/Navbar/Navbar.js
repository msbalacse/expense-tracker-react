import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="logo">LOGO</div>
      <ul>
        <li>Balance : $900</li>
      </ul>
      <div className="profile">
        <p>profile</p>
      </div>
    </nav>
  );
};

export default Navbar;
