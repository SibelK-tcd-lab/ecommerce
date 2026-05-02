// src/store/reducers/clientReducer.js
import { SET_USER, LOGOUT, SET_ROLES } from '../actions/clientActions';
import { SET_CATEGORIES } from '../actions/productActions';

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  categories: [], // T12 ile eklendi
  theme: 'light',
  language: 'en'
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};