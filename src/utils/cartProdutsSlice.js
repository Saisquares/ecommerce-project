import { createSlice } from "@reduxjs/toolkit";

const cartProdutsSlice = createSlice({
    name: 'cart',
    initialState: {cartItems: []},
    reducers: {
        addToCart: (state, action) => {
             state.cartItems.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.cartItems.pop()
        }
    }
});

export  const { addToCart } = cartProdutsSlice.actions;
export default  cartProdutsSlice.reducer;