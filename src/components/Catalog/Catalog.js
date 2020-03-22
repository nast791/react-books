import React, {useEffect} from 'react';
import cls from './Catalog.scss';
import Card from "../Card/Card";
import Container from "../_ui/Container/Container";
import {connect} from "react-redux";
import {getCatalog} from "../../store/actions/catalog";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {useLocation} from "react-router-dom";

const Catalog = props => {
  const location = useLocation();
  useEffect(() => {
    props.getCatalog(props.url);
  }, [props.url, location]);


  const renderItems = () => {
    const data = props.catalog || {};
    return [...Object.keys(data)].reverse().map((it) => {
      const item = data[it];
      const rate = item.voted ? (item.voted.reduce((acc, next) => acc + next) / item.voted.length).toFixed(1) : (0).toFixed(1);
      return (
        <Card title={item.title} image={item.poster} author={item.author} rate={rate} id={it} key={it}/>
      );
    });
  };

  return (
    <section className={cls.catalog}>
      <Container>
        <div className={cls.catalogList}>
          { props.loading ? <Spinner/> :
            !!props.error ? <Error error={props.error}/> : renderItems() }
        </div>
      </Container>
    </section>
  );
};

function mapStateToProps(state) {
  const { catalog, loading, error, url } = state.catalog;
  return { catalog, loading, error, url };
}

function mapDispatchToProps(dispatch) {
  return { getCatalog: (url) => dispatch(getCatalog(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);