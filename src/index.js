import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import galleryReducer from './reducers/galleryReducer'
import './index.scss';
import App from './App';

const gallery = createStore(galleryReducer);

ReactDOM.render(
  <Provider store={gallery}>
    <App />
  </Provider>,
  document.getElementById('root')
);