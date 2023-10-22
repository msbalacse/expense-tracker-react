// actions/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser, clearUser } from './authSlice';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

const auth = getAuth();

export const loginUser = createAsyncThunk(
  'auth/signInUser',
  async (email, password) => {
    const dispatch = useDispatch();
    try {
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log('Account has logined successfully');
        console.log(auth.currentUser);
        dispatch(setUser(auth.currentUser));
        Cookies.set('userExist', true);
        console.log(Cookies.get('userExist'));
        console.log('setuser has called');
      });
    } catch (error) {
      console.log(error);
      console.log('error has occurred');
    }
  }
);

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(clearUser());
  Cookies.set('userExist', false);
  console.log('dispatch');
};

export const signInuser = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password).then((e) => {
      console.log(e.user);
      console.log('successfully created');
    });
  } catch (error) {
    console.log(error);
  }
};
