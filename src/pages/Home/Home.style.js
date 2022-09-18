import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewProductsButton = styled(Link)`
  background-color: #ff385c;
  border-width: 0.64px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  height: 32px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 16px;
  align-self: center;
`;
