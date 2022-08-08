import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    activeCategory: (state, action) => {
      state.categories = [
        ...state.categories.map((category) => {
          if (category.id === action.payload) {
            return {
              ...category,
              isActive: true,
            };
          }
          return category;
        }),
      ];
    },
    deactiveCategory: (state, action) => {
      state.categories = [
        ...state.categories.map((category) => {
          if (category.id === action.payload) {
            return {
              ...category,
              isActive: false,
            };
          }
          return category;
        }),
      ];
    },
  },
});

export const { setCategories, activeCategory, deactiveCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
