import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser, signInuser } from './store/authActions';
import MainRouter from './Pages/Router';
import { useRef, useState } from 'react';
function App() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const email = useRef();
  const password = useRef();

  const user = useSelector((state) => state.auth.user);

  const handleSignIn = () => {
    dispatch(signInuser('msbalacse@gmail.com', 'password'));
  };

  const handleLogin = (email, password) => {
    dispatch(loginUser(email, password));
  };

  return (
    <div>
      {user ? (
        <div className="font-bold">
          <MainRouter />
        </div>
      ) : (
        <div className="flex justify-around items-center h-screen gap-2">
          {/* <p>New user ??</p>
          <button onClick={handleSignIn}>Signin</button>
          <button onClick={handleLogin}>Login</button> */}
          <div>
            <h1>Expense Tracker</h1>
          </div>
          <div>
            {toggle ? (
              <div>
                <form>
                  <div className="flex flex-col">
                    <label>Email</label>
                    <input
                      type="text"
                      className="text-[#000000] text-sm"
                      ref={email}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Password</label>
                    <input
                      type="text"
                      className="text-[#000000] text-sm"
                      ref={password}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        handleLogin(email.current.value, password.current.value)
                      );
                      console.log('Login successful');
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div>signin</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
