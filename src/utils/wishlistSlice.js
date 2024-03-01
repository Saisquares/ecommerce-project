import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [{
        wishlistProducts: []
    }],
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlistProducts.push(action.payload)
        },
        removeItemFromWishlist: (state, action) => {
            state.wishlistProducts.pop()
        }
    }
});

export  const { addToWishlist } = wishListSlice.actions;
export default  wishListSlice.reducer;