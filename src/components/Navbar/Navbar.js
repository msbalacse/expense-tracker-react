import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/expenses.png';
import { addIncome } from '../../store/expenseReducer';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const balance = useSelector((state) => state.expense.balance);
  console.log(user);

  return (
    <nav id="nav" className="col-span-1">
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
      </div>
    </nav>
  );
};

export default Navbar;
