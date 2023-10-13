import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isUser: false, value: 'my name' },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    isUser: (state) => {
      state.isUser = true;
    },
  },
});

export const { setUser, clearUser, isUser } = authSlice.actions;
export default authSlice.reducer;
