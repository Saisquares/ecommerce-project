import React, { useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignUpbtn = (e) => {
    e.preventDefault()
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <div className="shadow-sm fixed bg-white w-full">
        <p className="font-bold flex items-center text-2xl my-4 px-4 text-blue-700"><span className="px-1"><IoBagHandle /></span>Shophub</p>
        <hr />
      </div>
      <div className="mx-auto px-4 grid content-center lg:w-5/12 md:w-6/12 h-screen  ">
        <form>
          <div className="mb-5">
            <h1 className="font-bold text-2xl  mx-3">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <p className="font-semibold text-slate-500  mx-3">
            {isSignIn ? "Hi, Welcome Back👋" : "Hello👋 Register here"}
            </p>
          </div>
          <div className="flex flex-col">
            {!isSignIn && (
                <>
                <label htmlFor="fullname" className="text-black  mx-3">
                Full Name
              </label>
              <input
                className="border border-slate-700 p-3 m-3 rounded-sm"
                type="fullname"
                name="fullname"
                id="fullname"
                placeholder="Enter your name"
            
              />
              </>
            )}
            <label htmlFor="email" className="text-black  mx-3">
              Email
            </label>
            <input
              className="border border-slate-700 p-3 m-3 rounded-sm"
              type="email"
              name="email"
              id="email"
              placeholder="useremail@gmail.com"
          
            />
            <label htmlFor="password" className="mx-3">
              Password
            </label>
            <input
              className="border border-slate-700 p-3 m-3 rounded-sm"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
             
            />

            <button className="bg-blue-700 font-semibold text-white p-3 m-3 rounded-sm">
            {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="text-center">
            <button
              className="cursor-pointer font-semibold"
              onClick={handleSignUpbtn}
            >
              {isSignIn ? (<p className="flex">Not registered yet? <span className="text-blue-700 flex items-center px-2">Sign Up <span><RiArrowRightUpLine /></span></span></p>) : (<p className="flex  ">Already registered? <span className="text-blue-700 flex items-center px-2">Sign In <span ><RiArrowRightUpLine /></span></span></p>)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
