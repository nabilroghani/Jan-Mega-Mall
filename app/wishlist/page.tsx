"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto mb-4 border border-gray-200">
          <Heart className="w-8 h-8 stroke-[1.5]" />
        </div>
        <h1 className="font-display font-black text-2xl text-brand-dark mb-2">
          Your Wishlist is Empty
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
          Save your favorite sneakers, athletic runners, and Kaptaan chappals here to buy them anytime.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-dark hover:bg-black text-white font-bold text-sm shadow-md"
        >
          <span>Discover Shoes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-dark">
          My Saved Shoes ({wishlist.length})
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Items in your wishlist can be quickly added to your bag or ordered on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
