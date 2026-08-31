"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  X,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Check,
  RotateCcw,
  ShoppingBag,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, BRANDS, formatPKR } from "@/data/products";

const ALL_SIZES = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const CATEGORIES = [
  { id: "all", label: "All Collections" },
  { id: "sports", label: "Sports & Running" },
  { id: "heritage", label: "Heritage & Peshawari" },
  { id: "men", label: "Men's Footwear" },
  { id: "women", label: "Women's Footwear" },
  { id: "formal", label: "Executive Formal" },
  { id: "sandals", label: "Sandals & Slides" },
  { id: "kids", label: "Kids & Youth" },
];

function ShopContent() {
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "all";
  const initialGender = searchParams.get("gender") || "all";

  const [category, setCategory] = useState<string>(initialCategory);
  const [gender, setGender] = useState<string>(initialGender);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number>(15000);
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
    const gen = searchParams.get("gender");
    if (gen) setGender(gen);
  }, [searchParams]);

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const toggleSize = (s: number) => {
    setSelectedSizes((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const clearAllFilters = () => {
    setCategory("all");
    setGender("all");
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange(15000);
    setOnSaleOnly(false);
    setInStockOnly(false);
    setSearchQuery("");
    setSortBy("featured");
  };

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (gender !== "all") {
      list = list.filter((p) => p.gender === gender || p.gender === "Unisex");
    }
    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedSizes.length > 0) {
      list = list.filter((p) =>
        selectedSizes.some((size) => p.sizes.includes(size))
      );
    }
    list = list.filter((p) => p.price <= priceRange);
    if (onSaleOnly) {
      list = list.filter((p) => p.isSale);
    }
    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return list;
  }, [
    category,
    gender,
    selectedBrands,
    selectedSizes,
    priceRange,
    onSaleOnly,
    inStockOnly,
    searchQuery,
    sortBy,
  ]);

  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (gender !== "all" ? 1 : 0) +
    selectedBrands.length +
    selectedSizes.length +
    (priceRange < 15000 ? 1 : 0) +
    (onSaleOnly ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-[#111622] to-slate-950 text-white border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-1.5 max-w-xl relative z-10">
          <div className="text-xs font-black uppercase tracking-wider text-amber-400">
            ★ JAN MEGA MALL • TIMERGARHA
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
            Footwear &amp; Shoe Collection
          </h1>
          <p className="text-xs sm:text-sm text-gray-300">
            Browse athletic trainers, handcrafted Kaptaan chappals, and dress shoes with nationwide Cash on Delivery.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/20 text-center">
            <div className="font-display font-black text-lg text-amber-400">{PRODUCTS.length}+</div>
            <div className="text-[10px] text-amber-200/80 font-bold uppercase">Models</div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/20 text-center">
            <div className="font-display font-black text-lg text-emerald-400">100%</div>
            <div className="text-[10px] text-amber-200/80 font-bold uppercase">Original</div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, brand, or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 text-amber-400 text-xs font-black ring-1 ring-amber-400/30 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] flex items-center justify-center font-black">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-bold text-gray-800 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-6 p-3 rounded-2xl bg-amber-50/60 border border-amber-200/80">
          <span className="text-xs font-black text-amber-900">Active Filters:</span>
          {category !== "all" && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-950">
              Category: {category}
              <button onClick={() => setCategory("all")}><X className="w-3 h-3 text-amber-700 hover:text-black" /></button>
            </span>
          )}
          {gender !== "all" && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-950">
              Gender: {gender}
              <button onClick={() => setGender("all")}><X className="w-3 h-3 text-amber-700 hover:text-black" /></button>
            </span>
          )}
          {selectedBrands.map((b) => (
            <span key={b} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-950">
              {b}
              <button onClick={() => toggleBrand(b)}><X className="w-3 h-3 text-amber-700 hover:text-black" /></button>
            </span>
          ))}
          {selectedSizes.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-950">
              EU {s}
              <button onClick={() => toggleSize(s)}><X className="w-3 h-3 text-amber-700 hover:text-black" /></button>
            </span>
          ))}
          {onSaleOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-950">
              On Sale
              <button onClick={() => setOnSaleOnly(false)}><X className="w-3 h-3 text-amber-700" /></button>
            </span>
          )}
          <button
            onClick={clearAllFilters}
            className="text-xs font-black text-amber-800 hover:underline ml-auto flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Clear All ({activeFiltersCount})
          </button>
        </div>
      )}

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-28 bg-white p-5 rounded-3xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-950 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-600" /> Filter Shoes
            </h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] font-bold text-amber-700 hover:text-amber-900 hover:underline"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Categories
            </div>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    category === cat.id
                      ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-sm"
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Gender
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {["all", "Men", "Women"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                    gender === g
                      ? "bg-slate-950 text-amber-400 border-slate-950 ring-1 ring-amber-400/40"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {g === "all" ? "All" : g}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs">
              <span className="font-black uppercase tracking-wider text-amber-700">Max Price</span>
              <span className="font-black text-slate-950">{formatPKR(priceRange)}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="15000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
              <span>Rs. 2,000</span>
              <span>Rs. 15,000</span>
            </div>
          </div>

          {/* Size Filter */}
          {/* Size Filter */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Shoe Size (EU)
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ALL_SIZES.map((size) => {
                const isSelected = selectedSizes.includes(size);
                return (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-9 h-8 rounded-lg text-xs font-black border transition-colors flex items-center justify-center ${
                      isSelected
                        ? "bg-slate-950 text-amber-400 border-slate-950 ring-1 ring-amber-400/40 shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:border-amber-400"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brands Checklist */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Brands &amp; Collections
            </div>
            <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
              {BRANDS.map((brand) => {
                const isChecked = selectedBrands.includes(brand);
                return (
                  <label
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:bg-amber-50 hover:text-amber-900 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-slate-950 border-slate-950 text-amber-400 ring-1 ring-amber-400/30"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <label className="flex items-center justify-between text-xs font-bold text-gray-700 cursor-pointer">
              <span>Sale Items Only</span>
              <input
                type="checkbox"
                checked={onSaleOnly}
                onChange={(e) => setOnSaleOnly(e.target.checked)}
                className="w-4 h-4 accent-amber-500"
              />
            </label>
            <label className="flex items-center justify-between text-xs font-bold text-gray-700 cursor-pointer">
              <span>In Stock Only</span>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-amber-500"
              />
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-500">
              Showing <span className="text-amber-700 font-black">{filteredProducts.length}</span> results
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 shadow-sm space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mx-auto">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-black text-lg text-slate-950">
                No matching shoes found
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try adjusting your filters or search keywords.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 bg-slate-950 hover:bg-black text-amber-400 text-xs font-black rounded-xl transition-colors shadow-md ring-1 ring-amber-400/30 active:scale-95"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto p-5">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-display font-black text-base text-slate-950">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-amber-700">Category</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`p-2 text-xs font-bold rounded-xl text-left truncate transition-colors ${
                        category === cat.id
                          ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-amber-700 font-bold">Max Price</span>
                  <span className="text-slate-950 font-black">{formatPKR(priceRange)}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              {/* Sizes */}
              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-amber-700">Sizes</div>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`w-8 h-8 rounded-lg text-xs font-black border ${
                        selectedSizes.includes(size)
                          ? "bg-slate-950 text-amber-400 border-slate-950 ring-1 ring-amber-400/40"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex gap-2">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-950 hover:bg-black text-amber-400 text-xs font-black shadow-md ring-1 ring-amber-400/30"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-bold">Loading catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
