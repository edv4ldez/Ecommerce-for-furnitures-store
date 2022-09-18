import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddCartButton from '../../components/AddCartButton/AddCartButton.component';
import Loading from '../../components/Alerts/Loading.component';
import Details from '../../components/Details/Details.component';
import Gallery from '../../components/Gallery/Gallery.component';
import { setProduct } from '../../features/cart/cartSlice';
import { useProduct } from '../../utils/hooks/useProduct';
import { ProductDetailContainer } from './ProductDetails.style';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data: featuredProduct, isLoading } = useProduct(productId);
  useEffect(() => {
    dispatch(setProduct(featuredProduct));
  }, [featuredProduct]);
  return (
    <>
      {isLoading && <Loading />}
      <ProductDetailContainer>
        <Gallery />
        <Details />
        <AddCartButton />
      </ProductDetailContainer>
    </>
  );
};

export default ProductDetails;
