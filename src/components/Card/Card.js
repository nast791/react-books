import React, {useState} from 'react';
import cls from './Card.scss';

const Card = (props) => {
  const [state, setState] = useState({mouseOver: false});
  const openMoreInfo = () => setState({mouseOver: true});
  const closeMoreInfo = () => setState({mouseOver: false});
  const classes = [cls.card];
  if (state.mouseOver) {
    classes.push(cls.cardOpen);
  }

  return (
    <a className={classes.join(' ')} onMouseOver={openMoreInfo} onMouseOut={closeMoreInfo}>
      <img src={props.image} alt=""/>
      <div className={cls.cardMore}>
        <p>{props.author}</p>
        <p className={cls.cardTitle}>{props.title}</p>
      </div>
    </a>
  );
};

export default Card;