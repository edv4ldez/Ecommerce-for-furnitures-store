import React from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContainer, SearchInput, SubmitButton } from './Search.style';
import { setSearchTerm } from '../../features/products/productsSlice';
import { Formik } from 'formik';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { q = '' } = queryString.parse(location.search);

  return (
    <Formik
      initialValues={{
        searchTerm: q,
      }}
      onSubmit={({ searchTerm }) => {
        if (searchTerm.trim().length <= 1) {
          return;
        }
        dispatch(setSearchTerm(searchTerm));
        navigate(`/search?q=${searchTerm}`, { replace: true });
      }}
    >
      <SearchContainer>
        <SearchInput type="text" name="searchTerm" placeholder="Search" />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchContainer>
    </Formik>
  );
};
