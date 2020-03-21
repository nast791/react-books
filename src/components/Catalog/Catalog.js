import React from 'react';
import cls from './Catalog.scss';
import {data} from "../../data";
import Card from "../Card/Card";
import Container from "../_ui/Container/Container";

const Catalog = () => {

  const countLength = () => {
    let length = 0;
    Object.keys(data).map((it) => {
      length += data[it].length;
    });
    return length;
  };

  const renderCards = () => {
    return [...Object.keys(data)].reverse().map((it) => {
      return [...data[it]].reverse().map((item) => {
        const rate = item.voted ? (item.voted.reduce((acc, next) => acc + next) / item.voted.length).toFixed(1) : (0).toFixed(1);
        return (
          <Card title={item.title} image={item.poster} author={item.author} rate={rate} id={item.id} key={item.id}/>
        );
      });
    });
  };
  const cards = renderCards();

  return (
    <section className={cls.catalog}>
      <Container>
        <div className={cls.catalogList}>
          { cards }
        </div>
      </Container>
    </section>
  );
};

export default Catalog;