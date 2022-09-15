import React from 'react';
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable.component.jsx';
import FormCheckout from '../../components/FormCheckout/FormCheckout.jsx';
import { CheckoutPageContainer } from './CheckoutPage.style.js';

function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <CheckoutTable />
      <FormCheckout />
    </CheckoutPageContainer>
  );
}

export default CheckoutPage;
