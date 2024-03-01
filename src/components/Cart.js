import React from "react";
import { useSelector } from "react-redux";
import CartProductsCard from "./CartProductsCard";
import CartIsEmpty from "./CartIsEmpty";

const Cart = () => {
  const cartProducts = useSelector((store) => store.cart.cartItems);

  if (cartProducts.length === 0)
    return (
      <CartIsEmpty/>
    );
   
  return (
    <div className="pt-20 w-6/12 mx-auto">
      <div>
        
        <h1 className="text-center font-bold text-4xl my-6 py-8 border-b-2">
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
              />
            )
          )}
      </div>
    </div>
  );
};

export default Cart;
