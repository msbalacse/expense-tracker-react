import './App.css';
import MainRouter from './Pages/Router';

function App() {
  return (
    <div>
      <MainRouter />
      {/* {user ? (
        <div className="font-bold">
          <MainRouter />
        </div>
      ) : (
        <div className="flex items-center justify-around h-screen gap-2">
          {/* <p>New user ??</p>
          <button onClick={handleSignIn}>Signin</button>
          <button onClick={handleLogin}>Login</button> 
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
      )} */}
    </div>
  );
}

export default App;
