import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/expenses.png';

const Navbar = () => {
  return (
    <nav id="nav" className="flex justify-between w-full p-4">
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
