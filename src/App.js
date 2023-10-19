import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser, signInuser } from './store/authActions';
import MainRouter from './Pages/Router';
function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleSignIn = () => {
    dispatch(signInuser('msbalacse@gmail.com', 'password'));
  };

  const handleLogin = () => {
    dispatch(loginUser('msbalacse@gmail.com', 'password'));
  };

  return (
    <div>
      {user ? (
        <div className="font-bold">
          <MainRouter />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
          <p>New user ??</p>
          <button onClick={handleSignIn}>Signin</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
