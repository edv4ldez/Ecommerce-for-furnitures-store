import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(
  selectedCategories = [],
  page = 1,
  searchTerm = 'home'
) {
  const { pathname } = useLocation();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState({
    data: [],
    isLoading: true,
  });
  console.log(products);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getproducts() {
      try {
        let response;
        setProducts({ data: [], isLoading: true });
        const commonUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}`;

        if (pathname === '/search') {
          response = await fetch(
            commonUrl +
              `&q=${encodeURIComponent(
                '[[at(document.type, "product")]]'
              )}&q=${encodeURIComponent(
                `[[fulltext(document, ${JSON.stringify(searchTerm)})]]`
              )}&lang=en-us&page=${page}&pageSize=20`,
            {
              signal: controller.signal,
            }
          );
        }
        if (pathname === '/') {
          response = await fetch(
            commonUrl +
              `&q=${encodeURIComponent(
                '[[at(document.type, "product")]]'
              )}&q=${encodeURIComponent(
                '[[any(document.tags, ["Featured"])]]'
              )}&lang=en-us&pageSize=16`,
            {
              signal: controller.signal,
            }
          );
        }

        if ((selectedCategories.length > 0) | (pathname === '/products')) {
          console.log(selectedCategories);
          response = await fetch(
            commonUrl +
              `&q=${encodeURIComponent('[[at(document.type, "product")]]')}
              &q=${encodeURIComponent(
                `[[any(my.product.category, ${JSON.stringify(
                  selectedCategories
                )})]]`
              )}&lang=en-us&page=${page}&pageSize=12`,
            {
              signal: controller.signal,
            }
          );
        }
        const data = await response.json();
        setProducts({ data, isLoading: false });
        console.log(products);
      } catch (err) {
        setProducts({ data: [], isLoading: true });
        console.error(err);
      }
    }

    getproducts();

    return () => {
      controller.abort();
    };
  }, [
    apiRef,
    isApiMetadataLoading,
    page,
    selectedCategories.length,
    searchTerm,
  ]);
  return products;
}
