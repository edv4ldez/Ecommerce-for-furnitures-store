import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import {
  activeCategory,
  deactiveCategory,
} from '../../features/categories/categoriesSlice';
import { CategoryActive, CategoryNotActive } from './CategorySidebar.style';

const Category = ({ id, category }) => {
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector((state) => state.categories);
  const handleAdd = () => {
    dispatch(activeCategory(id));
  };
  const handleRemove = () => {
    dispatch(deactiveCategory(id));
  };
  return selectedCategories.indexOf(id) > -1 ? (
    <CategoryActive onClick={handleRemove}>{category}</CategoryActive>
  ) : (
    <CategoryNotActive onClick={handleAdd}>{category}</CategoryNotActive>
  );
};

Category.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  alt: PropTypes.string,
};

export default Category;
