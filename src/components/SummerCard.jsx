import React from "react";

function SummerCard({ title, price, imageUrl, rating, reviews, discount }) {
  return (
    <div class="relative  rounded-lg overflow-hidden">
      <div class="aspect-square relative bg-[#F6F5FD] m-1 rounded-lg">
        {discount && (
          <div class="absolute top-0 right-2 bg-purple-600 text-white px-1 py-6 rounded-b-3xl text-sm">
            {discount}
          </div>
        )}
        <img src={imageUrl} alt={title} class="object-contain w-full h-full" />
      </div>
      <div class="p-4">
        <div class="flex items-center gap-4 w-full">
          <h3 class="font-medium text-sm">{title}</h3>
          <div class="ml-auto font-bold">BOT {price.toLocaleString()}</div>
        </div>
        {rating && (
          <div class="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "gold" : "none"}
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            {reviews && <span class="text-sm text-gray-500">({reviews})</span>}
          </div>
        )}
        <button className="w-full border border-[#7E53D4] hover:bg-purple-700 text-[#7E53D4] hover:text-white  font-bold py-2 px-4 rounded mt-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SummerCard;
