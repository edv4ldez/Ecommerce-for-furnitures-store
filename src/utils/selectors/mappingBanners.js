export const mappingBanners = (banners) => {
  return banners.map((banner) => {
    return {
      id: banner.id,
      text: banner.data.description[0].text,
      width: banner.data.main_image.dimensions.width,
      height: banner.data.main_image.dimensions.height,
      url: banner.data.main_image.url,
      alt: banner.data.main_image.alt,
      title: banner.data.title,
    };
  });
};
