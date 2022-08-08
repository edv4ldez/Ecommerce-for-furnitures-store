import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(page = 1) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState({
    data: [],
    isLoading: true,
  });
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getproducts() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&page=${page}&pageSize=12`,
          {
            signal: controller.signal,
          }
        );
        const { results } = await response.json();
        //dispatch(setPage(data.page));
        //dispatch(setTotalPages(data.total_pages));
        //dispatch(finishLoadingProducts());
        //dispatch(setFeaturedProducts(products));
        setProducts({ data: results, isLoading: false });
      } catch (err) {
        console.error(err);
      }
    }

    getproducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, page]);
  return products;
}
