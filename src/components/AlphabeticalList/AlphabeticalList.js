import React, {useEffect} from 'react';
import cls from './AlphabeticalList.scss';
import Container from "../_ui/Container/Container";
import {getList} from "../../store/actions/alphabeticalList";
import {connect} from "react-redux";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {Link, useLocation} from "react-router-dom";

const AlphabeticalList = props => {
  useEffect(() => {
    props.getList(props.url, props.field);
  }, [props.url]);

  const location = useLocation();

  const renderList = () => {
    const data = props.list || {};
    return Object.keys(data).map((it, index) => {
      return(
        <div className={cls.alphabeticalListItem} key={index}>
          <p className={cls.alphabeticalListLetter}>{it}</p>
          <div className={cls.alphabeticalListLinks}>
          { props.list[it].map((item, idx) => <p key={idx}><Link to={`${location.pathname}/${item.split(' ').join('+')}`}>{item}</Link></p>) }
          </div>
        </div>
      );
    });
  };

  return (
    <section className={cls.alphabeticalList}>
      <Container>
        { props.loading ? <Spinner/> :
          !!props.error ? <Error error={props.error}/> : renderList() }
      </Container>
    </section>
  );
};

function mapStateToProps(state) {
  const { list, loading, error, url } = state.alphabeticalList;
  return { list, loading, error, url };
}

function mapDispatchToProps(dispatch) {
  return { getList: (url, field) => dispatch(getList(url, field)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlphabeticalList);