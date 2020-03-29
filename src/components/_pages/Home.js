import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import {getCatalog} from "../../store/actions/fetch";
import {connect} from "react-redux";

const Home = props => {
  useEffect(() => {
    props.getCatalog(props.url);
  }, [props.url + 'books.json']);

  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2"/>
      <Catalog loading={props.loading} error={props.error} catalog={props.catalog}/>
      <Footer/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { catalog, loading, error, url, genres } = state.catalog;
  return { catalog, loading, error, url, genres };
}

function mapDispatchToProps(dispatch) {
  return {
    getCatalog: (url) => dispatch(getCatalog(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);