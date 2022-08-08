import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CentralImage from '../../components/CentralImage/CentralImage.component';
import GridCategories from '../../components/GridCategories/GridCategories.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Slider from '../../components/Slider/Slider.component';
import { setCategories } from '../../features/categories/categoriesSlice';
import { setProducts } from '../../features/products/productsSlice';
import { useCategories } from '../../utils/hooks/useCategories';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { filterCategories } from '../../utils/selectors/filterCategories';
import { filterProducts } from '../../utils/selectors/filterProducts';
import { HomeContainer, ViewProducts } from './Home.style';

const Home = () => {
  const dispatch = useDispatch();

  const { data: featuredBanners } = useFeaturedBanners();
  const { data: featuredProducts } = useFeaturedProducts();
  const { data: featuredCategories } = useCategories();
  console.log(featuredBanners);
  console.log(featuredCategories);
  const products = useMemo(
    () => filterProducts(featuredProducts),
    [featuredProducts]
  );

  const categories = useMemo(
    () => filterCategories(featuredCategories),
    [featuredCategories]
  );

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);
  return (
    <HomeContainer>
      <CentralImage />
      <Slider />
      <GridCategories />
      <GridProducts />
      <Link to="/products">
        <ViewProducts data-testid="products-button">
          View all products
        </ViewProducts>
      </Link>
    </HomeContainer>
  );
};

export default Home;
