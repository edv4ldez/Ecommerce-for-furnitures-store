export const mappingCategories = (results) => {
  return results.map((category) => {
    return {
      id: category.id,
      name: category.data.name,
      type: category.type,
      imageHeight: category.data.main_image.dimensions.height,
      imageWidth: category.data.main_image.dimensions.width,
      imageUrl: category.data.main_image.url,
      imageAlt: category.data.main_image.alt,
      isActive: false,
    };
  });
};
