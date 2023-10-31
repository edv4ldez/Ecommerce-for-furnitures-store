import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Category = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  border-radius: 8px;
  margin-right: 8px;
  margin-left: 8px;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.19),
    0 0.8px 0.8px rgba(0, 0, 0, 0.23);
`;

export const ImageSection = styled.img`
  padding: 8px;

  @media (max-width: 425px) {
    width: 288px;
    height: 168px;
  }
`;

export const Title = styled.div`
  background-color: #ff385c;
  text-align: center;
  color: white;
`;
