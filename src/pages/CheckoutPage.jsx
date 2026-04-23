import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearCart } from '../store/actions/shoppingCartActions';

const CheckoutPage = () => {
  const { cart, totalAmount } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();

  // Ürünü sepetten tamamen kaldırma
  const handleRemoveItem = (productId, color, size) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: productId, color, size }
    });
  };

  const handleCompletePurchase = (e) => {
    e.preventDefault();
    // 1. Logic for API call would go here
    // 2. Clear the cart
    dispatch(clearCart());
    // 3. Redirect to success page
    history.push('/order-success');
  };

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#252B42]">Your cart is empty!</h2>
        <button 
          onClick={() => history.push('/shop')} 
          className="text-[#23A6F0] font-bold hover:underline"
        >
          Go back to shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-[#252B42] mb-8">Checkout</h1>
      
      <form onSubmit={handleCompletePurchase} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: User Information */}
        <div className="lg:col-span-2 space-y-8">
          <section className="p-8 bg-[#f9f9f9] rounded-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-[#252B42]">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Full Name" className="p-3 border rounded bg-white" />
              <input required type="email" placeholder="Email Address" className="p-3 border rounded bg-white" />
              <input required type="text" placeholder="Street Address" className="p-3 border rounded bg-white md:col-span-2" />
              <input required type="text" placeholder="City" className="p-3 border rounded bg-white" />
              <input required type="text" placeholder="Postal Code" className="p-3 border rounded bg-white" />
            </div>
          </section>

          <section className="p-8 bg-[#f9f9f9] rounded-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-[#252B42]">Payment Method</h2>
            <div className="space-y-4">
              <input required type="text" placeholder="Card Number" className="w-full p-3 border rounded bg-white" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input required type="text" placeholder="MM/YY" className="p-3 border rounded bg-white" />
                <input required type="text" placeholder="CVC" className="p-3 border rounded bg-white" />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Order Summary with Remove (X) Button */}
        <div className="bg-white p-6 border rounded-lg shadow-lg h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-6 text-[#252B42]">Order Summary</h2>
          
          <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
            {cart.map((item, index) => {
              const unitPrice = parseFloat(item.product.newPrice.replace(/[^0-9.-]+/g, "")) || 0;
              const lineTotal = (unitPrice * item.count).toFixed(2);

              return (
                <div key={`${item.product.id}-${index}`} className="flex justify-between items-start pb-4 border-b border-gray-50 relative group">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#252B42] pr-6">
                      {item.product.title} <span className="text-gray-400 font-normal ml-1">x{item.count}</span>
                    </p>
                    <p className="text-[10px] text-[#737373] uppercase font-bold mt-1">
                      {item.color} / {item.size}
                    </p>
                    <p className="text-sm font-bold text-[#23A6F0] mt-1">${lineTotal}</p>
                  </div>

                  {/* REMOVE BUTTON (X) */}
                  <button 
                    type="button" // Formu submit etmemesi için type="button" önemli
                    onClick={() => handleRemoveItem(item.product.id, item.color, item.size)}
                    className="text-gray-300 hover:text-red-500 transition-colors text-xl leading-none p-1"
                    title="Remove from cart"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>

          {/* TOTALS SECTION */}
          <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm text-[#737373]">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#737373]">
              <span>Shipping</span>
              <span className="text-[#23A6F0] font-bold">Free</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-[#252B42] pt-4">
              <span>Total</span>
              <span className="text-[#23A6F0]">${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full mt-8 bg-[#23A6F0] text-white py-4 rounded font-bold uppercase hover:bg-[#1b8ecf] transition-all shadow-md active:scale-[0.98]"
          >
            Complete Purchase
          </button>
        </div>

      </form>
    </div>
  );
};

export default CheckoutPage;