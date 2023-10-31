import React from 'react';
import home from '../../assets/home.jpeg';
import { MainImage } from './CentralImage.style';

const CentralImage = () => {
  return <MainImage src={home} height={556} width={1007} alt="home" />;
};

export default CentralImage;
