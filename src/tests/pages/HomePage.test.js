import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home.page';
import { store } from '../../store/store';

describe('Testing Home Page', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/home']}>
            <Home />
          </MemoryRouter>
        </Provider>
      );
    });
  });
  test('Featured Banners is fetching and rendering data from the API', async () => {
    await waitFor(async () => {
      const image = screen.getAllByTestId('banner-image');
      const img = image[0].src;
      expect(img.startsWith('https://images.prismic.io/wizeline')).toBe(true);
    });
  });

  test('Categories Grid is fetching and rendering data from the API', async () => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('category-image');
      expect(categories.length).toBe(5);
    });
  });

  test('Featured Products Grid is fetching and rendering data from the API', async () => {
    await waitFor(async () => {
      const products = screen.getAllByTestId('product-image');
      expect(products.length).toBe(12);
    });
  });
});
