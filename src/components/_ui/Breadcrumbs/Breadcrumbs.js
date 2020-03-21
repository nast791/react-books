import React from 'react';
import cls from './Breadcrumbs.scss';
import Container from "../Container/Container";
import {NavLink, withRouter} from "react-router-dom";

const Breadcrumbs = props => {
  const routes = [
    { id: 1, label: 'Главная', path: '/', exact: true },
    { id: 2, label: 'Жанры', path: '/genres', exact: true },
    { id: 3, label: 'Авторы', path: '/authors', exact: true },
    { id: 4, label: props.title, path: `${props.match.url}`, exact: true },
  ];

  const renderLinks = () => {
    return props.links.map((it) => {
      return routes.map((item, index) => {
        if (item.id === it) {
          return (
            <li key={index}>
              <NavLink to={item.path} exact={item.exact} activeClassName={cls.breadcrumbsActive}>{item.label}</NavLink>
            </li>
          );
        }
      });
    });
  };

  return(
    <div className={cls.breadcrumbs}>
      <Container>
        <ul>{ renderLinks() }</ul>
      </Container>
    </div>
  );
};

export default withRouter(Breadcrumbs);