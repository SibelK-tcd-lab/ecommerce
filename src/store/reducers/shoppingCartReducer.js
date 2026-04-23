// src/store/reducers/shoppingCartReducer.js

const initialState = {
  cart: [], 
  totalAmount: 0,
  totalItems: 0
};

const calculateTotals = (cart) => {
  return cart.reduce(
    (acc, item) => {
      const price = parseFloat(item.product.newPrice.replace(/[^0-9.-]+/g, "")) || 0;
      acc.totalItems += item.count;
      acc.totalAmount += price * item.count;
      return acc;
    },
    { totalItems: 0, totalAmount: 0 }
  );
};

// DİKKAT: Burada 'export const' kullanıyoruz (Named Export)
export const shoppingCartReducer = (state = initialState, action) => {
  let updatedCart;

  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        (item) => 
          item.product.id === action.payload.product.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItemIndex >= 0) {
        updatedCart = state.cart.map((item, index) => 
          index === existingItemIndex ? { ...item, count: item.count + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, count: 1 }];
      }
      return { ...state, cart: updatedCart, ...calculateTotals(updatedCart) };

    case 'REMOVE_FROM_CART':
      updatedCart = state.cart.filter(
        (item) => 
          !(item.product.id === action.payload.id && 
            item.color === action.payload.color && 
            item.size === action.payload.size)
      );
      return { ...state, cart: updatedCart, ...calculateTotals(updatedCart) };

    case 'UPDATE_COUNT':
      updatedCart = state.cart.map((item) => {
        if (item.product.id === action.payload.id && 
            item.color === action.payload.color && 
            item.size === action.payload.size) {
          return { ...item, count: Math.max(1, item.count + action.payload.delta) };
        }
        return item;
      });
      return { ...state, cart: updatedCart, ...calculateTotals(updatedCart) };

    default:
      return state;
  }
};