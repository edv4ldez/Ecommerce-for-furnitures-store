import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants';
import { filterProduct } from '../selectors/filterProduct';
import { useLatestAPI } from './useLatestAPI';

export function useProduct(productId) {
  //const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productFeatured, setProductFeatured] = useState({
    data: {},
    isLoading: true,
  });
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getProduct() {
      try {
        const filter = `[[at(document.id, "${productId}")]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            filter
          )}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        const product = filterProduct(results[0]);
        setProductFeatured({
          data: product,
          isLoading: false,
        });
      } catch (err) {
        console.error(err);
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);
  return productFeatured;
}
