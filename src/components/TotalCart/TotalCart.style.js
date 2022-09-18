import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TotalCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const TotalPriceTitle = styled.label`
  font-size: 24px;
  margin-right: 8px;
`;

export const Total = TotalPriceTitle;

export const CheckoutButtons = styled.div`
  display: flex;
`;

export const ProceedCheckout = styled(Link)`
  text-decoration: none;
  background-color: #ff385c;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  padding: 0 8px 0 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const GoBack = ProceedCheckout;
export const Buy = styled.button`
  background-color: #ff385c;
  font-family: 'Nunito Sans';
  font-size: 24px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 0 8px 0 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;
