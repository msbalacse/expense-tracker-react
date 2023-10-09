import { createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
const initialState = {
  balance: 0,
  income: 0,
};

const expenceSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addMoney: (state, action) => {
      const { value, reason } = action.payload;
      state.balance += parseInt(value);
      console.log(value);
      console.log(reason);
      try {
        addDoc(collection(db, 'addData'), { value, reason }).then(() => {
          console.log('data uploaded successfully');
        });
      } catch (error) {
        console.error('Error uploading data:', error);
      }
    },
  },
});

export const { addMoney } = expenceSlice.actions;

export default expenceSlice.reducer;
