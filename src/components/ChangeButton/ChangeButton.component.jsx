import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  calculateNumberOfProducts,
  calculateTotalCart,
  changeNumberProductsCart,
} from '../../features/cart/cartSlice';
import {
  Change,
  ChangeButtonContainer,
  NumberProducts,
} from './ChangeButton.style';
const ChangeButton = ({ id, stock }) => {
  const dispatch = useDispatch();
  const { cart: products } = useSelector((state) => state.cart);
  const { quantity } = products[id];

  return (
    <>
      <Formik
        initialValues={{
          numberOfProducts: quantity,
        }}
        onSubmit={({ numberOfProducts }) => {
          if (numberOfProducts <= 0 || numberOfProducts > stock) {
            alert('Please, select another number of products');
          }
          if (numberOfProducts > 0 && numberOfProducts <= stock) {
            dispatch(
              changeNumberProductsCart({ id, quantity: numberOfProducts })
            );
            dispatch(calculateNumberOfProducts());
            dispatch(calculateTotalCart());
          }
        }}
      >
        <ChangeButtonContainer>
          <NumberProducts type="number" name="numberOfProducts" />
          <Change type="submit">Change</Change>
        </ChangeButtonContainer>
      </Formik>
    </>
  );
};

export default ChangeButton;
