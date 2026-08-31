"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  PRODUCTS,
  CATEGORIES_DATA,
  getFeaturedProducts,
  getTrendingProducts,
  getNewArrivals,
  formatPKR,
} from "@/data/products";

import { Hero3DShoe } from "@/components/Hero3DShoe";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"featured" | "trending" | "new" | "heritage">("featured");

  const featuredShoes = getFeaturedProducts();
  const trendingShoes = getTrendingProducts();
  const newArrivals = getNewArrivals();
  const heritageShoes = PRODUCTS.filter((p) => p.category === "heritage");

  const getActiveList = () => {
    switch (activeTab) {
      case "trending":
        return trendingShoes;
      case "new":
        return newArrivals;
      case "heritage":
        return heritageShoes;
      default:
        return featuredShoes;
    }
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-16 overflow-hidden pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-12 lg:pb-14 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white border-b border-amber-500/10 overflow-hidden">
        {/* Subtle Decorative Ambient Gold Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">

            {/* 360° Shoe Viewer — FIRST on mobile for visual impact */}
            <div className="lg:col-span-6 flex items-center justify-center order-first lg:order-last hero-fade-right">
              <Hero3DShoe />
            </div>

            {/* Text Content — below viewer on mobile, left on desktop */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left hero-fade-left order-last lg:order-first">
              {/* Brand Pill with Golden Glow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-black tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Timergara Flagship Store • Rest House Road</span>
              </div>

              {/* Headline with Gold Metallic Gradient */}
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-[1.08]">
                STEP INTO <br />
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                  LUXURY &amp; STYLE.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Dir Lower&apos;s premier footwear destination for high-speed athletic sneakers and authentic handcrafted <strong className="text-amber-800 font-bold">Kaptaan Chappals</strong>.
              </p>

              {/* CTA Buttons — Luxury Gold & Obsidian Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-3 sm:pt-4">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-black text-sm shadow-xl shadow-slate-950/20 ring-1 ring-amber-400/40 transition-all group active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Shop Shoes</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/923451964005?text=Assalam-o-Alaikum!%20I%20want%20to%20order%20shoes%20from%20Jan%20Mega%20Mall."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Trust Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-slate-700 font-bold">
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">★ 100% Genuine Quality</span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">✓ Cash on Delivery</span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">✓ 7-Day Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Curated Footwear
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
          >
            <span>View All Collections</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-400/40"
            >
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/40">
                      {cat.count} Products
                    </span>
                    <div className="w-9 h-9 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-amber-200/90 mb-1">{cat.subtitle}</p>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED / TRENDING TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Popular Selections
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 mt-1">
              Trending Shoes
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                activeTab === "featured"
                  ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-md"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-800 border border-gray-200"
              }`}
            >
              Featured Picks
            </button>
            <button
              onClick={() => setActiveTab("trending")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                activeTab === "trending"
                  ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-md"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-800 border border-gray-200"
              }`}
            >
              Trending Now
            </button>
            <button
              onClick={() => setActiveTab("heritage")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                activeTab === "heritage"
                  ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-md"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-800 border border-gray-200"
              }`}
            >
              Kaptaan Heritage
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                activeTab === "new"
                  ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-md"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-800 border border-gray-200"
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {getActiveList().slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-amber-400 ring-1 ring-amber-400/30 font-black text-sm transition-all shadow-md active:scale-95"
          >
            <span>Browse Complete Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. HERITAGE SPOTLIGHT (Kaptaan & Norozi) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#120e09] via-[#0b0f19] to-[#070b14] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-amber-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Artisanal Pride of KPK</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Authentic Handcrafted <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Kaptaan &amp; Norozi Chappals</span>
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                Experience royal tradition crafted with 100% full-grain calf leather, heavy-duty tyre soles, and triple-needle master stitching. Made for Eid, weddings, and traditional Pashtun elegance.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-gray-200 font-semibold pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Genuine Cowhide &amp; Calf Leather
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Heavy-Duty Tyre Grip Soles
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Padded Ortho Footbed
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/shop?category=heritage"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all text-center active:scale-95"
                >
                  Explore Heritage Line &rarr;
                </Link>
                <a
                  href="https://wa.me/923451964005?text=Assalam-o-Alaikum%20I%20want%20to%20order%20Kaptaan%20Chappal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Custom Order on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 group">
                <Image
                  src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop"
                  alt="Handcrafted Peshawari Leather"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5">
                  <div>
                    <div className="text-xs font-bold text-amber-300">Royal Kaptaan Chappal</div>
                    <div className="text-xl font-black text-white">{formatPKR(4999)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY SHOP WITH US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
            Service &amp; Trust
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
            Why Footwear Lovers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-3 hover:border-amber-400/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-slate-950">
              Nationwide COD Delivery
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Safe, fast Cash on Delivery across Timergara, Swat, Peshawar, Islamabad, Lahore, Karachi, and all of Pakistan.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-3 hover:border-emerald-400/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-slate-950">
              7-Day Size Exchange
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Wrong size? No worries. Enjoy our easy 7-day size exchange guarantee with zero hassle.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-3 hover:border-amber-400/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-slate-950">
              100% Quality Guaranteed
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Inspected for sole bonding, leather finish, and stitching before reaching you.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-3 hover:border-amber-400/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-slate-950">
              Flagship Timergara Store
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Visit us directly on Rest House Road, Timergara for in-person fitting and assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 6. STORE INVITATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#10141e] to-slate-950 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-amber-500/30 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Visit Our Flagship Showroom
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Rest House Road, Timergara, Dir Lower
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Open 7 days a week with hundreds of shoe styles in stock. Experience the quality and find your ideal fit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-md text-center active:scale-95"
            >
              Browse Catalog Online
            </Link>
            <a
              href="https://wa.me/923451964005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
