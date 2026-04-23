// Aksiyon Tipleri
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';

// Paylaştığın ürün verileri
const allProducts = [
  { id: 1, title: "Knitwear Sweater", dept: "Semi Casual", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Premium knitwear..." },
  { id: 2, title: "Hooded Sports Wear", dept: "Hoodie Style", img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Athletic comfort..." },
  { id: 3, title: "Classic Leather Jacket", dept: "Casual", img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Iconic leather jacket..." },
  { id: 4, title: "Essential T-Shirt", dept: "Casual", img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Everyday comfort..." },
  { id: 5, title: "Oxford Dress Shirt", dept: "Casual", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Sharp and versatile..." },
  { id: 6, title: "Structured Blazer", dept: "Casual", img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Modern tailored blazer..." },
  { id: 7, title: "Vintage Blazer Jacket", dept: "Semi Formal", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Classic semi formal..." },
  { id: 8, title: "Slim Fit Shirt", dept: "Semi Casual", img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Modern slim fit design..." },
  { id: 9, title: "Graphic T-Shirt", dept: "Casual", img: "https://images.pexels.com/photos/704977/pexels-photo-704977.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$25.00", newPrice: "$18.00", description: "Artistic graphic tee..." },
  { id: 10, title: "Heavyweight Sweater", dept: "Casual", img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$30.48", newPrice: "$22.48", description: "Durable and warm..." },
  { id: 11, title: "Padded Winter Jacket", dept: "Semi Casual", img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$20.00", newPrice: "$15.00", description: "Technical winter jacket..." },
  { id: 12, title: "Denim Trucker Jacket", dept: "Casual", img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$12.48", newPrice: "$9.48", description: "Authentic denim jacket..." }
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: SET_FETCH_STATE, payload: 'FETCHING' });
  
  // API simülasyonu: Veriyi Redux'a aktar ve durumu FETCHED yap
  setTimeout(() => {
    dispatch({ type: SET_PRODUCT_LIST, payload: allProducts });
    dispatch({ type: SET_FETCH_STATE, payload: 'FETCHED' });
  }, 200);
};