import React, { useEffect } from 'react';
import UserProfile from '../UserProfile';
import { useActionData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile } from '../../store/userProfileReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const userUUID = user.uid;
    const userEmail = user.email;
    dispatch(addProfile({ userUUID, userEmail }));
    console.log(userUUID, userEmail + ' created');
  }, []);
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default Dashboard;
