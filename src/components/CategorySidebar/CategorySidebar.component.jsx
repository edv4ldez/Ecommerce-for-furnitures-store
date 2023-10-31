import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCategories } from '../../features/categories/categoriesSlice';
import Category from './Category.component';
import { Categories, Filter } from './CategorySidebar.style';

const CategorySidebar = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector((state) => state.categories);

  const handleFilter = () => {
    dispatch(clearCategories());
  };
  return (
    <Categories>
      Category
      {categories.map((category) => (
        <Category key={category.id} id={category.id} category={category.name} />
      ))}
      {selectedCategories.length === 0 ? (
        ''
      ) : (
        <Filter onClick={handleFilter}>Clear filter</Filter>
      )}
    </Categories>
  );
};

export default CategorySidebar;
