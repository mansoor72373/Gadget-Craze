import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import data from '../../back-end/data'; 

const Trending = () => {
  const navigate = useNavigate(); 

  const trendingItems = data.filter(item => item.isTrending);

  const handleTitleClick = (id) => {
    navigate(`/navpages/LocalShop/${id}`); 
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"> 
        Trending now ({trendingItems.length} items)
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingItems.map(item => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md p-2 transition-transform transform hover:scale-105 duration-300"
          >
            <img src={item.image} alt={item.title} className="h-40 sm:h-44 md:h-52 lg:h-40 object-cover rounded-md w-full" /> 
            <div className="mt-2">
              <h2
                className="text-xs sm:text-sm md:text-base font-semibold cursor-pointer"
                onClick={() => handleTitleClick(item.id)}
              >
                {item.title}
              </h2>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500">{"★".repeat(Math.round(item.rating))}</span>
                <span className="ml-1 text-gray-600 text-xs">({item.reviews})</span>
              </div>
              <div className="mt-1 text-base sm:text-lg font-bold">${item.discountedPrice.toFixed(2)}</div>
              <div className="text-gray-500 line-through text-xs">${item.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
