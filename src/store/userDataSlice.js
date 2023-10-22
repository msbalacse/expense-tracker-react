// userDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export const selectUserData = (state) => state.userData;

export default userDataSlice.reducer;
