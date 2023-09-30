import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  income: 0,
};

const expenceSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addMoney: (state, action) => {
      const { value, reason } = action.payload;
      state.balance += parseInt(value);
      console.log(value);
      console.log(reason);
    },
  },
});

export const { addMoney } = expenceSlice.actions;

export default expenceSlice.reducer;
