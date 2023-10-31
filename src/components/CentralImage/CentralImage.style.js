import styled from 'styled-components';

export const MainImage = styled.img`
  display: flex;
  align-self: center;
  padding: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 32px;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.19),
    0 0.8px 0.8px rgba(0, 0, 0, 0.23);

  @media (max-width: 1007px) {
    width: 640px;
    height: 384px;
  }

  @media (max-width: 640px) {
    width: 304px;
    height: 192px;
  }
`;
