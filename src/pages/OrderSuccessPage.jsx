import React from 'react';
import { useHistory } from 'react-router-dom';

const OrderSuccessPage = () => {
  const history = useHistory();
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="container mx-auto py-32 px-4 text-center">
      <div className="mb-8 flex justify-center">
        <div className="bg-green-100 p-6 rounded-full">
          <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-[#252B42] mb-4">Thank you for your order!</h1>
      <p className="text-xl text-gray-500 mb-2">Your order has been placed successfully.</p>
      <p className="text-lg font-mono font-bold text-[#23A6F0] mb-12">Order ID: #{orderNumber}</p>
      
      <button 
        onClick={() => history.push('/')}
        className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold uppercase tracking-widest hover:shadow-xl transition-all"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccessPage; 