import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  const balance = useSelector((state) => state.expense.balance);
  return <div>Home</div>;
};

export default Home;
