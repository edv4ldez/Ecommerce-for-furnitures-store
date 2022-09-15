import React from 'react';
import { useSelector } from 'react-redux';
import ChangeButton from '../ChangeButton/ChangeButton.component';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import { CartTableContainer, Head, Image } from './Table.style';

const CartTable = () => {
  const { cart } = useSelector((state) => state.cart);
  const products = Object.values(cart);
  return (
    <CartTableContainer>
      <table id="customers">
        <thead>
          <tr>
            <Head>Image</Head>
            <Head>Name</Head>
            <Head>Price</Head>
            <Head>Quantity</Head>
            <Head>Subtotal</Head>
            <Head>Remove</Head>
          </tr>
        </thead>
        <tbody>
          {products.map(
            ({ product: { id, imageUrl, name, price, stock }, quantity }) => (
              <tr key={id}>
                <td>
                  <Image src={imageUrl} alt="" />
                </td>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                  <ChangeButton id={id} stock={stock} />
                </td>
                <td>${price * Number(quantity)}</td>
                <td>
                  <DeleteProduct id={id} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </CartTableContainer>
  );
};

export default CartTable;
