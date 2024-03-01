import React from "react";
import { signOut } from "firebase/auth";
import { IoBagHandle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems)
  const navigate = useNavigate();
  const handleSignOutBtn = () => {
    // signout api
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message)
        // An error happened.
        // navigate("/error");
      });
  };
  return (
    <div className="shadow-sm fixed bg-white w-full z-20">
      
      <div className="container-box flex justify-between items-center"> 
        <div className="logo">
          <p className="font-bold flex items-center text-2xl my-4 px-4 text-blue-700">
            <span className="px-1">
              <IoBagHandle />
            </span>
            Shophub
          </p>
        </div>
        <div className="navLinks flex ">
          <ul className="flex">
            <Link to={"/home"}><li className="px-3 py-1 mx-4 cursor-pointer active:outline-none border-b-2 border-transparent active:border-b-2  active:border-blue-700"><p className="text-blue-700 text-lg font-semibold" >Home</p></li></Link>
            <Link to="/about"><li className="px-3 py-1 mx-4 cursor-pointer active:outline-none border-b-2 border-transparent active:border-b-2  active:border-blue-700"><p className="text-blue-700 text-lg font-semibold" >About</p></li></Link>
            <Link to={"/cart"}><li className="px-3 py-1 mx-4 cursor-pointer active:outline-none border-b-2 border-transparent active:border-b-2  active:border-blue-700"><p className="text-blue-700 text-lg font-semibold flex items-center" >Cart <span className="px-1"><IoCart/></span><span className="text-sm">{cartItems.length}</span></p></li></Link>
            <Link to={"/wishlist"}><li className="px-3 py-1 mx-4 cursor-pointer active:outline-none border-b-2 border-transparent active:border-b-2  active:border-blue-700"><p className="text-blue-700 text-lg font-semibold flex items-center" >Wishlist</p></li></Link>
          </ul>
        </div>
        <div className="signOutBtn mx-4">
        <button
          className="px-3 py-2 rounded-md font-semibold ml-4 bg-blue-700 text-white"
          onClick={handleSignOutBtn}
        >
          Sign Out
        </button>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
