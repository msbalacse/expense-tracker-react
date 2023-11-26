import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(loginUser(emailRef.current.value, passwordRef.current.value));
    console.log('dispatch called');
    alert(JSON.stringify(loginData, null, 2));
  };

  return (
    <div>
      <form className="flex flex-col flex-wrap mx-auto w-1/2 gap-4 text-[#ffffff] font-SFProDisplayBold text-xs">
        <label className="">Email</label>
        <input
          className="bg-primary border border-[#ffffff] p-1 font-SFProDisplayMedium outline-none"
          type="email"
          name="email"
          id="email"
          ref={emailRef}
        />

        <label>Password</label>
        <input
          className="bg-primary border border-[#ffffff] p-1 font-SFProDisplayMedium outline-none"
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />

        <button onClick={handleSubmit} className="p-3 text-sm bg-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
