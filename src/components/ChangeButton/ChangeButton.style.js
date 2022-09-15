import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ChangeButtonContainer = styled(Form)`
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
`;

export const NumberProducts = styled(Field)`
  border-radius: 8px;
  border-color: rgb(209, 209, 209);
  border-style: solid;
  margin-right: 16px;
  width: 80px;
  height: 32px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 24px;
`;

export const Change = styled.button`
  background-color: #ff385c;
  color: white;
  align-self: center;
  cursor: pointer;
  padding-left: 8px;
  border-radius: 8px;
  border-width: 0.8px;
  height: 32px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: bolder;
`;
