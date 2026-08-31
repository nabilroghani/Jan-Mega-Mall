"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Sparkles, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, formatPKR } from "@/data/products";
import { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = ["Kaptaan Chappal", "Running Shoes", "Sneakers", "Oxford Leather", "Kids", "Heels"];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-gray-100 gap-3">
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search footwear, Kaptaan chappals, sneakers, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent border-none outline-none text-brand-dark placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-brand-dark hover:bg-gray-100 transition-colors ml-1"
          >
            <span className="text-xs font-semibold uppercase hidden sm:inline-block mr-1">Esc</span>
            <X className="w-5 h-5 inline-block" />
          </button>
        </div>

        {/* Content Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === "" ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-brand-dark hover:text-white transition-all text-gray-700 border border-gray-200"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Featured Categories
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <Link
                  href="/shop?category=sports"
                  onClick={onClose}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-800 transition-colors"
                >
                  <span>Athletic / Running</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                </Link>
                <Link
                  href="/shop?category=heritage"
                  onClick={onClose}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-800 transition-colors"
                >
                  <span>Kaptaan & Heritage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                </Link>
                <Link
                  href="/shop?category=formal"
                  onClick={onClose}
                  className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-800 transition-colors"
                >
                  <span>Executive Formal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                </Link>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Found {results.length} shoes
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 group"
                >
                  <div className="relative w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {product.brand} • {product.category}
                    </div>
                    <div className="text-sm font-bold text-gray-900 truncate group-hover:text-brand-dark transition-colors">
                      {product.name}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-black text-brand-dark">
                        {formatPKR(product.price)}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <Tag className="w-10 h-10 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">No shoes matching &ldquo;{query}&rdquo;</p>
              <Link
                href="/shop"
                onClick={onClose}
                className="inline-block mt-4 text-xs font-bold text-white bg-brand-dark hover:bg-black px-4 py-2 rounded-xl transition-colors"
              >
                Browse All Shoes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
