import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  product: productReducer, // Tekil 'product' olmalı
  shoppingCart: shoppingCartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));