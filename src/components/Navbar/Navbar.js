import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Expense from "..//../assets/expenses.png";
import { addIncome } from "../../store/expenseReducer";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const balance = useSelector((state) => state.expense.income);

  console.log(balance);

  const dispatch = useDispatch();

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
        <p>
          <button onClick={() => dispatch(addIncome(5))}>increase 5$</button>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
