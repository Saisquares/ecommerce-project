import { MdStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartProdutsSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const ProductCard = ({ data }) => {
  const { id, title, price, image, rating, category, index } = data;
  const dispatch = useDispatch();
  const [addToCartBtn,setAddToCartBtn] = useState(true);
  const navigate = useNavigate()

  const products = useSelector((store) => store.products);

  const handleAddToCartBtn = (index) => {
    setAddToCartBtn(!addToCartBtn)
    if(addToCart){
      dispatch(addToCart(products[index]));
      toast.success('Product added to cart')
    }
  };

  return (
    <div
      key={id}
      className="relative m-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <div className="m-6 ">
        <div>
          <Link to={`/products/${index}`}>
          <img  className="h-52 p-5 mx-auto" src={image} alt={title} />
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
          </Link>
          {addToCartBtn ? (<button
            className="bg-blue-700 text-white px-2 py-1 my-2 rounded w-full"
            onClick={() => handleAddToCartBtn(index)}
          >
            Add to Cart
          </button>) : (<button
            className="bg-blue-700 text-white px-2 py-1 my-2 rounded w-full"
            onClick={() => navigate('/cart')}
          >
            Go to Cart
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
