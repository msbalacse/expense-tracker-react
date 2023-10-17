import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, value: 'Balamurugan' },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    },
    clearUser: (state) => {
      state.user = null;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser, clearUser, isUser, setValue } = authSlice.actions;
export default authSlice.reducer;
