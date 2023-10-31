import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cat from '../../assets/cat.jpeg';
import './Gallery.style.js';
import {
  Back,
  GalleryArrows,
  GalleryContainer,
  Next,
} from './Gallery.style.js';

const Gallery = () => {
  const { product } = useSelector((state) => state.cart);
  const [index, setIndex] = useState(1);
  const handleBack = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (index < product.images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  return (
    <GalleryContainer>
      {Object.keys(product).length === 0 ? (
        <img src={cat} alt="" />
      ) : (
        <img src={product.images[index].url} height={200} width={200} alt="" />
      )}
      <GalleryArrows>
        <Back onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"> </i>
          Back
        </Back>
        <Next onClick={handleNext}>
          Next
          <i className="fa-solid fa-arrow-right"> </i>
        </Next>
      </GalleryArrows>
    </GalleryContainer>
  );
};

export default Gallery;
