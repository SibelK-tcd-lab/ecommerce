export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_COUNT = 'UPDATE_CART_ITEM_COUNT';
export const CLEAR_CART = 'CLEAR_CART';

// Aksiyon Yaratıcıları - Payload yapısını bileşenle eşitledik
export const addToCart = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem // { product, count, color, size } yapısında gelecek
});

export const removeFromCart = (productId, color, size) => ({
  type: REMOVE_FROM_CART,
  payload: { productId, color, size }
});

export const updateCartItemCount = (productId, color, size, count) => ({
  type: UPDATE_CART_ITEM_COUNT,
  payload: { productId, color, size, count }
});

export const clearCart = () => ({
  type: CLEAR_CART
});