import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser, signInuser } from './store/authActions';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const isUser = useSelector((state) => state.auth.isUser);
  const data = useSelector((state) => state.auth.value);
  console.log(user);
  console.log(isUser);
  console.log(data);

  const userExist = Cookies.get('user');
  console.log(userExist);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signInuser('msbalacse@gmail.com', 'password'));
  };

  const handleLogin = () => {
    dispatch(loginUser('msbalacse@gmail.com', 'password'));
    setToggle(true);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {userExist ? (
        <div className="font-bold text-center">
          <Navbar />
          <Home />
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center flex-col gap-2">
          <p>New user ??</p>
          <button onClick={handleSignIn}>Signin</button>
          <button onClick={handleLogin}>Login</button>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
}

export default App;
