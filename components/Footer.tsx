"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0b0f19] text-gray-300 pt-16 pb-12 border-t border-amber-500/20 shadow-2xl relative overflow-hidden">
      {/* Subtle Golden Ambient Orb in Footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Value Proposition Highlights Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 pb-12 border-b border-amber-500/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <Truck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-black text-amber-400 text-sm">Free Delivery Available</h4>
              <p className="text-xs text-gray-400 mt-0.5">On orders above Rs. 4,999</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <RotateCcw className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-black text-emerald-400 text-sm">7-Day Easy Exchange</h4>
              <p className="text-xs text-gray-400 mt-0.5">Hassle-free size replacement</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-black text-amber-400 text-sm">100% Genuine Quality</h4>
              <p className="text-xs text-gray-400 mt-0.5">Direct Timergara Showroom</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <Headphones className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-black text-emerald-400 text-sm">Local Friendly Support</h4>
              <p className="text-xs text-gray-400 mt-0.5">Direct WhatsApp & In-Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <Logo variant="light" />
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
            Timergara&apos;s leading footwear showroom. High-performance athletic sneakers, handcrafted genuine leather Kaptaan & Norozi chappals, and formal footwear with Cash on Delivery across Pakistan.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-gray-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Rest House Road, Timergara, District Dir Lower, KPK, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://wa.me/923451964005" target="_blank" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                +92 345 1964005
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400/80 shrink-0" />
              <span>Mon - Sat: 9:00 AM - 10:00 PM | Sun: 2:00 PM - 10:00 PM</span>
            </div>
          </div>
        </div>

        {/* Col 2: Collections */}
        <div>
          <h3 className="font-display font-black text-amber-400 text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>Footwear Collections</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <Link href="/shop?category=sports" className="hover:text-amber-400 transition-colors">
                Running &amp; Athletic Shoes
              </Link>
            </li>
            <li>
              <Link href="/shop?category=heritage" className="hover:text-amber-400 transition-colors font-semibold text-amber-300/90">
                Kaptaan &amp; Norozi Chappals
              </Link>
            </li>
            <li>
              <Link href="/shop?gender=Men" className="hover:text-amber-400 transition-colors">
                Men&apos;s Collection
              </Link>
            </li>
            <li>
              <Link href="/shop?gender=Women" className="hover:text-amber-400 transition-colors">
                Women&apos;s Fashion
              </Link>
            </li>
            <li>
              <Link href="/shop?category=formal" className="hover:text-amber-400 transition-colors">
                Executive Leather Shoes
              </Link>
            </li>
            <li>
              <Link href="/shop?category=kids" className="hover:text-amber-400 transition-colors">
                Kids &amp; Youth Shoes
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Customer Care & Shopping */}
        <div>
          <h3 className="font-display font-black text-amber-400 text-sm uppercase tracking-wider mb-4">
            Showroom &amp; Support
          </h3>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <Link href="/shop" className="text-amber-300 font-bold hover:text-amber-200 transition-colors flex items-center gap-1.5">
                <span>🔥 Browse All Shoes &amp; Deals</span>
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-amber-400 transition-colors font-semibold text-amber-300/90 flex items-center gap-1">
                <span>📸 Showroom Gallery</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors">
                About Jan Mega Mall Heritage
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">
                Contact &amp; Store Location Map
              </Link>
            </li>
            <li>
              <a href="https://wa.me/923451964005?text=Assalam-o-Alaikum!%20I%20want%20to%20exchange%20or%20inquire%20about%20my%20order." target="_blank" className="hover:text-amber-400 transition-colors">
                7-Day Size Exchange Support
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: VIP Newsletter & WhatsApp */}
        <div>
          <h3 className="font-display font-black text-amber-400 text-sm uppercase tracking-wider mb-4">
            VIP Discounts
          </h3>
          <p className="text-xs text-gray-400 mb-3">
            Get special seasonal discount codes and new sneaker arrivals alerts in Timergara.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black hover:from-amber-300 hover:to-amber-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
              </p>
            )}
          </form>

          <div className="mt-4 pt-3 border-t border-amber-500/15">
            <a
              href="https://wa.me/923451964005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-xs shadow-md hover:from-emerald-500 hover:to-emerald-600 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Join WhatsApp VIP Club</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} <strong className="text-amber-400 font-bold">Jan Mega Mall</strong> (Timergara, Dir Lower, KPK). All rights reserved.
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-gray-400 font-semibold mr-1">Accepted Payments:</span>
          <span className="px-2 py-1 rounded bg-white/5 border border-amber-500/20 text-[10px] text-amber-300 font-bold">
            Cash on Delivery
          </span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-300 font-bold">
            JazzCash
          </span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-300 font-bold">
            EasyPaisa
          </span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-300 font-bold">
            Bank Transfer
          </span>
        </div>
      </div>
    </footer>
  );
};
