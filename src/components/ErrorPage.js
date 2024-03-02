import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const errorMessage = useRouteError()

  return (
    <div>
      <h1>{errorMessage.error.message}</h1>
      <p>status {errorMessage.status} - {errorMessage.statusText}</p>
    </div>
  )
}

export default ErrorPage