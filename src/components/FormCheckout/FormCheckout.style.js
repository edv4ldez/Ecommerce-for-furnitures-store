import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormCheckoutContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: center;
  width: 400px;
  @media (max-width: 1007px) {
    width: 300px;
  }

  @media (max-width: 640px) {
    width: 250px;
  }
`;

export const CustomerName = styled(Field)`
  height: 40px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  outline: none;
  border: solid;
  border-color: gray;
`;

export const CustomerEmail = CustomerName,
  ZipCode = CustomerName,
  Notes = CustomerName;
