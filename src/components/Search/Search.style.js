import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SearchContainer = styled(Form)`
  display: flex;
`;

export const SearchInput = styled(Field)`
  outline: none;
  border: solid;
  border-color: gray;
  border-radius: 8px;
  margin-right: 8px;
  width: 256px;
  height: 32px;
  font-size: 16px;
  padding: 0 12px;

  @media (max-width: 1007px) {
    width: 160px;
  }

  @media (max-width: 460px) {
    width: 160px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ff385c;
  justify-content: center;
  padding: 16px;
  height: 8px;
  border-radius: 8px;
  border-width: 0.16px;
  font-size: 16px;
  color: white;
  margin-right: 8px;
  cursor: pointer;
`;
