import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProducts: (state, action) => {
            return action.payload
        },

    }
})

export const {addProducts} = productsSlice.actions
export default productsSlice.reducer

