import React, { useRef } from 'react';
import { setUser } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const userValue = useSelector((state) => state.auth.value);
  const userName = useRef();
  const dispatch = useDispatch();

  const handleSetName = (e) => {
    e.preventDefault();
    console.log(userName.current.value);
    console.log('--------------------------------');
    dispatch(setUser(userName.current.value));
    console.log(userValue);
    userName.current.value = '';
  };

  return (
    <div>
      Dashboard
      <form>
        <input type="text" ref={userName} />
        <button onClick={handleSetName}>set name</button>
      </form>
    </div>
  );
};

export default Dashboard;
