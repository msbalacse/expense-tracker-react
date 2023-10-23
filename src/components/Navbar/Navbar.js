import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/expenses.png';

const Navbar = () => {
  return (
    <nav id="nav" className="absolute top-0 left-0 w-[200px] h-screen">
      <NavLink to="/" className="logo">
        <img src={Expense} alt="expense logo" />
      </NavLink>
      <ul>
        <li>Balance : 0</li>
      </ul>
      <Link to="/addIncome">Add Income</Link>
      <div className="profile">
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
