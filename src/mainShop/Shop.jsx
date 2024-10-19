import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { fetchProducts } from '../features/products/productsSlice'; 

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products); 
  const [priceSort, setPriceSort] = useState('');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  // Filter and sort products based on state
  const filteredProducts = products
    .filter((product) => !inStockOnly || product.inStock)
    .filter((product) => categoryFilter.length === 0 || categoryFilter.includes(product.category))
    .filter((product) => product.price <= priceRange)
    .sort((a, b) => {
      if (priceSort === 'asc') return a.price - b.price;
      if (priceSort === 'desc') return b.price - a.price;
      return 0;
    });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="lg:flex lg:flex-1 p-5 md:p-10">
        {/* Sidebar */}
        <div className="w-full md:w-96  p-4 bg-white mt-20 rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {/* Filter and sorting options */}
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
              setCategoryFilter([]);
              setInStockOnly(false);
              setPriceRange(1000);
            }}
            className="w-full bg-red-600 text-white py-2 rounded-md"
          >
            Clear Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1 grid mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-8">
          {loading ? (
            <div className="col-span-3 text-center py-10">
              <p className="text-lg">Loading products...</p>
            </div>
          ) : error ? (
            <div className="col-span-3 text-center py-10">
              <p className="text-lg text-red-500">Error fetching products: {error}</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-xs h-[330px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="p-4 rounded-t-lg max-h-36 md:h-28 max-w-full object-contain mx-auto"
                    src={product.image}
                    alt={product.title}
                  />
                </a>
                <div className="px-4 py-2">
                  <h5
                    className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    onClick={() => navigate(`/shop/${product.id}`)}
                  >
                    {product.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {product.description}
                  </p>
                  <div className="flex mt-5 items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
