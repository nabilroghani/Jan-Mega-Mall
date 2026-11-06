"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { itemCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  interface NavLinkItem {
    name: string;
    href: string;
    badge?: string;
    isSale?: boolean;
  }

  // Clean, distinct core navigation links (No redundant filter duplicates)
  const navLinks: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery", badge: "Showroom" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-amber-500/20 py-1.5 sm:py-2"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2 sm:py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Logo />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs font-black tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "text-amber-400 bg-slate-950 shadow-md shadow-slate-950/15 ring-1 ring-amber-500/30"
                      : link.isSale
                      ? "text-amber-700 bg-amber-50 hover:bg-amber-100 hover:text-amber-800 ring-1 ring-amber-200"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-800 text-[9px] font-black uppercase tracking-normal">
                      {link.badge}
                    </span>
                  )}
                  {link.isSale && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Wishlist, Bag) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center shadow-sm ring-1 ring-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Luxury Gold & Obsidian Cart Bag */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-black transition-all shadow-md shadow-slate-950/20 ring-1 ring-amber-500/30 group active:scale-95"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-amber-200">Bag</span>
              <span className="w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full text-[10px] font-black flex items-center justify-center text-slate-950 shadow-xs">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-amber-50/60 to-white">
                  <Logo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSearchOpen(true);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-amber-50 hover:text-amber-800 transition-colors"
                  >
                    <Search className="w-4 h-4 text-amber-600" />
                    <span>Search footwear catalog...</span>
                  </button>
                </div>

                <div className="px-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                        link.isSale
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-800 text-[10px] font-black">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 bg-slate-950 text-white space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{siteConfig.location.fullAddress.split(",").slice(0, 3).join(",")}</span>
                </div>
                <Link
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Orders: {siteConfig.phoneFormatted}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
