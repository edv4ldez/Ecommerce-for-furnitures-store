export const mappingImages = (images) => {
  return images.map((image) => {
    return {
      url: image.image.url,
      width: image.image.dimensions.width,
      height: image.image.dimensions.height,
    };
  });
};
