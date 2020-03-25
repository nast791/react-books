import React, {useState} from 'react';
import cls from './BookItem.scss';
import Container from "../_ui/Container/Container";
import Rating from "../Rating/Rating";
import {Link} from "react-router-dom";

const BookItem = props => {
  const [loadedImage, setLoadedImage] = useState(false);
  const loadImage = () => setLoadedImage(true);
  const classes = [];

  if (loadedImage) {
    classes.push(cls.bookImageBorder);
  }

  const genres = props.genres.map((it, index) => (
    <React.Fragment key={index}>
      <Link to={`genres/${it.tag}`}>{it.title}</Link>
      <span />
    </React.Fragment>
  ));
  const description = props.desc.map((it, index) => <p key={index}>{it.trim()}</p>);

  return (
    <div className={cls.bookItem}>
      <Container>
        <div className={cls.bookItemWrapper}>
          <img src={props.image} alt="" className={classes} onLoad={loadImage}/>
          <div className={cls.bookItemInfo}>
            <p><b>Название:</b> {props.title}</p>
            <p><b>Автор:</b> <Link to={`authors/${[props.author.split(' ')[1], props.author.split(' ')[0]].join('+')}`}>{props.author}</Link></p>
            <p className={cls.bookItemGenre}><b>Жанр:</b> {genres}</p>
            { props.series ?
              <p><b>Серия:</b> <Link to={`series/${props.series.split(' ').join('+')}`}>{props.series.trim()}</Link> <span>#{props.number.trim()}</span></p>
              : null
            }
            <p><b>Рейтинг:</b> {props.rate} (голосов: {props.votedLength})</p>
            <Rating id={props.id}/>
            <a className={cls.bookItemDownload} href={props.link} download><span>Скачать</span></a>
          </div>
        </div>
        <div className={cls.bookItemDesc}>
          <p><b>Краткое описание</b></p>
          {description}
        </div>
      </Container>
    </div>
  );
};

export default BookItem;