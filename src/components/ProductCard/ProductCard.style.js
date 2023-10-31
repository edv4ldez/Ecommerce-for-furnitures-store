import styled from 'styled-components';

export const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 8px;
  width: 272px;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.19),
    0 0.8px 0.8px rgba(0, 0, 0, 0.23);
`;

export const ProductImage = styled.img`
  border-radius: 16px;
  align-self: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 16px 16px;
`;

export const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ProductText = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  text-align: justify;
`;

export const ProductPrice = styled.div`
  align-self: flex-end;
  color: white;
  font-weight: bolder;
  font-size: 16px;
`;

export const ProductStock = styled.div`
  font-size: 16px;
`;

export const PriceSection = styled.div`
  background-color: #ff385c;
  padding: 8px;
  border-radius: 16px;
  align-self: flex-end;
`;

export const AddToCart = styled.div`
  background-color: #ff385c;
  margin-top: 16px;
  color: white;
  text-align: center;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
`;
