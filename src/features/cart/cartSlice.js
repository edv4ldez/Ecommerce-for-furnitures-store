import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  cart: {},
  total: 0,
  numberProducts: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = {
        ...state.cart,
        [state.product.id]: {
          product: state.product,
          quantity: Number(action.payload),
        },
      };
    },
    changeNumberProductsCart: (state, action) => {
      state.cart = {
        ...state.cart,
        [action.payload.id]: {
          ...state.cart[action.payload.id],
          quantity: Number(action.payload.quantity),
        },
      };
    },
    calculateNumberOfProducts: (state) => {
      state.numberProducts = 0;
      Object.values(state.cart).forEach((product) => {
        state.numberProducts += product.quantity;
      });
    },
    calculateTotalCart: (state) => {
      state.total = 0;
      Object.values(state.cart).forEach((product) => {
        state.total += Number(product.product.price * product.quantity);
      });
    },
    deleteProduct: (state, action) => {
      delete state.cart[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProduct,
  addToCart,
  calculateTotalCart,
  calculateNumberOfProducts,
  changeNumberProductsCart,
  deleteProduct,
  createOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
