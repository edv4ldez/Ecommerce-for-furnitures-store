import { Formik } from 'formik';
import React from 'styled-components';
import TotalCart from '../TotalCart/TotalCart.component';
import {
  CustomerEmail,
  CustomerName,
  FormCheckoutContainer,
  Notes,
  ZipCode,
} from './FormCheckout.style';

const FormCheckout = () => {
  return (
    <Formik
      initialValues={{
        nameClient: '',
        emailClient: '',
        zipCode: '',
        notes: '',
      }}
      onSubmit={() => {
        confirm(`Please, Click on confirm to buy`);
      }}
    >
      <FormCheckoutContainer>
        Name
        <CustomerName type="text" name="nameClient" />
        Email
        <CustomerEmail type="email" name="emailClient" />
        Zip code
        <ZipCode type="text" name="zipCode" />
        Comments
        <Notes type="text" name="notes" />
        <TotalCart />
      </FormCheckoutContainer>
    </Formik>
  );
};

export default FormCheckout;
