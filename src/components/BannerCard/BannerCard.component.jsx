import React from 'react';
import {
  Banner,
  BannerImage,
  Description,
  Information,
  Title,
} from './BannerCard.style';
import PropTypes from 'prop-types';

const BannerCard = ({ text, height, url, alt, title }) => {
  return (
    <Banner>
      <BannerImage
        data-testid="banner-image"
        src={url}
        height={height / 2}
        width={780}
        alt={alt}
      />
      <Information>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Information>
    </Banner>
  );
};

BannerCard.propTypes = {
  text: PropTypes.string,
  height: PropTypes.number,
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default BannerCard;
