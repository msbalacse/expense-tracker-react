import { useSelector } from 'react-redux';
import './App.css';
import Layout from './components/Layout';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import { useState } from 'react';
import { ExpenseLogIn } from './assets/images';

function App() {
  const user = useSelector((state) => state.auth.user);
  const [loginToggle, setLoginToggle] = useState(true);

  console.log(user);

  const userLocal = localStorage.getItem('user');

  if (user) {
    return <Layout />;
  }

  return (
    <div className="grid h-screen grid-cols-2 place-items-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={ExpenseLogIn} alt="expense login png" className="w-[200px]" />
        <h1 className="text-2xl uppercase text-primary font-SFProDisplayBold ">
          Expense Tracker
        </h1>
      </div>
      <div className="w-full h-full mx-auto bg-primary">
        <div className="flex justify-center gap-8 p-4 my-4 text-black border-b font-SFProDisplayHeavy border-primary">
          <button
            className={`${loginToggle ? 'border-b-2 border-white' : null}`}
            onClick={() => setLoginToggle(true)}
          >
            LogIn
          </button>
          <button
            className={`${loginToggle ? null : 'border-b-2 border-white'}`}
            onClick={() => setLoginToggle(false)}
          >
            SignUp
          </button>
        </div>
        <div className="">{loginToggle ? <Login /> : <SignUp />}</div>
      </div>
    </div>
  );
}

export default App;
