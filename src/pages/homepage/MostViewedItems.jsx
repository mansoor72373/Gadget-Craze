import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mostViewedItems from '../../back-end/data';

const MostViewedItems = () => {
  const [clickedTitle, setClickedTitle] = useState(null); 
  const navigate = useNavigate(); 

  // Filter items based on the isMostViewed key
  const filteredItems = mostViewedItems.filter(item => item.isMostViewed);

  // Handle title click
  const handleTitleClick = (id) => {
    setClickedTitle(id); 
    navigate(`/navpages/LocalShop/${id}`); 
  };

  return (
    <div className="container mt-[-150px]  mx-auto px-4 py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Most Viewed Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-36 sm:h-48 object-cover" />
            <div className="p-4">
              <h3
                className={`text-base sm:text-lg font-semibold cursor-pointer ${
                  clickedTitle === item.id ? 'text-blue-500' : 'text-gray-900'
                }`}
                onClick={() => handleTitleClick(item.id)}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostViewedItems;
