import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Expense from '..//../assets/expenses.png';
import { addIncome } from '../../store/expenseReducer';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const balance = useSelector((state) => state.expense.balance);
  const currentUser = useSelector((state) => state.auth.user);
  console.log(balance);

  return (
    <nav id="nav">
      <div className="logo">
        <img src={Expense} alt="expense logo" />
      </div>
      <ul>
        <li>Balance : ${balance}</li>
      </ul>
      <div className="profile">
        <p>profile</p>
        <p>{currentUser?.email}</p>
      </div>
    </nav>
  );
};

export default Navbar;
