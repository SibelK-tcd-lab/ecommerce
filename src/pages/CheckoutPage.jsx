import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearCart } from '../store/actions/shoppingCartActions';

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.product.newPrice.replace('$', ''));
    return acc + (price * item.count);
  }, 0);

  const handleCompletePurchase = (e) => {
    e.preventDefault();
    // 1. Burada normalde API'ye istek atılır
    // 2. Sepeti temizle
    dispatch(clearCart());
    // 3. Başarı sayfasına yönlendir
    history.push('/order-success');
  };

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <button onClick={() => history.push('/shop')} className="text-[#23A6F0] underline">Go back to shopping</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-[#252B42] mb-8">Checkout</h1>
      <form onSubmit={handleCompletePurchase} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Full Name" className="p-3 border rounded" />
              <input required type="email" placeholder="Email" className="p-3 border rounded" />
              <input required type="text" placeholder="Address" className="p-3 border rounded col-span-2" />
            </div>
          </section>

          <section className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <input required type="text" placeholder="Card Number" className="w-full p-3 border rounded" />
              <div className="grid grid-cols-3 gap-4">
                <input required type="text" placeholder="MM/YY" className="p-3 border rounded" />
                <input required type="text" placeholder="CVC" className="p-3 border rounded" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span>{item.product.title} (x{item.count})</span>
                <span>{item.product.newPrice}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-lg text-[#23856D] border-t pt-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button type="submit" className="w-full mt-8 bg-[#23A6F0] text-white py-4 rounded font-bold uppercase hover:bg-[#1b8ecf] transition-all">
            Complete Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;