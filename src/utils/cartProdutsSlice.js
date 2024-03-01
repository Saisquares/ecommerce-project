import { createSlice } from "@reduxjs/toolkit";

const cartProdutsSlice = createSlice({
    name: 'cart',
    initialState: {cartItems: []},
    reducers: {
        addToCart: (state, action) => {
             state.cartItems.push(action.payload)
        },
        removeProductInCart: (state, action) => {
            state.cartItems = state.cartItems.filter((product) => product.id !== action.payload)
        }
    }
});

export  const { addToCart,removeProductInCart } = cartProdutsSlice.actions;
export default  cartProdutsSlice.reducer;