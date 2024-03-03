import React from "react";

const CartProductsCard = ({ data, handleRemoveCartProduct,handleIncreaseQuantity,handleDecreaseQuantity }) => {
  const { id, title, price, image, quantity, category, index } = data;

  return (
    <div className="grid grid-cols-4 gap-1 py-5 border-b-2 ">
      <div className=" place-self-center">
        <img className="h-28 object-contain" src={image} alt={title} />
      </div>
      <div className="col-span-2">
        <p className=" text-sm font-semibold lg:font-normal md:text-xl lg:text-xl">{title}</p>
        <p className="text-gray-500">{category}</p>
        <div className="mt-6 flex items-center">
          <span className="font-semibold">Quantity</span>
          <div className="pl-2 flex items-center">
          <button className=" px-2.5 bg-gray-400 text-lg font-bold mx-1 text-black rounded-sm" onClick={() => handleDecreaseQuantity(index)}>-</button>
            <span className="font-semibold mx-1">{quantity}</span>
            <button className=" px-2 bg-gray-400 text-lg font-bold mx-1 text-black rounded-sm" onClick={() => handleIncreaseQuantity(index)}>+</button>
            
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 place-items-end justify-stretch items-stretch">
        <p className="">$ {price}</p>
        <button
          className=" text-blue-700 font-semibold"
          onClick={() => handleRemoveCartProduct(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProductsCard;
