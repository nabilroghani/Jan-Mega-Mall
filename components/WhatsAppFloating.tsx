"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export const WhatsAppFloating = () => {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);

  // Hide in checkout
  if (pathname === "/checkout") return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
      {/* Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[220px] text-xs text-gray-700 animate-in fade-in slide-in-from-bottom-2 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-gray-400 hover:text-gray-700 rounded-full"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-gray-900 mb-0.5">{siteConfig.name} Support</div>
          <p className="text-[11px] text-gray-500 leading-tight">
            Order on WhatsApp or ask size questions directly!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I am browsing ${siteConfig.name} and want to place an order.`)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="WhatsApp Order"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp Order</span>
      </a>
    </div>
  );
};
