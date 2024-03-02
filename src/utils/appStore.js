import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import productsReducer from "./productsSlice"
import cartReducer from "./cartProdutsSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        products: productsReducer,
        cart: cartReducer
    }
});

export default appStore;