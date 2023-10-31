import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components/Header/Header.component';
describe('Testing Navbar', () => {
  test('should show logo', () => {
    render(<Header />);
    const img = screen.getByTestId('logo');
    expect(img).toHaveAttribute('src', 'logo.jpeg');
    expect(img).toHaveAttribute('alt', 'logo');
  });
});
