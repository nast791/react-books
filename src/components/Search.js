import React from 'react';
import styled from 'styled-components';
import ImageSearch from '../img/search.svg';
import Input from "./UI/Input";

const SearchItem = styled.div`
  max-width: 500px;
  width: 100%;
  height: 40px;
  
  input {
    padding-right: 30px;
    background-image:url(${ImageSearch});
    background-repeat: no-repeat;
    background-position: right 5px top 50%;
    background-size: 20px auto;
  }
`;

const Search = () => {
  return (
    <SearchItem>
      <Input onChange={(event) => event.target.value } placeholder="Введите название книги или фамилию автора" name="search" />
    </SearchItem>
  );
};

export default Search;