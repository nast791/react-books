import React from 'react';
import cls from './index.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/_pages/Home";
import Genres from "./components/_pages/Genres";
import Authors from "./components/_pages/Authors";
import Book from "./components/_pages/Book";

const App = () => {
  return (
    <div className={cls.wrapper}>
      <Switch>
        {/*<Route path="/catalog/:id" component={}/>*/}
        <Route path="/" exact component={Home}/>
        <Route path="/:id" exact component={Book}/>
        <Route path="/genres" exact component={Genres}/>
        <Route path="/authors" exact component={Authors}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;