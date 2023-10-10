import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './store/authActions';

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser('msbalacse@gmail.com', 'password'));
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
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
