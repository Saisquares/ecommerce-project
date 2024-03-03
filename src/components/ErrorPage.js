import React from 'react'
import { useRouteError } from 'react-router-dom'
import { TbError404 } from "react-icons/tb";

const ErrorPage = () => {
  const errorMessage = useRouteError()

  return (
    <div className='  sm:8/12 lg:w-6/12 flex flex-col justify-center mx-auto items-center h-screen'>
      <TbError404  className='text-8xl'/>
      <h1 className='font-bold text-lg'>{errorMessage.error.message}</h1>
      <p className='text-gray-600'>status {errorMessage.status} - {errorMessage.statusText}</p>
    </div>
  )
}

export default ErrorPage