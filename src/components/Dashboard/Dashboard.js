import React, { useRef } from 'react';
import { setUser } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const userValue = useSelector((state) => state.auth.value);
  const userName = useRef();
  const dispatch = useDispatch();

  return (
    <div>
      <p className="py-8 text-secondary">Layout changed.</p>
      <form className="flex flex-col gap-2">
        <input type="text" ref={userName} className="w-40" />
        <button className="w-16 text-sm font-normal bg-primary">
          set name
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
