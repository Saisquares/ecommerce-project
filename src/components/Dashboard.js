import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProducts } from '../utils/productsSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(addProducts(response.data))
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Dashboard