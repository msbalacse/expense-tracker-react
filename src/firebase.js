import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJQLl9opcTQyhyBwkT_bSrSGf2QC5kL8E',
  authDomain: 'expense-tracker-c575a.firebaseapp.com',
  projectId: 'expense-tracker-c575a',
  storageBucket: 'expense-tracker-c575a.appspot.com',
  messagingSenderId: '863063243071',
  appId: '1:863063243071:web:ab80a011a432241bfabb8a',
  measurementId: 'G-XPZ010RSB2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
