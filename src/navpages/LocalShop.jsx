import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"; 
import data from "../back-end/data";

const LocalShop = () => {
  const [priceSort, setPriceSort] = useState(''); 
  const [inStockOnly, setInStockOnly] = useState(false); products
  const [priceRange, setPriceRange] = useState(1000);
  const dispatch = useDispatch(); 

  // Filter and sort products based on state
  const filteredProducts = data
    .filter(product => !inStockOnly || product.inStock)
    .filter(product => product.price <= priceRange)
    .sort((a, b) => {
      if (priceSort === 'asc') return a.price - b.price;
      if (priceSort === 'desc') return b.price - a.price;
      return 0;
    });

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 })); 
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 mt-24 p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Sort by Price */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Sort by Price</h3>
          <div>
            <label className="block">
              <input
                type="radio"
                name="priceSort"
                value="asc"
                checked={priceSort === 'asc'}
                onChange={() => setPriceSort('asc')}
              />
              Low to High
            </label>
            <label className="block">
              <input
                type="radio"
                name="priceSort"
                value="desc"
                checked={priceSort === 'desc'}
                onChange={() => setPriceSort('desc')}
              />
              High to Low
            </label>
          </div>
        </div>

        {/* Sort by Price Range */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Sort by Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full"
          />
          <p>Range: $0 - ${priceRange}</p>
        </div>

        {/* In Stock Only */}
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
            />
            Exclude Out of Stock
          </label>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            setPriceSort('');
            setInStockOnly(false);
            setPriceRange(1000);
          }}
          className="w-full bg-red-600 text-white py-2 rounded-md"
        >
          Clear Filters
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex-1 grid mt-24 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-md h-[370px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-4 rounded-t-lg max-h-36 max-w-full object-contain mx-auto"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="px-4 py-2">
              <a href="#">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {product.description}
              </p>
              <div className="flex items-center mt-2.5 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalShop;
