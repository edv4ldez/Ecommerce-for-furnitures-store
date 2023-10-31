import styled from 'styled-components';

export const Categories = styled.div`
  font-weight: bolder;
  margin-left: 16px;
  text-align: center;
  margin-top: 32px;
`;

export const CategoryActive = styled.div`
  background-color: #ff385c;
  font-weight: lighter;
  padding: 0 32px 0 32px;
  text-align: start;
  font-size: 20px;
  cursor: pointer;
  border-radius: 16px;
  color: white;
`;

export const CategoryNotActive = styled.div`
  font-weight: lighter;
  padding: 0 32px 0 32px;
  text-align: start;
  font-size: 20px;
  cursor: pointer;
  border-radius: 16px;
`;

export const Filter = styled.div`
  background-color: #ff385c;
  margin-top: 8px;
  cursor: pointer;
  color: white;
  border-radius: 16px;
  font-size: 20px;
`;
