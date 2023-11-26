import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import AddIncome from './AddIncome/AddIncome';
import NotFoundPage from '../Pages/NotFoundPage';

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addIncome" element={<AddIncome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Layout;
