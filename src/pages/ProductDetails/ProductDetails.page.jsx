import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddCartButton from '../../components/AddCartButton/AddCartButton.component';
import Details from '../../components/Details/Details.component';
import Gallery from '../../components/Gallery/Gallery.component';
import { setProduct } from '../../features/cart/cartSlice';
import { Loading } from '../../GlobalStyle.style';
import { useProduct } from '../../utils/hooks/useProduct';
import { ProductDetailContainer } from './ProductDetails.style';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data: featuredProduct } = useProduct(productId);
  const { loadingProduct } = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(setProduct(featuredProduct));
  }, [featuredProduct]);
  return (
    <ProductDetailContainer>
      {loadingProduct && <Loading>Loading</Loading>}
      <Gallery />
      <Details />
      <AddCartButton />
    </ProductDetailContainer>
  );
};

export default ProductDetails;
