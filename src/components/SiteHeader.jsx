import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function SiteHeader() {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-[#F5F3FF]">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={161}
              height={40}
              className="w-[161px] h-[40px] object-contain"
              priority={true}
            />
          </a>
  
          {/* Navigation Section */}
          <nav className="flex gap-6 justify-center items-center">
            <a href="/" className="text-base font-bold text-[#581FC1]">
              Home
            </a>
            <a href="/shop" className="text-base font-bold">
              Shop
            </a>
            <a href="/deals" className="text-base font-bold">
              Deals
            </a>
            <a href="/whats-new" className="text-base font-bold">
              What's New
            </a>
          </nav>
  
          {/* Search and Buttons Section */}
          <div className="flex items-center gap-4">
            <form className="hidden md:flex items-center bg-white border rounded-3xl overflow-hidden">
              <div className="flex items-center px-3">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="search"
                placeholder="Search products..."
                className="px-2 py-2 flex-1 outline-none"
              />
            </form>
            <button className="p-2">
              <span className="sr-only">Shopping Cart</span>
              <ShoppingBag/>
            </button>
            <button className="p-2">
              <span className="sr-only">User Account</span>
              <User />
            </button>
          </div>
        </div>
      </header>
    );
  }
  
  export default SiteHeader;
  