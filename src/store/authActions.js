// actions/authActions.js
import { setUser, clearUser, isUser } from './authSlice';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export const loginUser = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    await signInWithEmailAndPassword(auth, email, password).then(() =>
      console.log('Account has logined successfully')
    );
    const user = auth.currentUser;
    console.log(user);
    setUser(user);
    setUser({ one: 'email', two: 'password' });
  } catch (error) {
    // Handle login error.
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(clearUser());
};

export const signInuser = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password).then((e) => {
      console.log(e.user);
      console.log('successfully created');
    });
  } catch (error) {
    console.log(error);
  }
};
