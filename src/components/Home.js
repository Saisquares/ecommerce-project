import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productsSlice";
import ProductCard from "./ProductCard";
import { MdFilterAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";
import ShimmerProductCard from './ShimmerProductCard'

const Home = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(addProducts(response.data));
        setFilterProducts(response.data);
        setIsLoading(false)
      } catch (error) {
        console.log(error.message);
        setIsLoading(false)
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <div className="w-11/12 md:w-9/12 lg:w-9/12 mx-auto  grid  md:grid-cols-2 lg:grid-cols-2 justify-center place-items-center lg:pb-4 pt-20 md:pt-24 lg:pt-24 gap-2 md:gap-5 lg:gap-5">
        <div className="place-self-end relative w-full">
          <input
            type="text"
            className="w-96 lg:w-full outline-none px-2 h-8 shadow-md bg-blue-700 text-white placeholder-white font-semibold relative"
            placeholder="Search Products"
            name="searchText"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const FilterProducts = products.filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterProducts(FilterProducts);
            }}
            id="searchText"
          />
          <button
            onClick={() => {
              const FilterProducts = products.filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterProducts(FilterProducts);
            }}
            className="absolute right-3 py-2 "
          >
            <FaSearch className="text-white " />
          </button>
        </div>
        <div className=" w-96 md:w-full lg:w-full place-self-start  px-2 pt-1 h-8 bg-blue-700 text-white shadow-md">
          <div className="flex items-center justify-center cursor-pointer">
            <div className="font-semibold flex  items-center">
              <span>
                <MdFilterAlt className="size-5 font-black" />
              </span>
              <span>Filters</span>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      
      <div className=" flex flex-wrap mx-auto justify-center ">
      {isLoading ? (
          <div className="mx-10 font-bold text-xl flex flex-wrap justify-center pt-0">
            <ShimmerProductCard/>
            <ShimmerProductCard/>
            <ShimmerProductCard/>
            <ShimmerProductCard/>
            <ShimmerProductCard/>
            <ShimmerProductCard/>
          </div>
        ) : filterProducts.length === 0 ? (
          <div className="flex flex-col justify-center items-center my-36">
            <TbMoodSad className="text-5xl" />
            <h1 className="font-bold text-xl">Whoops!</h1>
            <p className="text-gray-500">
              Sorry, but nothing matched your search.
            </p>
            <p className="text-gray-500">Please try some different keywords</p>
          </div>
        ) : (
          filterProducts.map(
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
          )
        )}
      </div>
    </div>
  );
};

export default Home;
