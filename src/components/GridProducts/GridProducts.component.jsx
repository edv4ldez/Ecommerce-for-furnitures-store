import React from 'react';
import { ProductsContent } from './GridProducts.style';
import ProductCard from '../ProductCard/ProductCard.component';
import { useSelector } from 'react-redux';

const GridProducts = () => {
  const { featuredProducts, filteredProducts } = useSelector(
    (state) => state.products
  );
  const products =
    Object.values(filteredProducts).flat().length === 0
      ? featuredProducts
      : Object.values(filteredProducts).flat();
  return (
    <ProductsContent>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          categoryId={product.categoryId}
          images={product.images}
          imageHeight={product.imageHeight}
          imageWidth={product.imageWidth}
          imageUrl={product.imageUrl}
          imageAlt={product.imageAlt}
          name={product.name}
          text={product.text}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </ProductsContent>
  );
};

export default GridProducts;
