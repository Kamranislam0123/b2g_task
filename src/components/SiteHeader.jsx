"use client";

import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
            objectFit="contain"
            className="w-[161px] h-[40px]"
            priority={true}
          />
        </a>

        {/* Navigation Section for Desktop */}
        <nav className="hidden md:flex gap-6 justify-center items-center">
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
          <button className="p-2 relative">
            <span className="sr-only">Shopping Cart</span>
            <ShoppingBag />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black rounded-full">
              1
            </span>
          </button>

          <button className="p-2">
            <span className="sr-only">User Account</span>
            <User />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle Mobile Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F3FF] w-full py-4 px-6 space-y-4">
          <nav className="flex flex-col items-center">
            <a href="/" className="text-lg font-bold text-[#581FC1]">
              Home
            </a>
            <a href="/shop" className="text-lg font-bold">
              Shop
            </a>
            <a href="/deals" className="text-lg font-bold">
              Deals
            </a>
            <a href="/whats-new" className="text-lg font-bold">
              What's New
            </a>
          </nav>

          <div className="flex justify-center items-center gap-4 mt-4">
            <form className="flex items-center bg-white border rounded-3xl overflow-hidden w-full">
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
              <ShoppingBag />
            </button>
            <button className="p-2">
              <span className="sr-only">User Account</span>
              <User />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
