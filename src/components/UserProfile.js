import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div>
      usermail : {user.email}
      <br /> {user.uid}
    </div>
  );
};

export default UserProfile;
