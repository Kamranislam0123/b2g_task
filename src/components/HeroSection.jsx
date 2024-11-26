import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative h-[500px] w-full flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/djamytvej/image/upload/v1732591235/Bg_task/hero_dfqwfw.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority={false} // Disable priority to avoid blocking other content
          loading="lazy" // Enable lazy loading
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center space-y-4 text-white">
        <h1 className="text-5xl font-bold">Elevate Your Everyday Style</h1>
        <p className="text-xl font-light">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className="flex flex-row items-center justify-center gap-1">
          <button className="bg-[#8F71E1] text-white font-bold py-3 px-6 rounded-3xl">
            Shop Now
          </button>
          <button className="flex items-center justify-center rounded-full bg-[#8F71E1] w-[48px] h-[48px]">
            <svg
              className="w-6 h-6 ease-linear duration-300 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Optional Overlay (for dimming the background) */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default HeroSection;
