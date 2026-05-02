import { SET_PRODUCT_LIST, SET_FETCH_STATE } from '../actions/productActions';

const initialState = {
  productList: [],
  total: 0, 
  fetchState: 'NOT_FETCHED' // 'FETCHING', 'FETCHED', 'FAILED' durumlarını yönetmek için
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { 
        ...state, 
        productList: action.payload.products, // API'den gelen ürünler
        total: action.payload.total           // API'den gelen toplam ürün sayısı
      };
    case SET_FETCH_STATE:
      return { 
        ...state, 
        fetchState: action.payload // Örneğin: 'FETCHING', 'FETCHED'
      };
    default:
      return state;
  }
};