import React from 'react'
import ProductCard from './ProductCard';
const newArrivals = [
    {
      title: "Indian Shawl",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 4,
      reviews: 12
    },
    {
      title: "Hoodie",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 5,
      reviews: 8
    },
    {
      title: "Palazzo",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 4,
      reviews: 15
    },
    {
      title: "Jacket",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 4,
      reviews: 10
    }
  ];

function NewArrivalCard() {
  return (
    <div>
      <section className="container px-4 py-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">New Arrivals</h2>
                <button className="text-purple-600">See more</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newArrivals.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </section>
    </div>
  )
}

export default NewArrivalCard
