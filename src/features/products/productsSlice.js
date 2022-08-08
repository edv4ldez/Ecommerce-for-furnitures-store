import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featuredProducts: [],
  filteredProducts: {},
  searchTerm: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.featuredProducts = action.payload;
    },
    setProductsByCategory: (state, action) => {
      state.filteredProducts = {
        ...state.filteredProducts,
        [action.payload]: state.featuredProducts.filter(
          (product) => action.payload === product.categoryId
        ),
      };
    },
    removeProductsByCategory: (state, action) => {
      delete state.filteredProducts[action.payload];
    },
  },
});

export const { setProducts, setProductsByCategory, removeProductsByCategory } =
  productsSlice.actions;

export default productsSlice.reducer;
