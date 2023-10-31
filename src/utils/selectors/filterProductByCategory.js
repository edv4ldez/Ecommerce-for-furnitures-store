import { mappingProducts } from './mappingProducts';

export const filterProductByCategory = (id) => {
  return mappingProducts().filter((product) => product.categoryId === id);
};
