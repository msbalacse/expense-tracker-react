import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import AddIncome from '../components/AddIncome/AddIncome';
import Navbar from '../components/Navbar/Navbar';

const MainRouter = () => {
  return (
    <div className="relative p-4">
      <Router>
        <Navbar />
        <div className="ml-[200px] ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addIncome" element={<AddIncome />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default MainRouter;
