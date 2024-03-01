import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductsCard from "./CartProductsCard";
import CartIsEmpty from "./CartIsEmpty";
import { removeProductInCart } from "../utils/cartProdutsSlice";

const Cart = () => {
  const cartProducts = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch()

  const handleRemoveCartProduct  = (id) => {
    dispatch(removeProductInCart(id))
  }
  if (cartProducts.length === 0)
    return (
      <CartIsEmpty/>
    );
   
  return (
    <div className="pt-20 w-6/12 md:w-8/12 mx-auto">
      <div>
        <h1 className="text-center font-bold text-4xl py-8 border-b-2">
          Shopping Cart
        </h1>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map(
            (
              { id, title, description, price, image, rating, category },
              index
            ) => (
              <CartProductsCard
                key={id}
                data={{
                  id,
                  title,
                  description,
                  price,
                  image,
                  rating,
                  category,
                  index,
                }}
                handleRemoveCartProduct={() => handleRemoveCartProduct(id)}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Cart;
