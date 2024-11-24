import Image from "next/image";
import React from "react";

function MensCollection() {
  return (
    <div className="container px-4 py-12">
      <div className="relative rounded-lg overflow-hidden bg-[#EEECFB] flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex flex-row mx-10 items-center gap-2">
            <p className="text-5xl font-bold text-black whitespace-nowrap">
              MEN COLLECTION
            </p>
          </div>

          <div className="flex flex-row items-center justify-start mx-10 gap-1">
            <button className="bg-[#8F71E1]  text-white font-bold py-3 px-6 rounded-3xl">
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
        <div className="hidden md:block relative">
          <Image
            src="/mens collection.png"
            alt="Promotional Image"
            width={550}
            height={695}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MensCollection;
