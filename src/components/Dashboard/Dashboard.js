import React, { useRef } from 'react';
import { setUser } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const userValue = useSelector((state) => state.auth.value);
  const userName = useRef();
  const dispatch = useDispatch();

  return (
    <div>
      Dashboard
      <form>
        <input type="text" ref={userName} />
        <button className="bg-primary p-4 w-16">set name</button>
      </form>
    </div>
  );
};

export default Dashboard;
