import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice'; 
import data from '../back-end/data';

const DealOfTheDay = () => {
  const dispatch = useDispatch(); 
  const deal = data.find(product => product.isDealOfDay);
  const bonusDeals = data.filter(product => product.isBonus);

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 })); 
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white h-auto w-full p-4">
      {deal && (
        <div className="p-6 flex flex-col md:flex-row mt-16 items-center mb-6">
          <img
            src={deal.image}
            alt={deal.title}
            className="h-60 w-auto md:w-1/2 mx-auto"
          />
          <div className="ml-6 flex-grow">
            <h1 className="text-2xl font-bold">{deal.title}</h1>
            <p className="text-gray-600">{deal.description}</p>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500">{'★'.repeat(Math.round(deal.rating))}</div>
              <p className="ml-2 text-gray-500">({deal.reviews})</p>
            </div>
            <p className="mt-2 text-green-600">Get it today</p>
            <p className="text-gray-600">Pickup: {deal.pickupAvailability}</p>
            <p className="text-gray-600">Shipping: {deal.shippingAvailability}</p>
            <div className="mt-4">
              <p className="text-3xl font-bold text-red-600">${deal.discountedPrice.toFixed(2)}</p>
              <p className="line-through text-gray-500">Was ${deal.price.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => handleAddToCart(deal)} 
                className="bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-10 mb-4">Bonus Deals of the Day</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bonusDeals.map(bonus => (
          <div 
            key={bonus.id} 
            className="border p-4 rounded-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={bonus.image}
              alt={bonus.title}
              className="h-40 w-auto object-contain mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{bonus.title}</h3>
              <div className="flex items-center mt-2">
                <div className="text-yellow-500">{'★'.repeat(Math.round(bonus.rating))}</div>
                <p className="ml-2 text-gray-500">({bonus.reviews})</p>
              </div>
              <p className="text-green-600 mt-2">Get it today</p>
              <div className="mt-2">
                <p className="text-2xl font-bold text-red-600">${bonus.discountedPrice.toFixed(2)}</p>
                <p className="line-through text-gray-500">Was ${bonus.price.toFixed(2)}</p>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => handleAddToCart(bonus)}
                  className="bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;
