"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  ZoomIn,
  X,
  ArrowRight,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "heritage" | "sneakers" | "formal" | "showroom";
  categoryLabel: string;
  description: string;
  image: string;
  badge?: string;
  price?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Handcrafted Royal Kaptaan Chappal",
    category: "heritage",
    categoryLabel: "Heritage Leather",
    description: "100% genuine full-grain calf leather with heavy-duty tyre sole and triple master stitching. The pride of Timergara.",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop",
    badge: "Master Crafted",
    price: "Rs. 4,999",
  },
  {
    id: "g2",
    title: "Flagship Showroom Main Display",
    category: "showroom",
    categoryLabel: "Showroom Store",
    description: "Our modern retail display on Rest House Road, Timergara, featuring hundreds of ready-to-wear shoe pairs.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    badge: "Timergara Store",
  },
  {
    id: "g3",
    title: "Pro Velocity Air Cushion Runner",
    category: "sneakers",
    categoryLabel: "Athletic Sneakers",
    description: "Engineered breathable mesh with responsive dual-density air cushioning for jogging and daily comfort.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    badge: "Top Seller",
    price: "Rs. 5,499",
  },
  {
    id: "g4",
    title: "Executive Hand-Burnished Oxfords",
    category: "formal",
    categoryLabel: "Executive Formal",
    description: "Ultra-sleek genuine leather dress shoes with cushioned orthopedic insoles for weddings and business meetings.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    badge: "Wedding Edit",
    price: "Rs. 6,999",
  },
  {
    id: "g5",
    title: "Peshawari Norozi Double-Stitch Classic",
    category: "heritage",
    categoryLabel: "Heritage Leather",
    description: "Authentic double-gear Norozi chappal crafted by master Pashtun artisans with antique brass buckles.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    badge: "Traditional",
    price: "Rs. 5,299",
  },
  {
    id: "g6",
    title: "Urban Streetstyle High-Top Sneaker",
    category: "sneakers",
    categoryLabel: "Athletic Sneakers",
    description: "Youthful street-fashion silhouette with high-ankle support and durable all-weather traction grip.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop",
    badge: "New Drop",
    price: "Rs. 4,799",
  },
  {
    id: "g7",
    title: "Showroom Shoe Fitting Lounge",
    category: "showroom",
    categoryLabel: "Showroom Store",
    description: "Comfortable trial and consultation lounge where our knowledgeable staff helps you discover the perfect fit.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    badge: "In-Store Fitting",
  },
  {
    id: "g8",
    title: "Camel Brown Kaptaan Special Edition",
    category: "heritage",
    categoryLabel: "Heritage Leather",
    description: "Signature warm camel shade with hand-burnished edges and ultra-cushioned footbed for day-long Eid wear.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    badge: "Limited Edition",
    price: "Rs. 5,499",
  },
  {
    id: "g9",
    title: "Minimalist Leather Derby Brogues",
    category: "formal",
    categoryLabel: "Executive Formal",
    description: "Classic perforated wingtip pattern crafted from premium cowhide with slip-resistant composite rubber heels.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    badge: "Formal Heritage",
    price: "Rs. 6,499",
  },
  {
    id: "g10",
    title: "Lightweight Breathable Gym Trainers",
    category: "sneakers",
    categoryLabel: "Athletic Sneakers",
    description: "Featherlight training shoe built with high-airflow knit upper and flexible torsion arch support.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    badge: "Gym Ready",
    price: "Rs. 3,999",
  },
  {
    id: "g11",
    title: "Artisan Leather Stitching Workshop",
    category: "heritage",
    categoryLabel: "Heritage Leather",
    description: "Close-up of the traditional cobbler hand tools, needles, and waxes used to construct our genuine leather chappals.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
    badge: "Artisanal Craft",
  },
  {
    id: "g12",
    title: "Customer Packaging & Unboxing Suite",
    category: "showroom",
    categoryLabel: "Showroom Store",
    description: "Every pair is carefully buffed, packed in luxury branded boxes with dust bags, and shipped nationwide via COD.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    badge: "Premium Boxed",
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Visuals" },
  { id: "heritage", label: "Handcrafted Heritage" },
  { id: "sneakers", label: "Athletic Trainers" },
  { id: "formal", label: "Executive Formals" },
  { id: "showroom", label: "Store & Workshop" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-16">
      {/* 1. SEAMLESS HERO SECTION (Clean luxury canvas, no awkward floating black box) */}
      <section className="relative pt-1 sm:pt-3 pb-6 sm:pb-8 lg:pb-10 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white border-b border-amber-500/10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Jan Mega Mall • Timergara Showroom Showcase</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
            Footwear Artistry &amp; <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              Showroom Gallery
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore the master craftsmanship behind our handcrafted Kaptaan chappals, high-speed athletic sneakers, and our flagship showroom on Rest House Road, Timergara.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-slate-700">
            <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Genuine Materials
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Master Artisanal Stitching
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-xs flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-600" /> Rest House Road, Timergara
            </span>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 shadow-md shadow-slate-950/15"
                    : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-800 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/90 hover:border-amber-400/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-400/30">
                      {item.badge}
                    </span>
                  )}
                  <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors ml-auto shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {item.price && (
                  <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs shadow-md">
                    {item.price}
                  </div>
                )}
              </div>

              {/* Info Area */}
              <div className="p-4 sm:p-5 bg-white space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-display font-black text-base text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-700">
                  <span>View Details &amp; Order</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SHOWROOM INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#10141e] to-slate-950 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-amber-500/30 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Visit In Person
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Experience the Craftsmanship in Timergara
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Visit our showroom on Rest House Road for live sizing, custom bespoke Kaptaan stitching, and hundreds of styles in stock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-md text-center active:scale-95"
            >
              Browse Complete Catalog
            </Link>
            <a
              href={siteConfig.getWhatsAppLink("Assalam-o-Alaikum! I saw your Gallery and want to inquire about your footwear.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX PREVIEW MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200 animate-in fade-in zoom-in-95">
            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              {selectedItem.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-black uppercase shadow-md">
                  {selectedItem.badge}
                </span>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-black uppercase text-amber-700">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-display font-black text-xl text-slate-950 mt-0.5">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                {selectedItem.price ? (
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">
                      Price Estimate
                    </span>
                    <span className="text-xl font-black text-slate-950">
                      {selectedItem.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-gray-500">
                    Flagship Store Showcase
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <Link
                    href="/shop"
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-900 font-bold text-xs text-center"
                  >
                    View Catalog
                  </Link>
                  <a
                    href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I am interested in this item from your Gallery: ${selectedItem.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
