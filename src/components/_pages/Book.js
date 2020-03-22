import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";
import BookItem from "../BookItem/BookItem";
import {connect} from "react-redux";
import {getBook} from "../../store/actions/book";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";
import {useLocation, useParams} from "react-router-dom";

const Book = props => {
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    props.getBook(props.url, params.id);
  }, [props.url, location]);

  const renderItem = () => {
    if (props.book) {
      const rate = props.book.voted ? (props.book.voted.reduce((acc, next) => acc + next) / props.book.voted.length).toFixed(1) : (0).toFixed(1);
      return (
        <BookItem title={props.book.title} image={props.book.poster} author={props.book.author} rate={rate} id={props.match.params.id}  key={props.match.params.id}/>
      );
    }
  };

  return (
    <React.Fragment>
      <Header bottom />
      { !props.book || props.loading || !!props.error ? null :
        <Breadcrumbs links={[1, 4]} title={props.book.title} /> }
      { props.loading ? <Spinner/> :
        !!props.error ? <Error error={props.error}/> : renderItem() }
      <Footer/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { book, loading, error, url } = state.book;
  return { book, loading, error, url };
}

function mapDispatchToProps(dispatch) {
  return { getBook: (url, id) => dispatch(getBook(url, id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);