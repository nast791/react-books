import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import BookItem from "../BookItem/BookItem";
import {connect} from "react-redux";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {useParams} from "react-router-dom";
import {getBook} from "../../store/actions/fetch";
import {useLocation} from "react-use";

const Book = props => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    props.getBook(props.url, params.id);
  }, [props.url + 'books.json', location, props.update]);

  const renderItem = () => {
    if (props.book) {
      const {voted, title, poster, author, series, number, genres, desc, link} = props.book;
      const rate = voted ? (voted.reduce((acc, next) => Number(acc) + Number(next)) / voted.length).toFixed(1) : (0).toFixed(1);
      return (
        <BookItem title={title.trim()} image={poster.trim()} author={author.trim()} rate={rate} votedLength={voted.length || 0} voted={voted} url={props.url} id={params.id} genres={genres} series={series} number={number} desc={desc} link={link.trim()} key={params.id}/>
      );
    }
  };

  return (
    <React.Fragment>
      <Header top />
      { !props.book || props.loading || !!props.error ? null :
        <Breadcrumbs links={[1, 5]} title={props.book.title} /> }
      { props.loading ? <Spinner/> :
        !!props.error ? <Error error={props.error}/> : renderItem() }
      <Footer/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { book, loading, error, url, update } = state.catalog;
  return { book, loading, error, url, update };
}

function mapDispatchToProps(dispatch) {
  return { getBook: (url, id) => dispatch(getBook(url, id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);