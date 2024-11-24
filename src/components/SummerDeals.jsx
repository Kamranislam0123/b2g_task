import React from 'react'
import ProductCard from './ProductCard';
const summerDeals = [
    {
      title: "Indian Shawl",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 4,
      reviews: 25,
      discount: "15% Off"
    },
    {
      title: "Half Sleeve Shirt",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 3,
      reviews: 18,
      discount: "15% Off"
    },
    {
      title: "Women wearing set",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 5,
      reviews: 32,
      discount: "15% Off"
    },
    {
      title: "Checkered shirt",
      price: 2300,
      imageUrl: "/placeholder.svg",
      rating: 4,
      reviews: 22,
      discount: "15% Off"
    }
  ];
function SummerDeals() {
  return (
    
          <section className="container px-4 py-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Big Deal</h2>
                <button className="text-purple-600">See more</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {summerDeals.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </section>
    
  )
}

export default SummerDeals
