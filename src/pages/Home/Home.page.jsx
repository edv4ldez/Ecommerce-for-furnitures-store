import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Alerts/Loading.component';
import CentralImage from '../../components/CentralImage/CentralImage.component';
import GridCategories from '../../components/GridCategories/GridCategories.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Slider from '../../components/Slider/Slider.component';
import { setCategories } from '../../features/categories/categoriesSlice';
import { setProducts } from '../../features/products/productsSlice';
import { useCategories } from '../../utils/hooks/useCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import { mappingCategories } from '../../utils/selectors/mappingCategories';
import { mappingProducts } from '../../utils/selectors/mappingProducts';
import { HomeContainer, ViewProductsButton } from './Home.style';

const Home = () => {
  const dispatch = useDispatch();

  const {
    data: { results },
    isLoading: isLoadingProducts,
  } = useProducts();
  const { data: featuredCategories, isLoading: isLoadingCategories } =
    useCategories();
  const products = useMemo(() => mappingProducts(results), [results]);

  const categories = useMemo(
    () => mappingCategories(featuredCategories),
    [featuredCategories]
  );

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  return (
    <HomeContainer>
      <CentralImage />
      <Slider />
      {isLoadingCategories && <Loading />}
      <GridCategories />
      {isLoadingProducts && <Loading />}
      <GridProducts />
      <ViewProductsButton to="/products" data-testid="products-button">
        View all products
      </ViewProductsButton>
    </HomeContainer>
  );
};

export default Home;
