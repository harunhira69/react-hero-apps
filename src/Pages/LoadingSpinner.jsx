import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
    </div>
    );
};

export default LoadingSpinner;