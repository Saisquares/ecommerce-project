import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductsCard from "./CartProductsCard";
import CartIsEmpty from "./CartIsEmpty";
import {
  quantityDecrease,
  quantityIncrease,
  removeProductInCart,
} from "../utils/cartProdutsSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((store) => store.cart.cartItems);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const totalAmount = cartProducts.reduce((acc, value) => acc + value.price, 0);

  const handleRemoveCartProduct = (id) => {
    dispatch(removeProductInCart(id));
  };
  const handleIncreaseQuantity = (id) => {
    
    dispatch(quantityIncrease(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(quantityDecrease(id));
  };

  if (cartProducts.length === 0) return <CartIsEmpty />;

  return (
    <div className="pt-20 w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
      <div>
        <h1 className="text-center font-bold text-xl lg:text-4xl py-4 lg:py-8 border-b-2">
          Shopping Cart
        </h1>
      </div>
      <div>
      {cartProducts &&
          cartProducts.map((product) => (
            <CartProductsCard
              key={product.id}
              data={product}
              handleRemoveCartProduct={() => handleRemoveCartProduct(product.id)}
              handleIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
              handleDecreaseQuantity={() => handleDecreaseQuantity(product.id)}
            />
          ))}
      </div>
      <div>
        <div className="flex justify-between my-8">
          <div>
            <p className="text-2xl">Subtotal</p>
            <p className="text-md text-gray-500">
              Shipping and taxes will be calculated at checkout
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
        <div className="text-center my-4">
          {" "}
          <button className="py-2 w-full bg-blue-700 text-white rounded-sm text-lg">
            Checkout
          </button>
          <button className="my-3 font-semibold text-sm" onClick={() => navigate('/home')}>Add More Products</button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
