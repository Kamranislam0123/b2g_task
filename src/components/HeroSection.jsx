import React from 'react';

function HeroSection() {
    return (
        <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Discover the Latest Trends in Sustainable Fashion</h1>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default HeroSection;

