import { createSlice } from '@reduxjs/toolkit';

import { addDoc, updateDoc, collection } from 'firebase/firestore';

import { db } from '../firebase';

const initialState = {
  email: null,
  name: null,
  password: null,
  profilePicture: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      const { userUUID, userEmail } = action.payload;
      state.email = userEmail;
      let name = state.name;
      try {
        addDoc(collection(db, `${userEmail}`), {
          userUUID,
          userEmail,
          name,
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
