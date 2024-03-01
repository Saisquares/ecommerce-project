import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import productsReducer from "./productsSlice"
import wishlistReducer from './wishlistSlice'
import cartReducer from "./cartProdutsSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        products: productsReducer,
        wishlist: wishlistReducer,
        cart: cartReducer
    }
});

export default appStore;