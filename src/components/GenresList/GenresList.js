import React, {useEffect} from 'react';
import cls from './GenresList.scss';
import Container from "../_ui/Container/Container";
import {connect} from "react-redux";
import {getGenres} from "../../store/actions/genresList";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {Link, useLocation} from "react-router-dom";

const GenresList = props => {
  useEffect(() => {
    props.getGenres(props.url2);
  }, [props.url2]);

  const location = useLocation();

  const renderList = () => {
    const data = props.genres || {};
    return Object.keys(data).map((it, index) => {
      const item = data[it];
      return <Link to={`${location.pathname}/${item.tag}`} key={index}>{item.title}</Link>
    });
  };

  const genresBlock = <div>{renderList()}</div>;

  return (
    <section className={cls.genresList}>
      <Container>
        { props.loading ? <Spinner/> :
          !!props.error ? <Error error={props.error}/> : genresBlock }
      </Container>
    </section>
  );
};

function mapStateToProps(state) {
  const { genres, loading, error, url, url2 } = state.genresList;
  return { genres, loading, error, url, url2 };
}

function mapDispatchToProps(dispatch) {
  return { getGenres: (url) => dispatch(getGenres(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);