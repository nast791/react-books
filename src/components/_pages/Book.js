import React, {useState, useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {data} from "../../data";
import Breadcrumbs from "../_ui/Breadcrumbs/Breadcrumbs";
import BookItem from "../BookItem/BookItem";

const Book = props => {
  const [book, setBook] = useState({});

  const getItem = () => {
    let bookItem;
    Object.keys(data).map((it) => {
      data[it].map((item) => {
        if (item.id === +props.match.params.id) {
          bookItem = item;
        }
      });
    });

    return bookItem;
  };

  const item = getItem();

  const renderItem = () => {
    const rate = item.voted ? (item.voted.reduce((acc, next) => acc + next) / item.voted.length).toFixed(1) : (0).toFixed(1);
    return (
      <BookItem title={item.title} image={item.poster} author={item.author} rate={rate} id={item.id}  key={item.id}/>
    );
  };

  useEffect(() => {
    setBook(item);
  }, [getItem()]);

  return (
    <React.Fragment>
      <Header bottom />
      <Breadcrumbs links={[1, 4]} title={book.title} />
      { renderItem() }
      <Footer/>
    </React.Fragment>
  );
};

export default Book;