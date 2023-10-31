import styled from 'styled-components';

export const DetailsContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.label`
  background-color: #ff385c;
  color: white;
  align-self: flex-start;
  border-radius: 16px;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 16px;
`;

export const Description = styled.label`
  text-align: justify;
`;

export const Price = styled.label`
  background-color: #ff385c;

  align-self: flex-start;
  color: white;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
