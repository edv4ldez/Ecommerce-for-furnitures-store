import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Home from '../pages/Home/Home.page';
import ProductDetails from '../pages/ProductDetails/ProductDetails.page';
import ProductList from '../pages/ProductList/ProductList.page';
import SearchResults from '../pages/SearchResults/SearchResults.page';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.page';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage.page';
const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/products/:category" element={<SearchResults />} />
        <Route
          path="/search/productDetails/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
