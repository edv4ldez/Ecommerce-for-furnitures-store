import productsReducer from '../features/products/productsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import cartReducer from '../features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer: {
    ...reducers,
  },
});
