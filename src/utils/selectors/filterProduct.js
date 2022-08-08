export const filterProduct = (product = {}) => {
  return {
    id: product.id,
    categoryId: product.data.category.id,
    images: product.data.images.map((image) => {
      return {
        url: image.image.url,
        width: image.image.dimensions.width,
        height: image.image.dimensions.height,
      };
    }),
    imageHeight: product.data.mainimage.dimensions.height,
    imageWidth: product.data.mainimage.dimensions.width,
    imageUrl: product.data.mainimage.url,
    imageAlt: product.data.mainimage.alt,
    name: product.data.name,
    text: product.data.short_description,
    price: product.data.price,
    stock: product.data.stock,
    specs: product.data.specs,
  };
};
