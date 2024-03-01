import React from "react";
import { createBrowserRouter } from "react-router-dom"; // Correct imports
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Cart from "../components/Cart";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Body from "../components/Body"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/',
    element: <Body/>,
    children:[
        {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/about",
            element: <About />,
          }
    ]
  }
]);

export default appRouter;
