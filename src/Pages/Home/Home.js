import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';

const Home = () => {
  const balance = useSelector((state) => state.expense.balance);
  return (
    <div className="grid grid-cols-4">
      <Dashboard />
    </div>
  );
};

export default Home;
