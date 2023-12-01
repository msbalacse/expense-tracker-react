import { createSlice } from '@reduxjs/toolkit';

import { addDoc, updateDoc, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { uploadBytes, getDownloadURL, StorageRef } from '../firebase';

import { db } from '../firebase';

const initialState = {
  email: null,
  userUUID: null,
  name: null,
  profilePicture: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      const { userEmail, userName, userProfilePicture } = action.payload;
      state.email = userEmail;
      let name = state.name;
      console.log('function called');

      let imageUrl = '';
      const storage = getStorage();
      const imageRef = StorageRef(storage, `/images/${userName}`);
      uploadBytes(imageRef, userProfilePicture)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              console.log(url);
              imageRef = url;
            })
            .catch((error) => console.log('download image url error' + error));
        })
        .catch((error) => console.log('download', error));
      try {
        addDoc(collection(db, `${userEmail}`), {
          userEmail,
          userProfilePicture,
          userName,
        }).then(() => {
          console.log('user profile added');
        });
      } catch (e) {
        console.log('user profile', e);
      }
    },
    // updateProfile: (state,action)=>{

    // }
  },
});

export const { addProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
