import React from "react";
import { NavLink } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const HomeNavbar = () => {
  return (
    <div className="col-span-1 flex flex-col gap-4 my-4 bg-[#ff0000] h-scrren">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/addincome">
        <div className="flex gap-2 items-center justify-center">
          <HiPlus />
          Add Income
        </div>
      </NavLink>
    </div>
  );
};

export default HomeNavbar;
