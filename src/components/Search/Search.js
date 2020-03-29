import React, {useState} from 'react';
import cls from './Search.scss';
import ImageSearch from '../../img/search.svg';
import Input from "../_ui/Input/Input";
import {useDebounce} from "react-use";
import {connect} from "react-redux";
import {setDebouncedValue} from "../../store/actions/search";

const Search = props => {
  const [value, setValue] = useState(null);
  useDebounce(() => props.setDebouncedValue(value), 2000, [value]);

  return (
    <div className={cls.search}>
      <Input style={{'backgroundImage': `url(${ImageSearch})`}} onChange={(event) => setValue(event.target.value)} placeholder="Введите название произведения" name="search" autocomplete="off" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setDebouncedValue: (value) => dispatch(setDebouncedValue(value))
  };
}

export default connect(null, mapDispatchToProps)(Search);