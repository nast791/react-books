import React, {useState} from 'react';
import cls from './Card.scss';

const Card = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [loading, setLoading] = useState(true);

  const openMoreInfo = () => setMouseOver(true);
  const closeMoreInfo = () => setMouseOver(false);
  const loadedImage = () => setLoading(false);

  const classes = [cls.card];
  if (mouseOver) {
    classes.push(cls.cardOpen);
  }
  if (!loading) {
    classes.push(cls.cardBorder);
  }

  return (
    <a className={classes.join(' ')} onMouseOver={openMoreInfo} onMouseOut={closeMoreInfo}>
      <img src={props.image} alt="" onLoad={loadedImage}/>
      <div className={cls.cardMore}>
        <p>{props.author}</p>
        <p className={cls.cardTitle}>{props.title}</p>
      </div>
    </a>
  );
};

export default Card;