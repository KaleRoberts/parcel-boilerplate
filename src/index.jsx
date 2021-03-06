import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Routes } from './containers';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app'));
