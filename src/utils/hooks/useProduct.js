import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoadingProduct, startLoadingProduct } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterProduct } from '../selectors/filterProduct';
import { useLatestAPI } from './useLatestAPI';

export function useProduct(productId) {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productFeatured, setProductFeatured] = useState({
    data: {},
    isLoading: true,
  });
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    dispatch(startLoadingProduct());
    const controller = new AbortController();
    async function getProduct() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        //const images = filterImages(product.images);
        //product.images = images;
        const product = filterProduct(results[0]);
        dispatch(finishLoadingProduct());
        //dispatch(setImagesProduct(images));
        setProductFeatured({
          data: product,
          isLoading: true,
        });
        //dispatch(setProduct(product));
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);
  return productFeatured;
}
