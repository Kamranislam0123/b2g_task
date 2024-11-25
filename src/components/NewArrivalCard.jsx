"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Link from "next/link";

export const newArrivals = [
  {
    id: 1,
    title: "Indian Shawl",
    price: 2300,
    imageUrl: "/Sharee.png",
    rating: 4,
    reviews: 12,
  },
  {
    id: 2,
    title: "Hoodie",
    price: 2300,
    imageUrl: "/hoodie.png",
    rating: 5,
    reviews: 8,
  },
  {
    id: 3,
    title: "Palazzo",
    price: 2300,
    imageUrl: "/plazoo.png",
    rating: 4,
    reviews: 15,
  },
  {
    id: 4,
    title: "Jacket",
    price: 2300,
    imageUrl: "/jacket.png",
    rating: 4,
    reviews: 10,
  },
];

function NewArrivalCard() {
  return (
    <div>
      <section className="container px-4 py-12">
        <h2 className="text-xl text-[#7E53D4] font-light">FEATURED PRODUCT</h2>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <button className="flex items-center gap-2 ">
            <CircleArrowLeft className=" text-[#7E53D4] w-10 h-10" />
            <CircleArrowRight className=" text-[#7E53D4] w-10 h-10" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} passHref>
              <div className="bg-white shadow-lg rounded-lg p-4 cursor-pointer">
                <ProductCard {...product} />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex pt-6 justify-center items-center">
          <button className="bg-[#7E53D4] text-white font-bold py-3 px-6 rounded-xl">
            Shop More
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewArrivalCard;
