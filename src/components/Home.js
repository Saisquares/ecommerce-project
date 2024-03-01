import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productsSlice";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(addProducts(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-20 flex flex-wrap mx-auto justify-center ">
      {products &&
        products.map(
          (
            { id, title, description, price, image, rating, category },
            index
          ) => (
            <ProductCard
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
  );
};

export default Home;
