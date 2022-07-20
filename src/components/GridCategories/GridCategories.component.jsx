import React from 'react';
import { useSelector } from 'react-redux';
import { useCategories } from '../../utils/hooks/useCategories';
import CategoryCard from '../CategoryCard/CategoryCard.component';
import { CategorySection } from './GridCategories.style';

const GridCategories = () => {
  useCategories();
  const { categories } = useSelector((state) => state.categories);
  return (
    <CategorySection>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.name}
          url={category.imageUrl}
          alt={category.imageAlt}
        />
      ))}
    </CategorySection>
  );
};

export default GridCategories;
