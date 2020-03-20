import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const app = (
  <BrowserRouter basename={ location.hostname === 'localhost' ? '/' : '/react-books' }>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();