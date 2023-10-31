import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SliderImage = styled.div`
  display: flex;
`;

export const SliderArrows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Next = styled.p`
  color: #ff385c;
  margin-left: 8px;
  cursor: pointer;
`;

export const Back = styled.p`
  color: #ff385c;
  margin-right: 8px;
  cursor: pointer;
`;
