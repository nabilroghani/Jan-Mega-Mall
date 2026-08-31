import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Truck,
  RotateCcw,
  ShoppingBag,
} from "lucide-react";

export const metadata = {
  title: "About Us | Jan Mega Mall - Timergara Footwear Heritage",
  description:
    "Discover Jan Mega Mall, Timergara's premier footwear destination on Rest House Road, Dir Lower. Handcrafted genuine leather Kaptaan chappals, high-speed athletic sneakers, and our promise of authenticity.",
};

const CRAFT_STEPS = [
  {
    number: "01",
    title: "Full-Grain Leather Selection",
    desc: "We hand-select 100% authentic cowhide and calf leather with natural grain for breathability and supple comfort.",
  },
  {
    number: "02",
    title: "Master Hand-Pattern Cutting",
    desc: "Artisans shape upper leather straps to contour naturally with standard Pakistani and Pashtun foot dimensions.",
  },
  {
    number: "03",
    title: "Heavy-Duty Tyre Grip Soles",
    desc: "Custom vulcanized tyre outsoles provide exceptional traction across mountain trails, paved streets, and daily wear.",
  },
  {
    number: "04",
    title: "Triple-Needle Master Stitching",
    desc: "Triple waxed thread stitching ensures everlasting bonding that never comes apart, backed by our quality guarantee.",
  },
];

const STATS = [
  { value: "10,000+", label: "Happy Customers", sub: "Across KPK & Pakistan" },
  { value: "500+", label: "Footwear Models", sub: "Sneakers, Formals & Chappals" },
  { value: "100%", label: "Genuine Materials", sub: "Quality Inspected" },
  { value: "7 Days", label: "Easy Size Exchange", sub: "WhatsApp Support" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-16">
      {/* 1. BALANCED HERO SECTION (Light luxury canvas + Split Visual Layout) */}
      <section className="relative pt-1 sm:pt-3 pb-8 sm:pb-10 lg:pb-12 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white border-b border-amber-500/10 overflow-hidden">
        {/* Subtle Decorative Ambient Gold Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Brand Narrative */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-black tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Jan Mega Mall • Timergara, Dir Lower</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
                The Heritage &amp; Craft of <br />
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                  Timergara Footwear.
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Located on <strong>Rest House Road in Timergara</strong>, Jan Mega Mall is District Dir Lower&apos;s leading shoe destination — blending authentic Pashtun artisanal leather heritage with high-speed athletic sneakers and executive dress shoes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition-all group active:scale-95 text-center"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950" />
                  <span>Explore Shoe Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/gallery"
                  className="flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-black text-sm ring-1 ring-amber-400/40 shadow-md transition-all active:scale-95 text-center"
                >
                  <span>View Showroom Gallery</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-700 font-bold pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">
                  ★ 100% Genuine Quality
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">
                  ✓ Cash on Delivery
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">
                  ✓ 7-Day Exchange
                </span>
              </div>
            </div>

            {/* Right: Elegant Visual Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/30 group">
                <Image
                  src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop"
                  alt="Handcrafted Peshawari Leather"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating Bottom Pill */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-400/40 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                      Artisanal Pride of KPK
                    </span>
                    <span className="text-sm font-black text-slate-950">
                      Handcrafted in Dir Lower
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-950 text-amber-400 text-xs font-black ring-1 ring-amber-400/30">
                    Showroom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-400/40 transition-colors text-center sm:text-left space-y-1"
            >
              <div className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-display font-black text-sm text-slate-950">
                {stat.label}
              </div>
              <p className="text-[11px] text-gray-500 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR STORY & SHOWROOM CRAFT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Rooted in Dir Lower
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 leading-tight">
              Crafted with Passion. <br />
              Dedicated to Our Community.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              When we established our showroom on <strong>Rest House Road in Timergara</strong>, our mission was clear: deliver high-performance athletic sneakers, executive leather oxfords, and genuine double-stitched Kaptaan &amp; Norozi chappals with guaranteed authentic quality.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every single pair in our showroom is inspected for sole bonding durability, leather thickness, and ergonomic foot arch support to give you lasting comfort whether in Timergara, Swat, Peshawar, or anywhere in Pakistan.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-800 font-bold">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Genuine full-grain cowhide and calf leathers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Double-stitched artisanal Kaptaan and Norozi Peshawari chappals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Nationwide Cash on Delivery with 7-day size exchange</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-md border border-gray-200 group">
              <Image
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
                alt="Handcrafted leather shoe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Kaptaan Master Craft</span>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-md border border-gray-200 group mt-6">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
                alt="Sneakers showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Athletic Runners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTER CRAFTSMANSHIP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
            Artisanal Heritage
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
            How Our Peshawari Chappals Are Built
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CRAFT_STEPS.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-400/50 transition-colors space-y-3 relative overflow-hidden"
            >
              <span className="font-display font-black text-3xl text-amber-500/30">
                {step.number}
              </span>
              <h3 className="font-display font-black text-base text-slate-950">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STORE VISIT & WHATSAPP CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#10141e] to-slate-950 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-amber-500/30 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Timergara Flagship Store
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Visit Rest House Road, Timergara
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Open 7 days a week from 9:00 AM to 10:00 PM. Experience the comfort and try on your favorite pairs in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-md text-center active:scale-95"
            >
              Get Store Map &amp; Directions
            </Link>
            <a
              href="https://wa.me/923451964005?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20Jan%20Mega%20Mall."
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
    </div>
  );
}
