import React from 'react';
import cls from './BookItem.scss';
import Container from "../_ui/Container/Container";

const BookItem = props => {
  return (
    <div className={cls.bookItem}>
      <Container>
        <div className={cls.bookItemWrapper}>
          <img src={props.image} alt=""/>
        </div>
      </Container>
    </div>
  );
};

export default BookItem;