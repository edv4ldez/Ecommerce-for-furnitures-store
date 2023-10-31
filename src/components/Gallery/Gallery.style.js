import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const GalleryImage = styled.div`
  display: flex;
`;

export const GalleryArrows = styled.div`
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
