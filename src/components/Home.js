import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productsSlice";
import ProductCard from "./ProductCard";
import { MdFilterAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";
import ShimmerProductCard from './ShimmerProductCard'
import { IoClose } from "react-icons/io5";

const Home = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [filterToggleBtn, setFilterToggleBtn] = useState(false)


  const handleFilterToggleBtn = () => {
    setFilterToggleBtn(!filterToggleBtn)
  }

  const handleCategoryFilter = (e) => {
    const selectedIndex = e.target.selectedIndex
    if (selectedIndex === 1){
      const mensClothing = products.filter((product) => (
        product.category === "men's clothing"
      ));
      setFilterProducts(mensClothing);
    }
    else if (selectedIndex === 2){
      const womensClothing = products.filter((product) => (
        product.category === "women's clothing"
      ));
      setFilterProducts(womensClothing);
    }
    else if (selectedIndex === 3){
      const jewelery = products.filter((product) => (
        product.category === "jewelery"
      ));
      setFilterProducts(jewelery);
    }
    else if (selectedIndex === 4){
      const electronics = products.filter((product) => (
        product.category === "electronics"
      ));
      setFilterProducts(electronics);
    }
    else{
      setFilterProducts(products);
    }
  }

  const handlePriceRangeFilter = (e) => {
    const selectedIndex = e.target.selectedIndex
    let priceRangeFilterProducts = [...filterProducts]

    if(selectedIndex === 1){
      priceRangeFilterProducts.sort((a,b) => a.price - b.price)
    }
    else if(selectedIndex === 2){
      priceRangeFilterProducts.sort((a,b) => b.price - a.price)
    }
  
    setFilterProducts(priceRangeFilterProducts);
    
}

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
  }, []);

  return (
    <div>
      <div className="w-10/12 md:w-9/12 lg:w-9/12 mx-auto  grid  md:grid-cols-2 lg:grid-cols-2 justify-center place-items-center lg:pb-4 pt-20 md:pt-24 lg:pt-24 gap-2 md:gap-5 lg:gap-5">
        <div className="place-self-end relative w-full">
          <input
            type="text"
            className="w-96 lg:w-full outline-none px-2 h-8 shadow-md bg-blue-700 text-white placeholder-white font-normal relative"
            placeholder="Search Products"
            name="searchText"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(e.target.value === ""){
                setFilterProducts(products)
              }
              
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
        <div className=" w-96 md:w-full lg:w-full place-self-start  px-2 pt-1 h-8 bg-blue-700 text-white shadow-md relative ">
          <div className=" w-full flex flex-col items-center justify-center ">
            <div className=" w-full justify-center font-semibold flex  items-center cursor-pointer " onClick={handleFilterToggleBtn}>
              <span><MdFilterAlt className="size-5 font-black" /></span>
              <span>Filters</span>
            </div>
           <div  className={`${filterToggleBtn ? "flex" : "hidden"} w-full absolute items-center`}>
           
           <div className=" bg-blue-700 flex w-full justify-center md:justify-around lg:justify-around items-center">

             <div className="flex">
              <button className="-left-4 font-bold shadow-lg" onClick={handleFilterToggleBtn}><IoClose  className="font-bold text-xl"/></button>
             <p className="ml-1 pr-1 md:mx-2 lg:mx-2 text-sm md:text-md lg:text-md font-semibold" >Price Range</p>
              <select onChange={handlePriceRangeFilter} className="bg-transparent border rounded-md outline-none text-[0.75rem] md:text-md lg:text-md">
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md">Default</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md">Low to High</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md">High to Low</option>
              </select>
             </div>
             <div className="flex ">
             <p className="ml-2 pr-1 md:mx-2 lg:mx-2 text-sm md:text-md lg:text-md font-semibold">Category</p>
              <select className="bg-transparent border rounded-md outline-none text-[0.75rem] md:text-md lg:text-md" onChange={handleCategoryFilter}>
              <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md">Default</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md" name="Men's Clothing">Men's Clothing</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md" name="Women's Clothing">Women's Clothing</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md" name="Jewelery">Jewelery</option>
                <option className="bg-blue-700 text-[0.75rem] md:text-md lg:text-md" name="Electronics">Electronics</option>

              </select>
             </div>
            </div>
           </div>
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
            <h1 className="font-bold text-xl">Oops! Apologies</h1>
            <p className="text-gray-500">
            We couldn't find any products
            </p>
            <p className="text-gray-500">Please try again</p>
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
