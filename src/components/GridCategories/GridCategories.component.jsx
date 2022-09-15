import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard/CategoryCard.component';
import { CategorySection } from './GridCategories.style';

const GridCategories = () => {
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
