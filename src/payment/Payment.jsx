import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); 
const Payment = ({ totalAmount, onComplete, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const stripe = await stripePromise;

    // Create a payment method
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: {
        number: cardInfo.cardNumber,
        exp_month: cardInfo.cardExpiry.split('/')[0],
        exp_year: cardInfo.cardExpiry.split('/')[1], 
        cvc: cardInfo.cardCvc,
      },
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
    } else {
 
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount * 100, 
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Payment successful:', data);
        onComplete(); 
        onClose();
      } else {
        setError('Payment failed');
      }
      setLoading(false);
    }
  };

  return (
    <div className=" p-5 rounded-md  sm:mt-10 sm:w-[300px] mt-4">
      <h3 className="text-xl font-bold mb-4">Payment</h3>
      <p className="mb-4">Total Amount: ${totalAmount}</p>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block mb-2">Card Number:</label>
          <input 
            type="text" 
            name="cardNumber" 
            className="border rounded p-2 w-full" 
            value={cardInfo.cardNumber} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expiry Date:</label>
          <input 
            type="text" 
            name="cardExpiry" 
            placeholder="MM/YY" 
            className="border rounded p-2 w-full" 
            value={cardInfo.cardExpiry} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CVV:</label>
          <input 
            type="text" 
            name="cardCvc" 
            className="border rounded p-2 w-full" 
            value={cardInfo.cardCvc} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className={`bg-blue-600 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`} 
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
