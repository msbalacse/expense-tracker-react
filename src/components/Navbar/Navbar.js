import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/images/expenses.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/auth/authActions';

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  localStorage.setItem('user', currentUser);
  console.log(currentUser);

  const handleLogout = () => {
    console.log('click');
    dispatch(logoutUser());
  };

  console.log(currentUser);
  return (
    <nav id="nav" className="flex justify-between w-full p-4">
      <NavLink to="/" className="logo">
        <img src={Expense} alt="expense logo" />
      </NavLink>
      <li>
        <p>Email:</p> <p>{currentUser.email}</p>
      </li>
      <ul>
        <li>Balance : 0</li>
      </ul>
      <Link to="/addIncome">Add Income</Link>
      <div className="profile">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
