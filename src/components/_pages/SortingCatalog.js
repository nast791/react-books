import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {useParams, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {getCatalog} from "../../store/actions/catalog";

const SortingCatalog = props => {
  const params = useParams();
  const location = useLocation();
  const sortField = location.pathname.split('/')[1] === 'authors' ? 'author' : location.pathname.split('/')[1];

  useEffect(() => {
    props.getCatalog(props.url, props.url2);
  }, [props.url, props.url2]);

  const getGenresTitle = () => {
    const data = props.genres || {};
    return Object.keys(data).map(it => data[it]).filter(item => item.tag === params.id).map(i => i.title).join('');
  };

  const getSortValue = () => {
    const data = props.genres || {};
    return Object.keys(data).filter(it => data[it].tag === params.id).join('');
  };


  let id2, title, sortValue;
  switch (sortField) {
    case "author":
      id2 = 3;
      title = [params.id.split('+')[1], params.id.split('+')[0]].join(' ');
      sortValue = title;
      break;
    case "genres":
      id2 = 2;
      title = getGenresTitle();
      sortValue = getSortValue();
      break;
    default:
      id2 = 4;
      title = params.id.split('+').join(' ');
      sortValue = title;
      break;
  }


  return (
    <React.Fragment>
      <Header top />
      <Breadcrumbs links={[1, id2, 5]} title={title}/>
      <Catalog sortField={sortField} sortValue={sortValue} loading={props.loading} error={props.error} catalog={props.catalog}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SortingCatalog);