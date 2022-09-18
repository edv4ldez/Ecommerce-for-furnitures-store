import { Field, Form } from 'formik';
import styled from 'styled-components';

export const AddCartContainer = styled(Form)`
  display: flex;
  margin-bottom: 8px;
`;

export const NumberProducts = styled(Field)`
  outline: none;
  border-radius: 8px;
  border-color: rgb(209, 209, 209);
  border-style: solid;
  margin-right: 16px;
  width: 80px;
  height: 32px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 24px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ff385c;
  justify-content: center;
  align-self: center;
  padding: 16px;
  height: 32px;
  border-radius: 8px;
  border-width: 0.16px;
  font-size: 16px;
  color: white;
  margin-right: 8px;
  cursor: pointer;
`;
