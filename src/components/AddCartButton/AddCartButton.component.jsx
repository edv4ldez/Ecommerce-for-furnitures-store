import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  calculateNumberOfProducts,
  calculateTotalCart,
} from '../../features/cart/cartSlice';
import {
  AddButton,
  AddCartContainer,
  NumberProducts,
} from './AddCartButton.style';
const AddCartButton = () => {
  const dispatch = useDispatch();

  const {
    product: { stock },
  } = useSelector((state) => state.cart);
  return (
    <>
      <Formik
        initialValues={{
          numberOfProducts: 0,
        }}
        onSubmit={({ numberOfProducts }) => {
          if (numberOfProducts <= 0 || numberOfProducts > stock) {
            alert('Please, select another number of products');
          }
          if (numberOfProducts > 0 && numberOfProducts <= stock) {
            dispatch(addToCart(numberOfProducts));
            dispatch(calculateNumberOfProducts());
            dispatch(calculateTotalCart());
          }
        }}
      >
        <AddCartContainer>
          <NumberProducts type="number" name="numberOfProducts" />
          <AddButton type="submit">Add to cart</AddButton>
        </AddCartContainer>
      </Formik>
    </>
  );
};

export default AddCartButton;
