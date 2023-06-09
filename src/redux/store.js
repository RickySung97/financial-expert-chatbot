// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
};
