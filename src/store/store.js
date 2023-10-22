// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userDataReducer from './userDataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userDataReducer,
  },
});

export default store;
