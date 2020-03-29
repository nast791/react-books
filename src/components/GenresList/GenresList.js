import React, {useEffect} from 'react';
import cls from './GenresList.scss';
import Container from "../_ui/Container/Container";
import {connect} from "react-redux";
import {getGenres} from "../../store/actions/fetch";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {Link, useLocation} from "react-router-dom";

const GenresList = props => {
  useEffect(() => {
    props.getGenres(props.url);
  }, [props.url + 'genres.json']);

  const location = useLocation();

  const renderList = () => {
    const data = props.genres || {};
    return Object.keys(data).map((it, index) => {
      const item = data[it];
      if (!item) return;
      return (
        <div key={index}>
          <Link to={`${location.pathname}/${item.tag}`}><span>{item.title}</span></Link>
          <p>{item.desc}</p>
        </div>
      )
    });
  };

  const genresBlock = <div className={cls.genresListWrapper}>{renderList()}</div>;

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
  const { genres, loading, error, url } = state.catalog;
  return { genres, loading, error, url };
}

function mapDispatchToProps(dispatch) {
  return { getGenres: (url) => dispatch(getGenres(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);