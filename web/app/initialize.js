import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers/index';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
  ),
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store{store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , document.querySelector('#app'));
});
