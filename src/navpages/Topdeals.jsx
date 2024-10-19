import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice'; 
import data from '../back-end/data'; 

const Topdeals = () => {
  const [activeTab, setActiveTab] = useState('Trending');
  const dispatch = useDispatch();

  const trendingDeals = data.filter(deal => deal.isTrending);
  const superSavingDeals = data.filter(deal => deal.isSuper);

  const handleAddToCart = (deal) => {
   
    dispatch(addToCart({ ...deal, quantity: 1 })); 
  };

  const renderDeals = (dealsArray) => {
    return dealsArray.map((deal) => (
      <div key={deal.id} className="border transition-transform transform hover:scale-105 duration-300 p-4 rounded-lg shadow-lg">
        <div className="text-red-500 font-bold">
          {deal.discountedPrice ? `Save $${(deal.price - deal.discountedPrice).toFixed(2)}` : null}
        </div>
        <img src={deal.image} alt={deal.title} className="h-32 w-32 object-cover mx-auto" />
        <h3 className="mt-2 font-bold">{deal.title}</h3>
        <p className="text-gray-600 line-through">${deal.price}</p>
        <p className="text-lg font-semibold">${deal.discountedPrice || deal.price}</p>
        <button
          onClick={() => handleAddToCart(deal)} // Add to cart functionality
          className="mt-4 bg-blue-800 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    ));
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-24 flex items-center justify-center">
        <button
          onClick={() => setActiveTab('Trending')}
          className={`px-4 py-2 rounded-l-lg ${activeTab === 'Trending' ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
          Trending
        </button>
        <button
          onClick={() => setActiveTab('Super')}
          className={`px-4 py-2 rounded-r-lg ${activeTab === 'Super' ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
          Super-Savings
        </button>
      </div>

      <div className='flex flex-col md:items-start'>
        <div className='mt-32'>
          <h2 className="text-2xl font-bold mb-4">Explore Deals</h2>
          <p>Based on your activity and preferences</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {activeTab === 'Trending' ? renderDeals(trendingDeals) : renderDeals(superSavingDeals)}
        </div>
      </div>
    </div>
  );
};

export default Topdeals;
