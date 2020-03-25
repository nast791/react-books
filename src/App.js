import React from 'react';
import cls from './index.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/_pages/Home";
import Genres from "./components/_pages/Genres";
import Authors from "./components/_pages/Authors";
import Book from "./components/_pages/Book";
import Series from "./components/_pages/Series";
import SortingCatalog from "./components/_pages/SortingCatalog";

const App = () => {
  return (
    <div className={cls.wrapper}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/genres" exact component={Genres}/>
        <Route path="/authors" exact component={Authors}/>
        <Route path="/series" exact component={Series}/>
        <Route path="/genres/:id" exact component={SortingCatalog}/>
        <Route path="/authors/:id" exact component={SortingCatalog}/>
        <Route path="/series/:id" exact component={SortingCatalog}/>
        <Route path="/:id" exact component={Book}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;