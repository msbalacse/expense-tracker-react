import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  income: 0,
};

const expenceSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income += action.payload;
      console.log(state.income);
    },
  },
});

export const { addIncome } = expenceSlice.actions;

export default expenceSlice.reducer;
