import React from 'react'
import { ShoppingBag } from 'lucide-react'

export function ShoppingBagButton({ itemCount = 0 }) {
  return (
    <button 
      class="flex flex-col items-center justify-center bg-[#581FC1] text-white p-4 rounded-s-2xl hover:bg-purple-800 transition-colors"
      aria-label={`Shopping bag with ${itemCount} items`}
    >
      <ShoppingBag class="w-6 h-6 mb-1" />
      <span class="text-sm">Your bag</span>
      <span class="text-sm">{itemCount}</span>
    </button>
  )
}

