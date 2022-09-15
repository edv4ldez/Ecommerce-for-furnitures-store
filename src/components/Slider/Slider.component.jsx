import React, { useState } from 'react';
import BannerCard from '../BannerCard/BannerCard.component';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { Back, Next, SliderArrows, SliderContainer } from './Slider.style';
import Loading from '../Alerts/Loading.component';

const Slider = () => {
  const { data: banners } = useFeaturedBanners();
  const [index, setIndex] = useState(0);
  const handleBack = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (index < banners.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  return (
    <SliderContainer>
      <SliderArrows>
        <Back onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"> </i>
          Back
        </Back>
        <Next onClick={handleNext}>
          Next
          <i className="fa-solid fa-arrow-right"> </i>
        </Next>
      </SliderArrows>
      {banners.length === 0 ? (
        <Loading />
      ) : (
        <BannerCard
          text={banners[index].text}
          height={banners[index].height}
          url={banners[index].url}
          alt={banners[index].alt}
          title={banners[index].title}
        />
      )}
    </SliderContainer>
  );
};

export default Slider;
