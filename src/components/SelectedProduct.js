import React, { useState } from 'react'
import { MdStar } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../utils/cartProdutsSlice'
import { toast } from 'react-toastify'

const SelectedProduct = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [addToCartBtn,setAddToCartBtn] = useState(true);
    const navigate = useNavigate()
    const products = useSelector((store) => store.products)
  
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    const { title, price, description, category, image, rating } = selectedProduct;

    const handleAddToCartBtn = () => {
      setAddToCartBtn(!addToCartBtn)
      if(addToCartBtn){
        dispatch(addToCart(selectedProduct));
        toast.success('Product added to cart')
      }
      };

  return (
    <div className='pt-16 md:pt-32 lg:pt-32 grid grid-col-1 lg:grid-cols-2 w-9/12 mx-auto '>
        <div className='self-start  justify-self-center '>
            <img className='h-64 md:h-80 lg:h-80 my-10 md:my-12 lg:my-12' src={image} alt='title'/>
        </div>
        <div className='self-center  justify-self-center'>
            <div>
                <h1 className='text-md md:text-3xl lg:text-3xl font-bold my-3 md:my-5 lg:my-5'>{title}</h1>
                <p className='lg:my-2 text-sm md:text-md lg:text-md'>{description}</p>
                <p className='my-1 md:my-2 lg:my-2 text-sm md:text-lg lg:text-lg font-semibold'>Category - <span className='font-normal'>{category}</span></p>
                <p className="text-sm md:text-lg lg:text-lg  flex items-center"><span className='mr-2 font-semibold'>Rating</span>
              <span>
                <MdStar />
              </span>
              {rating?.rate}
            </p>
                <p className='my-1 md:my-3 lg:my-3 font-bold text-md md:text-2xl lg:text-2xl'>${price}</p>
                {addToCartBtn ? (<button
            className='text-center w-full my-4 bg-blue-700 text-white py-2 rounded'
            onClick={handleAddToCartBtn}
          >
            Add to Cart
          </button>) : (<button
            className='text-center w-full my-4 bg-blue-700 text-white py-2 rounded'
            onClick={() => navigate('/cart')}
          >
            Go to Cart
          </button>)}
            </div>
        </div>
    </div>
  )
}

export default SelectedProduct