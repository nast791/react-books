import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/pages/Home";
import Top from "./components/pages/Top";
import Genres from "./components/pages/Genres";
import Authors from "./components/pages/Authors";

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        {/*<Route path="/catalog/:id" component={}/>*/}
        <Route path="/" exact component={Home}/>
        <Route path="/top" exact component={Top}/>
        <Route path="/genres" exact component={Genres}/>
        <Route path="/authors" exact component={Authors}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;