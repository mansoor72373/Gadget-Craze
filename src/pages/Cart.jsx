import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import Payment from '../Payment/Payment'; 
import Modal from '../payment/Modal'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleProceedToBuy = () => {
    setIsModalOpen(true);
  };

  const handlePaymentComplete = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="p-5  flex flex-col items-center">
      <h2 className="text-2xl mt-24 font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white w-[300px] border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src={item.image} 
                alt={item.title}
                className="h-44 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="mb-2">${item.price} x {item.quantity}</p>
              <div className="flex justify-between w-full">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
                <button
                  onClick={handleProceedToBuy} // Show payment modal on click
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Proceed to Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Total: $ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
        </div>
      )}
      
      {/* Modal for Payment - only shown if isModalOpen is true */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Payment 
            totalAmount={cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} 
            onComplete={handlePaymentComplete} 
          />
        </Modal>
      )}
    </div>
  );
};

export default Cart;
