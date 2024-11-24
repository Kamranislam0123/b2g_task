import React from 'react';

function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <a href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">We5ive</span>
                    </a>
                    <nav className="hidden md:flex gap-6">
                        <a href="/" className="text-sm font-medium">Home</a>
                        <a href="/shop" className="text-sm font-medium">Shop</a>
                        <a href="/deals" className="text-sm font-medium">Deals</a>
                        <a href="/whats-new" className="text-sm font-medium">What's New</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <form className="hidden md:flex items-center">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-[200px] lg:w-[300px]"
                        />
                    </form>
                    <button className="p-2">
                        <span className="sr-only">Search</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </button>
                    <button className="p-2">
                        <span className="sr-only">Shopping Cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                    </button>
                    <button className="p-2">
                        <span className="sr-only">User Account</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;

