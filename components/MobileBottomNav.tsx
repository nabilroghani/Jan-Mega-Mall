"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Heart, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { siteConfig } from "@/lib/siteConfig";

export const MobileBottomNav = () => {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  // Don't show inside checkout or product page to keep screen clean and focused
  if (pathname === "/checkout" || pathname.startsWith("/product/")) return null;

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop");
  const isWishlist = pathname === "/wishlist";

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-500/20 py-1.5 px-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isHome ? "text-amber-700 font-black" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <Home className={`w-5 h-5 ${isHome ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </Link>

        {/* Shop */}
        <Link
          href="/shop"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isShop ? "text-amber-700 font-black" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <Grid className={`w-5 h-5 ${isShop ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
          <span className="text-[10px] mt-0.5 font-medium">Catalog</span>
        </Link>

        {/* WhatsApp Direct */}
        <a
          href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I want to inquire about shoes at ${siteConfig.name} Timergara.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-emerald-600 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 -mt-3 ring-4 ring-white">
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold text-emerald-700">WhatsApp</span>
        </a>

        {/* Wishlist */}
        <Link
          href="/wishlist"
          className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isWishlist ? "text-amber-700 font-black" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlist ? "stroke-[2.5] fill-amber-500 text-amber-500" : "stroke-[1.75]"}`} />
          {wishlistCount > 0 && (
            <span className="absolute top-0.5 right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[9px] font-black rounded-full flex items-center justify-center ring-1 ring-white">
              {wishlistCount}
            </span>
          )}
          <span className="text-[10px] mt-0.5 font-medium">Saved</span>
        </Link>

        {/* Cart Bag */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl text-gray-500 hover:text-gray-900 transition-all"
        >
          <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
          {itemCount > 0 && (
            <span className="absolute top-0.5 right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[9px] font-black rounded-full flex items-center justify-center ring-1 ring-white">
              {itemCount}
            </span>
          )}
          <span className="text-[10px] mt-0.5 font-medium">Bag</span>
        </button>
      </div>
    </div>
  );
};
