import React from "react";
import { signOut } from "firebase/auth";
import { IoBagHandle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOutBtn = () => {
    // signout api
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });

 
  };
  return (
    <div className="shadow-sm fixed bg-white w-full flex justify-between items-center">
      <div>
      <p className="font-bold flex items-center text-2xl my-4 px-4 text-blue-700">
        <span className="px-1">
          <IoBagHandle />
        </span>
        Shophub
      </p>
      </div>
      <div className="mx-4">
      <button className="px-3 py-2 rounded-md font-semibold  bg-black text-white" onClick={handleSignOutBtn}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
