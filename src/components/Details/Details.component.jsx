import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../Table/Table.component';
import './Details.styles';
import { DetailsContainer, Titulo, Description, Price } from './Details.styles';
const Details = () => {
  const {
    product: { name, text, price, stock, tags },
  } = useSelector((state) => state.cart);
  return (
    <DetailsContainer>
      <Titulo data-testid="name-product">{name}</Titulo>
      <Description>{text}</Description>
      <Price>${price}</Price>
      {!!tags && tags.map((tag) => <label key={tag}>{tag}</label>)}
      <label>Stock: {stock}</label>
      <Table />
    </DetailsContainer>
  );
};

export default Details;
