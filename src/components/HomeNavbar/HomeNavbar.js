import React from "react";
import { NavLink } from "react-router-dom";
import AddIncome from "../AddIncome/AddIncome";

const HomeNavbar = () => {
  return (
    <div className="col-span-1 flex flex-col gap-4 my-4 bg-[#ff0000] h-scrren">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/addincome">Add Income</NavLink>
    </div>
  );
};

export default HomeNavbar;
