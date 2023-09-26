import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  income: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income += action.payload;
      console.log(state.income);
    },
  },
});

export const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
  },
});

export const { addIncome } = storeSlice.actions;
