import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Cart from "../components/Cart";
import About from "../components/About";
import Wishlist from "../components/Wishlist";
import ErrorPage from "../components/ErrorPage";
import Body from "../components/Body";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Body />,
      children: [
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
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ],
  {
    basename: "/ecommerce-project",
  }
);

export default appRouter;
