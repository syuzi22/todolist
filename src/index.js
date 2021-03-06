import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import store from './redux/store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

// DEV ONLY!!!
window.store = store;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

