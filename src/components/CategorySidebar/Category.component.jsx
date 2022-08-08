import React from 'react';
import { useDispatch } from 'react-redux';
import {
  finishLoadingCategories,
  startLoadingCategories,
} from '../../actions/ui';
import PropTypes from 'prop-types';
import {
  removeProductsByCategory,
  setProductsByCategory,
} from '../../features/products/productsSlice';
import {
  activeCategory,
  deactiveCategory,
} from '../../features/categories/categoriesSlice';
import { CategoryActive, CategoryNotActive } from './CategorySidebar.style';

const Category = ({ id, category, isActive }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(startLoadingCategories());
    setTimeout(() => {
      dispatch(finishLoadingCategories());
      dispatch(setProductsByCategory(id));
      //dispatch(setProductsByCategory(id));
      dispatch(activeCategory(id));
    }, 2000);
  };

  const handleRemove = () => {
    dispatch(deactiveCategory(id));
    dispatch(removeProductsByCategory(id));
  };
  return isActive ? (
    <CategoryActive onClick={handleRemove}>{category}</CategoryActive>
  ) : (
    <CategoryNotActive onClick={handleAdd}>{category}</CategoryNotActive>
  );
};

Category.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  isActive: PropTypes.bool,
  alt: PropTypes.string,
};

export default Category;
