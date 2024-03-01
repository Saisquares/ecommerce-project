import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartProdutsSlice";

const ProductCard = ({data}) => {
  const { id, title, price, image, rating, category, index } = data;
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  const handleWishListBtn = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist];
      updatedWishlist[productId] = !updatedWishlist[productId];
      return updatedWishlist;
    });
  };

  const handleAddToCartBtn = (index) => {
    console.log(products[index])
    dispatch(addToCart(products[index]));
  };
  return (
    <div
      key={id}
      className="relative m-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <div className="m-6 ">
        <div className="relative ">
          <div
            className="absolute top-1 right-1 text-4xl  bg-white h-8 w-8 rounded shadow-lg cursor-pointer"
            onClick={() => handleWishListBtn(id)}
          >
            {wishlist[id] ? (
              <FaHeartCircleCheck className="text-red-500 mx-auto my-2 text-2xl " />
            ) : (
              <FaHeartCirclePlus className="text-gray-300 mx-auto my-2 text-2xl" />
            )}
          </div>
        </div>

        <div>
          <img className="h-52 p-5 mx-auto" src={image} alt={title} />
          <h1 className={`text-lg ${title.length > 15 ? "truncate" : ""}`}>
            {title}
          </h1>
          <p className="text-md text-gray-500">{category}</p>

          <span className="flex items-center justify-between my-1">
            <p className="text-lg font-bold">Price ${price}</p>
            <p className="text-lg font-bold flex items-center">
              <span>
                <MdStar />
              </span>
              {rating?.rate}
            </p>
          </span>
          <button
            className="bg-blue-700 text-white px-2 py-1 my-2 rounded w-full"
            onClick={() => handleAddToCartBtn(index)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
