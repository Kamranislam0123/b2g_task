import React from 'react';

function ProductCard({ title, price, imageUrl, rating, reviews, discount }) {
    return (
        <div className="relative border rounded-lg overflow-hidden">
            {discount && (
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-md text-sm">
                    {discount}
                </div>
            )}
            <div className="aspect-square relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <div className="flex items-center gap-4 w-full">
                    <h3 className="font-medium text-sm">{title}</h3>
                    <div className="ml-auto font-bold">BOT {price.toLocaleString()}</div>
                </div>
                {rating && (
                    <div className="flex items-center gap-1 mt-2">
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
                        {reviews && <span className="text-sm text-gray-500">({reviews})</span>}
                    </div>
                )}
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
