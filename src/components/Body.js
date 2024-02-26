import React from 'react'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <SignIn/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body