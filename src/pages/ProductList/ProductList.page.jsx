import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Alerts/Loading.component';
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Pagination from '../../components/Pagination/Pagination.component';
import { setCategories } from '../../features/categories/categoriesSlice';
import {
  setProducts,
  setTotalPages,
} from '../../features/products/productsSlice';
import { useCategories } from '../../utils/hooks/useCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import { mappingCategories } from '../../utils/selectors/mappingCategories';
import { mappingProducts } from '../../utils/selectors/mappingProducts';
import { ProductListContainer } from './ProductList.style';

const ProductList = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.products);
  const { selectedCategories } = useSelector((state) => state.categories);
  const {
    data: { results, total_pages },
    isLoading: isLoadingProducts,
  } = useProducts(selectedCategories, page);
  const { data: featuredCategories, isLoading: isLoadingCategories } =
    useCategories();
  const products = useMemo(() => mappingProducts(results), [results]);
  const categories = useMemo(
    () => mappingCategories(featuredCategories),
    [featuredCategories]
  );

  useEffect(() => {
    dispatch(setTotalPages(total_pages));
  }, [total_pages]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);
  return (
    <>
      {isLoadingCategories && <Loading />}
      {isLoadingProducts && <Loading />}
      <ProductListContainer>
        <CategorySidebar />
        <GridProducts />
      </ProductListContainer>
      <Pagination />
    </>
  );
};

export default ProductList;
