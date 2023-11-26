import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_SUCCESS,
} from './authTypes';

import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '../../firebase';

// Login action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const SignInUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then(() => {
      alert(`User ${userCredential.email}`);
    });
    dispatch(SIGNUP_SUCCESS(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error));
    console.log(email, password);
    console.log(error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error));
    console.log(email, password);
    console.log(error);
  }
};

// Logout action creators
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutRequest());
  console.log('here logged out');
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error));
    console.log(error);
  }
};
