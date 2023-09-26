import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  const balance = useSelector((state) => state.store.balance);
  useEffect(() => {}, [balance]);
  return (
    <div>
      Home
      <p>value {balance}</p>
    </div>
  );
};

export default Home;
