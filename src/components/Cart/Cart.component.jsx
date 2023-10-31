import React from 'react';
import { useSelector } from 'react-redux';
import { CartSection } from './Cart.style';

const Cart = () => {
  const { numberProducts } = useSelector((state) => state.cart);
  return (
    <CartSection to="/cart">
      <div>{numberProducts}</div>
      <i className="fas fa-shopping-cart"></i>
    </CartSection>
  );
};

export default Cart;
