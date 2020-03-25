import React from 'react';
import cls from './Catalog.scss';
import Card from "../Card/Card";
import Container from "../_ui/Container/Container";
import Spinner from "../_ui/Spinner/Spinner";
import Error from "../_ui/Error/Error";

const Catalog = props => {
  const renderItems = () => {
    const data = props.catalog || {};

    let dataArr;
    if (props.sortField) {
      if (props.sortField === 'genres') {
        dataArr = [...Object.keys(data)].reverse().filter(it => data[it][props.sortField].includes(+props.sortValue));
      } else {
        dataArr = [...Object.keys(data)].reverse().filter(it => data[it][props.sortField] === props.sortValue);
      }
    } else {
      dataArr = [...Object.keys(data)].reverse();
    }

    return dataArr.map((it) => {
      const item = data[it];
      const rate = item.voted ? (item.voted.reduce((acc, next) => acc + next) / item.voted.length).toFixed(1) : (0).toFixed(1);
      return (
        <Card title={item.title.trim()} image={item.poster.trim()} author={item.author.trim()} rate={rate} id={it} key={it}/>
      );
    });
  };

  return (
    <section className={cls.catalog}>
      <Container>
        <div className={cls.catalogList}>
          { props.loading ? <Spinner/> :
            !!props.error ? <Error error={props.error}/> : renderItems() }
        </div>
      </Container>
    </section>
  );
};

export default Catalog;