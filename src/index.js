import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { App } from './components/App/App';

render(<App />, document.getElementById('app'));

export default hot(module)(App);
