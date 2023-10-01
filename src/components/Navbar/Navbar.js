import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Expense from "..//../assets/expenses.png";
import { addIncome } from "../../store/expenseReducer";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { logout, selectUser } from "../../store/userSlice";

const Navbar = () => {
  const balance = useSelector((state) => state.expense.balance);

  console.log(balance);

  const dispatch = useDispatch();

  console.log(balance);

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  const user = useSelector(selectUser);

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
      </div>
      <div>
        <button onClick={logoutOfApp}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
