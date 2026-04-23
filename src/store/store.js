// src/store/store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
// DİKKAT: Süslü parantez { } kullanmalısın çünkü reducer 'export const' ile tanımlandı
import { shoppingCartReducer } from './reducers/shoppingCartReducer'; 

const rootReducer = combineReducers({
  product: productReducer,
  shoppingCart: shoppingCartReducer, // Componentlerde state.shoppingCart olarak çağıracaksın
});

export const store = createStore(rootReducer, applyMiddleware(thunk));