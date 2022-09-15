import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    activeCategory: (state, action) => {
      state.selectedCategories.push(action.payload);
    },
    deactiveCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (categoryId) => categoryId != action.payload
      );
    },
    clearCategories: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const {
  setCategories,
  activeCategory,
  deactiveCategory,
  clearCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
