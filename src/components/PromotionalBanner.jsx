import React from 'react';

function PromotionalBanner() {
    return (
        <div className="container px-4 py-12">
            <div className="relative rounded-lg overflow-hidden bg-purple-50 p-8 flex items-center justify-between">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Big Deal</h2>
                    <p className="text-4xl font-bold text-purple-600">30% Off for New Customers</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>
                <div className="hidden md:block relative w-[300px] h-[400px]">
                    <img
                        src="/placeholder.svg"
                        alt="Promotional Image"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default PromotionalBanner;

