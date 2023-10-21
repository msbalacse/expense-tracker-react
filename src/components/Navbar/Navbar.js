import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/expenses.png';
import { addIncome } from '../../store/expenseReducer';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/authActions';

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const balance = useSelector((state) => state.expense.balance);
  console.log(user);

  const handleLogout = () => {
    dispatch(logoutUser());
    console.log('User logged out');
  };

  return (
    <nav id="nav" className="absolute top-0 left-0 w-[200px] h-screen">
      <NavLink to="/" className="logo">
        <img src={Expense} alt="expense logo" />
      </NavLink>
      <ul>
        <li>Balance : ${balance}</li>
      </ul>
      <Link to="/addIncome">Add Income</Link>
      <div className="profile">
        <p>profile</p>
        <p>{user?.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
