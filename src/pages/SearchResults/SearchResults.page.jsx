import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Alerts/Loading.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Pagination from '../../components/Pagination/Pagination.component';
import {
  setProducts,
  setTotalPages,
} from '../../features/products/productsSlice';
import { useProducts } from '../../utils/hooks/useProducts';
import { mappingProducts } from '../../utils/selectors/mappingProducts';
import { Alert, SearchResultsContainer } from './SearchResults.style';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { featuredProducts, searchTerm, page } = useSelector(
    (state) => state.products
  );
  const {
    data: { results, total_pages },
    isLoading,
  } = useProducts([], page, searchTerm);
  const products = useMemo(() => mappingProducts(results), [results, page]);
  useEffect(() => {
    dispatch(setTotalPages(total_pages));
  }, [total_pages]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  return (
    <>
      {isLoading && <Loading />}
      <SearchResultsContainer>
        {featuredProducts.length === 0 ? (
          <Alert>
            Your search - <b>{searchTerm}</b> - did not match any documents.
          </Alert>
        ) : (
          ''
        )}
        <GridProducts />
      </SearchResultsContainer>
      <Pagination />
    </>
  );
};

export default SearchResults;
