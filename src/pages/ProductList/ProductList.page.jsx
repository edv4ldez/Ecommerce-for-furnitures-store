import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Pagination from '../../components/Pagination/Pagination.component';
import { setCategories } from '../../features/categories/categoriesSlice';
import { setProducts } from '../../features/products/productsSlice';
import { useCategories } from '../../utils/hooks/useCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import { filterCategories } from '../../utils/selectors/filterCategories';
import { filterProducts } from '../../utils/selectors/filterProducts';
import { ProductListContainer } from './ProductList.style';

const ProductList = () => {
  const dispatch = useDispatch();
  const { data } = useProducts();
  const { data: featuredCategories } = useCategories();
  const products = useMemo(() => filterProducts(data), [data]);
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
  //const { page } = useSelector((state) => state.pages);
  //useProducts(page);
  return (
    <>
      <ProductListContainer>
        <CategorySidebar />
        <GridProducts />
      </ProductListContainer>
      <Pagination />
    </>
  );
};

export default ProductList;
