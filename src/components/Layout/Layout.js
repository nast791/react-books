import React, {useEffect} from 'react';
import cls from './Layout.scss';
import {connect} from "react-redux";
import {getSearch} from "../../store/actions/fetch";

const Layout = props => {
  useEffect(() => {
    props.getSearch(props.url, props.debouncedValue);
  }, [props.debouncedValue]);

  return (
    <div className={cls.wrapper}>{props.children}</div>
  );
};

function mapStateToProps(state) {
  const { url, search, searchError, searchOpen } = state.catalog;
  const { debouncedValue } = state.search;
  return { url, search, searchError, searchOpen, debouncedValue };
}

function mapDispatchToProps(dispatch) {
  return {
    getSearch: (url, value) => dispatch(getSearch(url, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
