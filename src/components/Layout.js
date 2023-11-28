import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import NotFoundPage from '../Pages/NotFoundPage';

const Layout = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <Router>
        <Navbar />
        <div className="col-span-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
