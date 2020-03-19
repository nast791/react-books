import React from 'react';
import cls from './Catalog.scss';
import {data} from "../../data";
import Card from "../Card/Card";

const Catalog = () => {
  const renderCards = () => {
    return Object.keys(data).map((it) => {
      return data[it].map((item, index) => {
        return (
          <Card title={item.title} image={item.poster} author={item.author} key={index}/>
        );
      });
    });
  };

  return (
    <div className={cls.catalog}>
      { renderCards() }
    </div>
  );
};

export default Catalog;