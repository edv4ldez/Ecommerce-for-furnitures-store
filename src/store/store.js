import { pagesReducer } from '../reducers/pagesReducer';
import { uiReducer } from '../reducers/uiReducer';
import productsReducer from '../features/products/productsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import cartReducer from '../features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
  categories: categoriesReducer,
  products: productsReducer,
  ui: uiReducer,
  cart: cartReducer,
  pages: pagesReducer,
};

export const store = configureStore({
  reducer: {
    ...reducers,
  },
});
