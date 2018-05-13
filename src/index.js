import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { App } from './components/App/App';

import { store } from './store/store';
import { Api } from './api/api';

import './index.css';

export const api = new Api();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);

export default hot(module)(App);
