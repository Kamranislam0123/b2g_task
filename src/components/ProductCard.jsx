import React from "react";

function ProductCard({ title, price, imageUrl }) {
  return (
    <div className="relative  rounded-lg overflow-hidden">
      <div className="aspect-square relative bg-[#F6F5FD] m-1 rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 w-full">
          <h3 className="font-medium text-base">{title}</h3>
          <div className="ml-auto font-bold">BDT {price.toLocaleString()}</div>
        </div>
       
        <button className="w-full border border-[#7E53D4] hover:bg-purple-700 text-[#7E53D4] hover:text-white  font-bold py-2 px-4 rounded mt-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
