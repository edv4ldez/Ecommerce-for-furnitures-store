import { createSlice } from '@reduxjs/toolkit';
import { calculateTotal } from '../../utils/selectors/calculateTotalPrice';
import { calculateTotalProducts } from '../../utils/selectors/calculateTotalProducts';

const initialState = {
  product: {},
  productImages: [],
  cart: {},
  total: 0,
  numberProducts: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload);
      state.product = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = {
        ...state.cart,
        [action.payload.id]: {
          product: action.payload.product,
          quantity: action.payload.quantity,
        },
      };
    },
    calculateTotalCart: (state) => {
      state.total = {
        total:
          Object.keys(state.cart).length > 0
            ? calculateTotal(Object.values(state.cart))
            : 0,
      };
    },
    calculateTotalProducts: (state) => {
      state.numberProducts =
        Object.keys(state.cart).length > 0
          ? calculateTotalProducts(Object.values(state.cart))
          : 0;
    },
    changeNumberProductsCart: (state, action) => {
      state.cart = {
        ...state.cart,
        [action.payload.id]: {
          product: state.cart[action.payload.id].product,
          quantity: action.payload.quantity,
        },
      };
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
  changeNumberProductsCart,
  deleteProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
