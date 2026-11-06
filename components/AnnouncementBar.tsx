"use client";

import React, { useState } from "react";
import { MapPin, Phone, X, Truck } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-amber-100 text-xs py-1.5 px-4 border-b border-amber-500/20 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Center message */}
        <div className="flex-1 flex items-center justify-center sm:justify-start gap-2 text-center">
          <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0 hidden sm:inline animate-bounce" style={{ animationDuration: "3s" }} />
          <span className="text-[11px] sm:text-xs font-medium">
            <span className="text-amber-400 font-black">★ {siteConfig.name.toUpperCase()} •</span> Free Nationwide Cash on Delivery on orders above <strong className="text-amber-300 font-black underline decoration-amber-500/50">Rs. 4,999</strong>
          </span>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-4 text-[11px] text-amber-200/80">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {siteConfig.location.shortAddress}
          </span>
          <span className="text-amber-500/30">|</span>
          <Link
            href={siteConfig.getWhatsAppLink()}
            target="_blank"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            WhatsApp: {siteConfig.phoneFormatted}
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close"
          className="text-amber-400/60 hover:text-amber-300 transition-colors p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
