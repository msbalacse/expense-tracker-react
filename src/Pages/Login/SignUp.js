import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SignInUser } from '../../store/auth/authActions';

const SignUp = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = () => {
    dispatch(SignInUser(emailRef.current.value, passwordRef.current.value));
    alert(emailRef.current.value);
    alert(passwordRef.current.value);
  };

  return (
    <div>
      <from className="flex flex-col flex-wrap mx-auto w-1/2 gap-4 text-[#ffffff] font-SFProDisplayBold text-xs">
        <label>Email</label>
        <input
          className="bg-primary border border-[#ffffff] p-1 font-SFProDisplayMedium outline-none"
          type="text"
          id="email"
          name="email"
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

        <button onClick={handleSignUp} className="p-3 text-sm bg-black">
          Sign Up
        </button>
      </from>
    </div>
  );
};

export default SignUp;
