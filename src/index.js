import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import  appRouter  from "./utils/appRouter";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={appStore}>
  <RouterProvider router={appRouter}/>
 </Provider> 
);
