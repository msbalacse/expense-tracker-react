import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import AddIncome from '../components/AddIncome/AddIncome';
import Navbar from '../components/Navbar/Navbar';

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addIncome" element={<AddIncome />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
