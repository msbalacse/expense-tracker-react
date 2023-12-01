import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile } from '../store/userProfileReducer';

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const username = useRef('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const userUUID = user.uid;
  const userEmail = user.email;
  const userName = username.current.value;

  const handleImage = (e) => setImage(e.target.files[0]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log(userUUID, userEmail, userName, image);
    console.log('here is a new profile');
    console.log(image);
    dispatch(addProfile(userEmail, userName, image));
  };
  return (
    <div>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={username} />
        <label htmlFor="picture">profile</label>
        <input type="file" onChange={handleImage} />
        <button onClick={handleProfileSubmit}>send</button>
        {image ? (
          <>
            {/* <p>{image}</p> */}
            <img src={URL.createObjectURL(image)} alt="dsfa" />
          </>
        ) : null}
      </form>
    </div>
  );
};

export default UserProfile;
