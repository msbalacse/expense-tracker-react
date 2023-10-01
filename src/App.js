import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="font-bold text-center">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
