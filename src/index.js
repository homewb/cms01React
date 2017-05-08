import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';

/* OR for Material Theme:
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'
*/

import './css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {App} from './components/App';
import configureStore from './store/configureStore';
import { fetchPosts } from './actions/postActions';

const store = configureStore();
store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
