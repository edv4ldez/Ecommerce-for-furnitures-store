import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BannerImage = styled.img`
  border-radius: 8px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 336px;
    height: 264px;
  }

  @media (max-width: 425px) {
    width: 288px;
    height: 200px;
  }
`;

export const Information = styled.div`
  background-color: white;
  text-align: center;
`;

export const Title = styled.div`
  background-color: #ff385c;
  color: white;
  padding: 8px;
  border-radius: 8px;
`;

export const Description = styled.div`
  background-color: white;
  text-align: justify;
  padding: 8px;
`;
