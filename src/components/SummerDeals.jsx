import React from "react";
import SummerCard from "./SummerCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
// Import the Rating component

const summerDeals = [
  {
    title: "Indian Shawl",
    price: 2300,
    imageUrl: "/frok.png",
    rating: 4,
    reviews: 25,
    discount: "15% Off",
  },
  {
    title: "Half Sleeve Shirt",
    price: 2300,
    imageUrl: "/halfshirt.png",
    rating: 3,
    reviews: 18,
    discount: "15% Off",
  },
  {
    title: "Women wearing set",
    price: 2300,
    imageUrl: "/Sharee2.png",
    rating: 5,
    reviews: 32,
    discount: "15% Off",
  },
  {
    title: "Checkered shirt",
    price: 2300,
    imageUrl: "/chekshirt.png",
    rating: 4,
    reviews: 22,
    discount: "15% Off",
  },
  {
    title: "Indian Shawl",
    price: 2300,
    imageUrl: "/frok.png",
    rating: 4,
    reviews: 25,
    discount: "15% Off",
  },
  {
    title: "Half Sleeve Shirt",
    price: 2300,
    imageUrl: "/halfshirt.png",
    rating: 3,
    reviews: 18,
    discount: "15% Off",
  },
  {
    title: "Women wearing set",
    price: 2300,
    imageUrl: "/Sharee2.png",
    rating: 5,
    reviews: 32,
    discount: "15% Off",
  },
  {
    title: "Checkered shirt",
    price: 2300,
    imageUrl: "/chekshirt.png",
    rating: 4,
    reviews: 22,
    discount: "15% Off",
  },
];

function SummerDeals() {
  return (
    <section className="container px-4 py-12">
      <h2 className="text-xl text-[#7E53D4] font-light">FEATURED PRODUCT</h2>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Big Deal</h2>
        <button className="flex items-center gap-2 ">
          <CircleArrowLeft className=" text-[#7E53D4] w-10 h-10" />
          <CircleArrowRight className=" text-[#7E53D4] w-10 h-10" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {summerDeals.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <SummerCard {...product} />
           
          </div>
        ))}
      </div>
      <div className="flex pt-6 justify-center items-center">
        <button className="bg-[#7E53D4]  text-white font-bold py-3 px-6  rounded-xl">
          Shop More
        </button>
        </div>
    </section>
  );
}

export default SummerDeals;
