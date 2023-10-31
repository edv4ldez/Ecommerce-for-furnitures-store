import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Furnitures from '../../Furnitures';
import ProductDetails from '../../pages/ProductDetails/ProductDetails.page';
import AppRouter from '../../router/AppRouter';
import { store } from '../../store/store';

describe('Testing Product Detail Page', () => {
  beforeEach(() => {
    const productId = 'YWL8XBIAAC0AzuPZ';
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/productDetails/${productId}`]}>
            <Furnitures />
          </MemoryRouter>
        </Provider>
      );
    });
  });

  test('Product Category Sidebar is fetching and rendering data from the API', async () => {
    await screen.debug();
    await waitFor(async () => {
      await screen.debug();
    });
  });
});
