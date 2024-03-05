import React, { useEffect, useRef, useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";
import validateForm from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  // toggle signin/signup
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };


  // for password visible toggle
  const handleVisblePassword = () => {
    setShowPassword(!showPassword);
    // same like toggle if password toggle to text , if text toggle to password
    password.current.type =
      password.current.type === "password" ? "text" : "password";
  };

    const handleByPassSignin = () => {
      navigate("/home");
      toast.success(`Welcome Guest`)
    }


  //for signin/signup
  const handleClickBtn = () => {
    const message = validateForm(
      email?.current?.value,
      password?.current?.value,
      fullname?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullname?.current?.value
          }).then(() => {
            
            toast.success(`Welcome ${user.displayName}`);
          }).catch((error) => {
            // Handle errors in setting the display name
            console.error("Error setting display name:", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in

      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success(`Welcome ${user.displayName}`)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Invalid credential");
          } else {
            setErrorMessage(errorMessage);
          }
        });
    }
  };

  //manage users to set the signin and signout feature and passing the data to the store
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // signup,signin firest time it is called
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/home");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);


  return (
    <div>
      <div className="shadow-sm fixed bg-white w-full">
        <p className="font-bold flex items-center text-2xl my-4 px-4 text-blue-700">
          <span className="px-1">
            <IoBagHandle />
          </span>
          Shophub
        </p>
        <hr />
      </div>
      <div className="mx-auto px-4 grid content-center lg:w-5/12 md:w-6/12 h-screen  ">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-5">
            <h1 className="font-bold text-2xl  mx-3">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <p className="font-semibold text-slate-500  mx-3">
              {isSignIn ? "Hi, Welcome Back👋" : "Hello👋 Register here"}
            </p>
          </div>
          <div className="flex flex-col relative">
            {!isSignIn && (
              <>
                <label htmlFor="fullname" className="text-black  mx-3">
                  Full Name
                </label>
                <input
                  className="border border-slate-700 p-3 m-3 rounded-sm"
                  type="fullname"
                  ref={fullname}
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your name"
                  required
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
              ref={email}
              placeholder="useremail@gmail.com"
              required
            />
            <label htmlFor="password" className="mx-3">
              Password
            </label>

            <input
              className="border border-slate-700 p-3 m-3 rounded-sm"
              type="password"
              name="password"
              id="password"
              ref={password}
              placeholder="Enter your password"
              required
            />
            <span
              className={`cursor-pointer absolute ${
                isSignIn ? "top-[9.5rem]" : "top-[15.5rem]"
              } right-8`}
              onClick={handleVisblePassword}
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </span>

            {errorMessage && (
              <div className="px-3  py-1 ">
                <p className="text-red-600 text-xs font-medium">
                  {errorMessage}
                </p>
              </div>
            )}

            <button
              className="bg-blue-700 font-semibold text-white p-3 m-3 rounded-sm"
              onClick={handleClickBtn}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="text-center">
            <button
              className="cursor-pointer font-semibold"
              onClick={handleToggle}
            >
              {isSignIn ? (
                <p className="flex">
                  Not registered yet?{" "}
                  <span className="text-blue-700 flex items-center px-2">
                    Sign Up{" "}
                    <span>
                      <RiArrowRightUpLine />
                    </span>
                  </span>
                </p>
              ) : (
                <p className="flex  ">
                  Already registered?{" "}
                  <span className="text-blue-700 flex items-center px-2">
                    Sign In{" "}
                    <span>
                      <RiArrowRightUpLine />
                    </span>
                  </span>
                </p>
              )}
            </button>
          </div>
          
        </form>
        <div className="text-center my-1">
          <button onClick={handleByPassSignin} className="font-semibold  text-blue-700">Continue as Guest</button>
          </div>
      </div>
    </div>
  );
};

export default SignIn;
