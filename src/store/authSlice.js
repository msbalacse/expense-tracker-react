// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../firebase';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = authSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading());
  try {
    // Use Firebase authentication to log in
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const createUser = (email, password) => async (dispatch) => {
  dispatch(setLoading());
  try {
    // Use Firebase authentication to create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const selectUser = (state) => state.auth.user;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
