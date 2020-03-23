import React from 'react';
import cls from './Breadcrumbs.scss';
import Container from "../Container/Container";
import {NavLink, useLocation} from "react-router-dom";

const Breadcrumbs = props => {
  const location = useLocation();
  const routes = [
    { id: 1, label: 'Главная', path: '/', exact: true },
    { id: 2, label: 'Жанры', path: '/genres', exact: true },
    { id: 3, label: 'Авторы', path: '/authors', exact: true },
    { id: 4, label: 'Серии', path: '/series', exact: true },
    { id: 5, label: props.title, path: location.pathname, exact: true },
  ];

  const cancelActive = (event) => {
    if (event.target.closest(`.${cls.breadcrumbsActive}`)) {
      event.preventDefault();
    }
  };

  const renderLinks = () => {
    return props.links.map((it) => {
      return routes.map((item, index) => {
        if (item.id === it) {
          return (
            <li key={index}>
              <NavLink to={item.path} exact={item.exact} activeClassName={cls.breadcrumbsActive} onClick={cancelActive}>{item.label}</NavLink>
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

export default Breadcrumbs;