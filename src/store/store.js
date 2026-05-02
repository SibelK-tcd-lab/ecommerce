import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/productReducer'; 
// DİKKAT: Eğer reducer 'export default' ile tanımlandıysa süslü parantezi kaldırın: import productReducer from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer'; 

const rootReducer = combineReducers({
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));