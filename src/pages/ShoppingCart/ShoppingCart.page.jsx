import React from 'react';
import CartTable from '../../components/CartTable/CartTable.component';
import TotalCart from '../../components/TotalCart/TotalCart.component';
import { ShoppingCartContainer } from './ShopingCart.style';

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <CartTable />
      <TotalCart />
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
