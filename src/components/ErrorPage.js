import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const erros = useRouteError()
  console.log(erros)
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage