import React from 'react';

const Products = () => {
  document.title = 'Products';

  return (
    <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <h3 className="text-3xl text-gray-800 mb-2">{document.title}</h3>

      <form>
        <div className="mb-6">
          <span className="text-lg">- TR330006100519786457841326</span>
        </div>
        <div className="mb-6">
          <span className="text-lg">- TR330006100519786457841326</span>
        </div>
        <div className="mb-6">
          <span className="text-lg">- TR330006100519786457841326</span>
        </div>

      </form>
    </div>
  );
};

export default Products;
