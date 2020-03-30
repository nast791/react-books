import React, {useEffect, useState, useRef} from 'react';
import cls from './Search.scss';
import ImageSearch from '../../img/search.svg';
import Input from "../_ui/Input/Input";
import {useDebounce, useLocation, useClickAway} from "react-use";
import {connect} from "react-redux";
import {setDebouncedValue} from "../../store/actions/search";
import {Link} from "react-router-dom";
import {resetSearch} from "../../store/actions/fetch";

const Search = props => {
  const location = useLocation();
  const [value, setValue] = useState('');
  const searchRef = useRef();
  useDebounce(() => props.setDebouncedValue(value), 500, [value]);
  useEffect(() => {
    setValue('');
  }, [location]);

  useClickAway(searchRef, () => {
    props.resetSearch();
  });

  const renderSearchLinks = () => {
    const data = props.search;
    if (data && data.length !== 0) {
      return data.map((it, index) => <Link to={`/${it[0]}`} onClick={(event) => {if (location.pathname.split('/').pop() === it[0]) event.preventDefault(); }} key={index}><span><b>{it[1].title}</b> - {it[1].author}</span></Link>);
    } else if (data && data.length === 0) {
      return (
        <p>Совпадений не найдено</p>
      );
    }
  };

  return (
    <div className={cls.search} ref={searchRef}>
      <Input style={{'backgroundImage': `url(${ImageSearch})`}} onChange={(event) => setValue(event.target.value)} placeholder="Введите название произведения" name="search" autocomplete="off" value={value}/>
      {
        props.searchError && props.searchOpen ? <div className={cls.searchResults}><p>{props.searchError}</p></div> :
        props.search && props.searchOpen ? <div className={cls.searchResults}>{renderSearchLinks()}</div> : null
      }
    </div>
  );
};

function mapStateToProps(state) {
  const { search, searchError, searchOpen } = state.catalog;
  return { search, searchError, searchOpen };
}

function mapDispatchToProps(dispatch) {
  return {
    setDebouncedValue: (value) => dispatch(setDebouncedValue(value)),
    resetSearch: () => dispatch(resetSearch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);