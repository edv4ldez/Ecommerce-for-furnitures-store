import React from 'react';
import { useDispatch } from 'react-redux';
import { Category, ImageSection, Title } from './CategoryCard.style';
import PropTypes from 'prop-types';
import { activeCategory } from '../../features/categories/categoriesSlice';

const CategoryCard = ({ id, name, url, alt }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(activeCategory());
    setTimeout(() => {
      dispatch(activeCategory(id));
    }, 2000);
  };

  return (
    <Category onClick={handleAdd} to={`/products/${id}`}>
      <ImageSection src={url} width={400} height={200} alt={alt} />
      <Title>{name}</Title>
    </Category>
  );
};

CategoryCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default CategoryCard;
