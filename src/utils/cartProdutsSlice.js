import { createSlice } from "@reduxjs/toolkit";

const cartProdutsSlice = createSlice({
    name: 'cart',
    initialState: {cartItems: []},
    reducers: {
        addToCart: (state, action) => {
            const {id,title,price,image,category} = action.payload
            const existingProduct = state.cartItems.find(item => item.id === id);
            if(existingProduct){
                existingProduct.quantity += 1;
                existingProduct.price = existingProduct.quantity * existingProduct.price;
            }
            else{
                state.cartItems.push({category,id,image,title,price, quantity:1});
        }},
        removeProductInCart: (state, action) => {
            state.cartItems = state.cartItems.filter((product) => product.id !== action.payload)
        },
        quantityIncrease: (state, action) => {
            const  id  = action.payload;
            const existingProductIndex = state.cartItems.findIndex(item => item.id === id);
            
            if (existingProductIndex !== -1) {
              state.cartItems[existingProductIndex].quantity += 1;
              state.cartItems[existingProductIndex].price = state.cartItems[existingProductIndex].quantity * state.cartItems[existingProductIndex].price;
            }
          },
          quantityDecrease: (state, action) => {
            const  id  = action.payload;
            const existingProductIndex = state.cartItems.findIndex(item => item.id === id);
            
            if (existingProductIndex !== -1 && state.cartItems[existingProductIndex].quantity > 1) {
              state.cartItems[existingProductIndex].quantity -= 1;
              state.cartItems[existingProductIndex].price = state.cartItems[existingProductIndex].price / (state.cartItems[existingProductIndex].quantity + 1);
            }
          }
          
    }
});

export  const { addToCart,removeProductInCart,quantityIncrease,quantityDecrease } = cartProdutsSlice.actions;
export default  cartProdutsSlice.reducer;