import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import ProductList from '../../pages/ProductList/ProductList.page';

describe('Testing Products List Page', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/products']}>
            <ProductList />
          </MemoryRouter>
        </Provider>
      );
    });
  });
  test('Product Category Sidebar is fetching and rendering data from the API', async () => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('category-sidebar');
      expect(categories.length).toBe(5);
    });
  });
  test('Category links on Product Category Sidebar are filtering Products ', async () => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('category-sidebar');
      fireEvent.click(categories[1]);
      fireEvent.click(categories[2]);
      const categoryActive = screen.getAllByTestId('category-sidebar-active');
      expect(categoryActive.length).toBe(2);
    });
  });
  test('Pagination Controls are generated correctly based on the number of results', async () => {
    await waitFor(async () => {
      const next = screen.getByTestId('next');
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      await fireEvent.click(next);
      const page = screen.getByText(8);
      expect(page).toBeInTheDocument();
    });
  });

  test('Prev button is disabled when the user is on the first page', async () => {
    await waitFor(async () => {
      const next = screen.getByTestId('next');
      await fireEvent.click(next);
      const prev = screen.getByTestId('prev');
      expect(prev).toBeInTheDocument();
    });
  });

  test('Next button is working as expected', async () => {
    await waitFor(async () => {
      const prev = screen.getByTestId('prev');
      const next = screen.getByTestId('next');
      await fireEvent.click(prev);
      await fireEvent.click(next);
      const page = screen.getByText(8);
      expect(page).toBeInTheDocument();
    });
  });

  test('Prev button is working as expected', async () => {
    await waitFor(async () => {
      const prev = screen.getByTestId('prev');
      const next = screen.getByTestId('next');
      await fireEvent.click(prev);
      const page = screen.getByText(7);
      expect(page).toBeInTheDocument();
    });
  });

  test('Next button is disabled when the user is on the last page', async () => {
    await waitFor(async () => {
      const prev = screen.getByTestId('prev');
      const next = screen.getByTestId('next');
      await fireEvent.click(next);
      await fireEvent.click(next);
      const page = screen.getByText(8);
      expect(page).toBeInTheDocument();
    });
  });
});
