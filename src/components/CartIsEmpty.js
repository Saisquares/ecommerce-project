import React from 'react'
import emptyCartLogo from '../utils/empty-cart.png'
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const CartIsEmpty = () => {
  const navigate = useNavigate()
  return (
    <div className="grid content-center h-screen mx-auto  align-middle w-6/12 ">
        <img
          className="w-32 md:w-32 lg:w-48 mx-auto"
          src={emptyCartLogo}
          alt="cartempty"
        />
        <p className="text-center font-semibold text-lg md:text-2xl my-2 py-2 ">
          Your Cart Is Currently Empty
        </p>
        <p className="text-center  md:w-7/12 mx-auto">Looks like you have not added anything to you cart. Go ahead & explore top categories</p>
        <div className="text-center font-semibold text-md my-2 py-2 relative">
          <button onClick={() => navigate('/home')} className="bg-blue-700 text-white px-4 pl-7 py-1 rounded ">Continue Shopping<span><MdArrowRightAlt className="inline-block  text-3xl px-1" /></span></button>
        </div>
      </div>
  )
}

export default CartIsEmpty