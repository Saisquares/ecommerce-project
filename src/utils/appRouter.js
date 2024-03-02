import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Cart from "../components/Cart";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Body from "../components/Body";
import SelectedProduct from "../components/SelectedProduct";

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
          path: '/products/:id',
          element: <SelectedProduct/>
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: "/ecommerce-project",
  }
);

export default appRouter;
