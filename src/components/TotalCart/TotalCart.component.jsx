import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Buy,
  CheckoutButtons,
  GoBack,
  ProceedCheckout,
  Total,
  TotalCartContainer,
  TotalPriceTitle,
} from './TotalCart.style';

const TotalCart = () => {
  const { pathname } = useLocation();

  const { total } = useSelector((state) => state.cart);
  return (
    <TotalCartContainer>
      <TotalPriceTitle>Total:</TotalPriceTitle>
      <Total>${total}</Total>
      {pathname === '/checkout' ? (
        <CheckoutButtons>
          <GoBack to="/cart">Go Back</GoBack>
          <Buy type="submit">Buy</Buy>
        </CheckoutButtons>
      ) : (
        <ProceedCheckout to="/checkout">Checkout</ProceedCheckout>
      )}
    </TotalCartContainer>
  );
};

export default TotalCart;
