import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../features/products/productsSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products); // Include loading and error

  // Form state for new/edited product
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  });

  const [editMode, setEditMode] = useState(false);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateProduct(formData)); // Update the product
    } else {
      dispatch(addProduct({ ...formData, id: products.length + 1 })); // Add a new product
    }
    resetForm();
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      price: '',
      category: '',
      description: '',
      image: '',
    });
    setEditMode(false);
  };

  return (
    <div className="admin-panel p-5">
      <h2 className="text-2xl font-bold mt-24 mb-4 text-center">Admin Panel</h2>
      {loading && <p>Loading products...</p>} 
      {error && <p>Error: {error}</p>} 
      
      {/* Centered Product Form */}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="mb-6 space-y-4 w-[700px]">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          >
            {editMode ? 'Update' : 'Add'} Product
          </button>
        </form>
      </div>

      {/* Display Product List as Cards */}
      <div className="product-list mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4 rounded"
            />
            <h4 className="text-lg font-semibold">{product.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {product.category}
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {product.description}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(product)}
                className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
