import React from 'react';
import cls from './Search.scss';
import ImageSearch from '../../img/search.svg';
import Input from "../_ui/Input/Input";

const Search = () => {
  return (
    <div className={cls.search}>
      <Input style={{'backgroundImage': `url(${ImageSearch})`}} onChange={(event) => event.target.value } placeholder="Введите название произведения или автора" name="search" />
    </div>
  );
};

export default Search;