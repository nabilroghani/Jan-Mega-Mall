"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Eye, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { formatPKR } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 41);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || { name: "Default", hex: "#000" });
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedSize, selectedColor, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const currentImage = isHovered && product.images[1] ? product.images[1] : product.thumbnail;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickAdd(false);
      }}
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-slate-50 via-gray-100 to-gray-200 overflow-hidden">
        {/* Badges with Luxury Gold & Obsidian Styling */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.isSale && discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm">
              -{discountPercent}% OFF
            </span>
          )}
          {product.isNew && !product.isSale && (
            <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-amber-400 text-[10px] font-black uppercase tracking-wider shadow-sm ring-1 ring-amber-400/40">
              NEW ARRIVAL
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-xl transition-all shadow-sm ${
            isFavorite
              ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 scale-105 shadow-md shadow-amber-500/30"
              : "bg-white/90 text-gray-700 hover:text-slate-900 hover:bg-white"
          }`}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? "fill-slate-950 text-slate-950" : ""
            }`}
          />
        </button>

        {/* Product Image */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full relative">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-contain object-center p-3 group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Quick Add Overlay on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {showQuickAdd ? (
            <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-gray-200 animate-in fade-in zoom-in-95">
              <div className="text-[11px] font-bold text-gray-700 mb-1.5 flex justify-between items-center">
                <span>Select Size:</span>
                <span className="text-amber-700 font-black">EU {selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSize(s);
                    }}
                    className={`px-2 py-1 text-[11px] font-bold rounded-md border transition-colors ${
                      selectedSize === s
                        ? "bg-slate-950 text-amber-400 border-slate-950 ring-1 ring-amber-400/40"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button
                onClick={handleQuickAdd}
                className="w-full py-2 bg-slate-950 hover:bg-black text-amber-400 text-xs font-black rounded-lg transition-colors flex items-center justify-center gap-1.5 ring-1 ring-amber-400/30"
              >
                {justAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> <span className="text-emerald-400">Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400" /> Confirm &amp; Add
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowQuickAdd(true);
                }}
                className="flex-1 py-2.5 px-3 bg-slate-950 hover:bg-black text-amber-400 text-xs font-black rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 ring-1 ring-amber-400/30 active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" /> Quick Add
              </button>
              <Link
                href={`/product/${product.slug}`}
                className="p-2.5 bg-white hover:bg-amber-50 text-gray-800 rounded-xl shadow-md transition-colors"
                aria-label="View Details"
              >
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Bottom */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[9px] sm:text-[10px] text-gray-400">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-gray-700 font-bold text-[11px] sm:text-xs">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-display font-bold text-xs sm:text-base text-gray-900 group-hover:text-brand-dark transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Color swatches */}
          <div className="flex items-center gap-1.5 mt-2">
            {product.colors.slice(0, 4).map((col) => (
              <button
                key={col.name}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(col);
                }}
                title={col.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor.name === col.name
                    ? "ring-2 ring-brand-dark ring-offset-1 scale-110"
                    : "border-gray-300 hover:scale-105"
                }`}
                style={{ backgroundColor: col.hex }}
              />
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-base font-black text-slate-950">
              {formatPKR(product.price)}
            </div>
            {product.originalPrice && (
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-gray-400 line-through">
                  {formatPKR(product.originalPrice)}
                </span>
                <span className="text-[10px] font-bold text-emerald-600">
                  Save {formatPKR(product.originalPrice - product.price)}
                </span>
              </div>
            )}
          </div>

          {/* Mobile Quick Add */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-2.5 min-w-[40px] min-h-[40px] rounded-xl bg-slate-900 text-amber-400 hover:bg-black active:scale-90 transition-all shadow-xs flex items-center justify-center"
            aria-label="Add to bag"
          >
            {justAdded ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
