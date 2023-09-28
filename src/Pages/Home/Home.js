import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import AddIncome from "../../components/AddIncome/AddIncome";
import Dashboard from "../../components/Dashboard/Dashboard";

const Home = () => {
  const balance = useSelector((state) => state.expense.balance);
  return (
    <div className="grid grid-cols-4">
      <Router>
        <HomeNavbar />
        <div className="col-span-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addincome" element={<AddIncome />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
