const initialState = {
  cart: [], // Yapı: [{ product: {}, count: 1, color: "Blue", size: "M" }]
  totalAmount: 0,
  totalItems: 0
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Ürün zaten aynı özelliklerle (ID + Color + Size) sepette var mı?
      const existingItemIndex = state.cart.findIndex(
        (item) => 
          String(item.product.id) === String(action.payload.product.id) &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      let updatedCart;

      if (existingItemIndex >= 0) {
        // Eğer varsa: Mevcut olanın count değerini artır
        updatedCart = state.cart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, count: item.count + 1 } 
            : item
        );
      } else {
        // Eğer yoksa: Yeni bir obje olarak sepete ekle
        updatedCart = [...state.cart, action.payload];
      }

      return {
        ...state,
        cart: updatedCart
      };
    }

    case 'REMOVE_FROM_CART': {
      // Belirli bir ürünü (veya renk/boyut varyasyonunu) sepetten tamamen siler
      const filteredCart = state.cart.filter(
        (item) => 
          !(String(item.product.id) === String(action.payload.id) && 
            item.color === action.payload.color && 
            item.size === action.payload.size)
      );
      return { ...state, cart: filteredCart };
    }

    case 'UPDATE_COUNT': {
      // Sepet sayfasında adet artırıp azaltmak için
      const updatedCart = state.cart.map((item) => {
        if (
          String(item.product.id) === String(action.payload.id) &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          return { ...item, count: Math.max(1, action.payload.count) };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};