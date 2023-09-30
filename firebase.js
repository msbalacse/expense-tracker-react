import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJQLl9opcTQyhyBwkT_bSrSGf2QC5kL8E",
  authDomain: "expense-tracker-c575a.firebaseapp.com",
  projectId: "expense-tracker-c575a",
  storageBucket: "expense-tracker-c575a.appspot.com",
  messagingSenderId: "863063243071",
  appId: "1:863063243071:web:ab80a011a432241bfabb8a",
  measurementId: "G-XPZ010RSB2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
