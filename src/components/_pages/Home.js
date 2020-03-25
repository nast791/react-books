import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import {getCatalog} from "../../store/actions/catalog";
import {connect} from "react-redux";

const Home = props => {
  useEffect(() => {
    props.getCatalog(props.url, props.url2);
  }, [props.url, props.url2]);

  return (
    <React.Fragment>
      <Header title="Каталог книг" subtitle="Скачайте книги бесплатно в формате fb2" />
      <Catalog loading={props.loading} error={props.error} catalog={props.catalog}/>
      <Footer/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { catalog, loading, error, url, url2, genres } = state.catalog;
  return { catalog, loading, error, url, url2, genres };
}

function mapDispatchToProps(dispatch) {
  return { getCatalog: (url, url2) => dispatch(getCatalog(url, url2)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);