import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-md w-96 relative">
        {/* Close button in the top right corner */}
        <button 
          onClick={onClose} 
          className="absolute text-2xl font-semibold top-2 right-2 text-red-600 hover:text-gray-700 focus:outline-none focus:ring-2 "
          aria-label="Close"
        >
          &times; {/* Close button icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
