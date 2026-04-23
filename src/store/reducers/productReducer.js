import { SET_PRODUCT_LIST, SET_FETCH_STATE } from '../actions/productActions';

const initialState = {
  productList: [],
  fetchState: 'NOT_FETCHED' 
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};