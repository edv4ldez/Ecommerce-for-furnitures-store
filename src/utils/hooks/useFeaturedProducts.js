import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoadingProducts, startLoadingProducts } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export const useFeaturedProducts = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: [],
    isLoading: true,
  }));
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    dispatch(startLoadingProducts());
    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16
          `,
          {
            signal: controller.signal,
          }
        );
        const { results } = await response.json();
        setFeaturedProducts({ data: results, isLoading: false });
        //dispatch(setFeaturedProducts(data));
        dispatch(finishLoadingProducts());
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredProducts;
};
