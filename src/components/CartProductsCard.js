import React from 'react'

const CartProductsCard = ({data, handleRemoveCartProduct}) => {
    const { id, title, price, image, rating, category, index } = data;
    

    
  return (
    <div className='grid grid-cols-4 gap-1 py-5 border-b-2 '>
      <div className=' place-self-center'>
      <img className='h-28 object-contain' src={image} alt={title}/>
      </div>
      <div className='col-span-2'>
      <p className='text-xl'>{title}</p>
      <p className='text-gray-500'>{category}</p>
      <p className='mt-6 flex items-center'><span>Quantity</span>
        <select className='ml-2 pl-2 border rounded'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>
      </div>
  
      <div className='grid grid-rows-2 place-items-end justify-stretch items-stretch'>
        
          <p className=''>$ {price}</p>
          <button className=' text-blue-700 font-semibold' onClick={() => handleRemoveCartProduct(id)}>Remove</button>
       
      </div>

    </div>
  )
}

export default CartProductsCard