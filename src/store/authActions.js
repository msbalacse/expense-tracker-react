// actions/authActions.js
import { setUser, clearUser } from './authSlice';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

export const loginUser = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    dispatch(setUser(user));
  } catch (error) {
    // Handle login error.
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(clearUser());
};

// export const signInuser =(email,password)=> async (dispatch) => {
//   try{

//   }catch(error){

//   }
// }
