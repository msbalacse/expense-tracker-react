import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { addProfile } from '../store/userProfileReducer';

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const username = useRef('');
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const userUUID = user.uid;
  const userEmail = user.email;
  const userName = username.current.value;

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('here is a new profile');
    addProfile(userUUID, userEmail, userName, image);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={username} />
        <label htmlFor="picture">profile</label>
        <input
          type="file"
          onChange={(e) => setImage(e.currentTarget.files[0])}
        />
        <button onClick={handleProfileSubmit}>send</button>
      </form>
    </div>
  );
};

export default UserProfile;
