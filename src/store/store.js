import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger'; // 'logger' yerine 'createLogger' kullan
import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

// createLogger() fonksiyonunu çağırarak middleware oluşturuyoruz
const logger = createLogger(); 

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
);