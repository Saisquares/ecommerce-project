import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productsSlice";

const Home = () => {
  const dispatch = useDispatch()
  const store = useSelector((store) => store.products);
  console.log(store);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(addProducts(response.data))
        // console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-20 flex flex-wrap w-9/12 mx-auto">
      {store &&
        store.map(({ id, title, description, price, image, rating }) => (
          <div key={id} className="">
            <div className="w-80 h-80 object-contain  border m-6 text-center  cursor-pointer">
              <img className="h-52 p-5 mx-auto" src={image} alt={title} />
              <h1 className="font-bold text-lg px-2  ">{title}</h1>
              <p>{price}</p>
              <p>{rating.rate}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
