import React from 'react'
import { MdStar } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../utils/cartProdutsSlice'

const SelectedProduct = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const products = useSelector((store) => store?.products)
    const {  title, price, rating, image, quantity, category,description} = products[id];

    const handleAddToCartBtn = () => {
        dispatch(addToCart(products[id]));
      };

  return (
    <div className='pt-16 lg:pt-32 grid grid-col-1 lg:grid-cols-2 w-9/12   mx-auto '>
        <div className='self-start  justify-self-center '>
            <img className='h-80 my-12 ' src={image} alt='title'/>
        </div>
        <div className='self-center  justify-self-center'>
            <div>
                <h1 className='text-xl lg:text-3xl font-bold my-5'>{title}</h1>
                <p className='my-2 text-md'>{description}</p>
                <p className='my-2'>Category - {category}</p>
                <p className="text-lg  flex items-center"><span className='mr-2'>Rating</span>
              <span>
                <MdStar />
              </span>
              {rating?.rate}
            </p>
                <p className='my-3 font-bold text-2xl'>${price}</p>
                <button onClick={handleAddToCartBtn} className='text-center w-full my-4 bg-blue-700 text-white py-2 rounded'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default SelectedProduct