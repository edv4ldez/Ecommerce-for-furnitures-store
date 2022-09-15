import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featuredProducts: [],
  filteredProducts: {},
  searchTerm: '',
  page: 1,
  totalPages: 1,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.featuredProducts = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    backPage: (state) => {
      state.page -= 1;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setProducts,
  setProductsByCategory,
  removeProductsByCategory,
  nextPage,
  backPage,
  setTotalPages,
  setSearchTerm,
} = productsSlice.actions;

export default productsSlice.reducer;
