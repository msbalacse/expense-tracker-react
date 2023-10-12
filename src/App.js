import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser, signInuser } from './store/authActions';
import { useEffect } from 'react';

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSignIn = () => {
    dispatch(loginUser('msbalacse@gmail.com', 'password'));
  };

  const handleLogin = () => {
    dispatch(signInuser('msbalacse@gmail.com', 'password'));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
        <div className="font-bold text-center">
          <Navbar />
          <Home />
        </div>
      ) : (
        <>
          <p>Please login</p>
          <button onClick={handleSignIn}>Signin</button>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
