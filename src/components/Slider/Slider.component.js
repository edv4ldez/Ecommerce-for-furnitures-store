import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import { BannerCard } from '../BannerCard/BannerCard.component';
import { StyledSwiper } from './Slider.style';
import { filterBanners } from '../../utils/selectors/filterBanners';
export const Slider = () => {
  const banners = filterBanners();
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <BannerCard
            text={banner.text}
            height={banner.height}
            url={banner.url}
            alt={banner.alt}
            title={banner.title}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
