"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Truck,
  CheckCircle2,
  Phone,
  Tag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/data/products";
import { generateWhatsAppOrderLink } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer = () => {
  const {
    cart,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    shippingFee,
    discount,
    total,
    freeShippingThreshold,
    freeShippingProgress,
    couponCode,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponMsg, setCouponMsg] = useState<{ text: string; error?: boolean } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMsg({ text: res.message, error: !res.success });
    if (res.success) {
      setCouponInput("");
    }
  };

  const whatsAppLink = generateWhatsAppOrderLink({
    items: cart.map((item) => ({
      name: item.name,
      size: item.size,
      color: item.color.name,
      qty: item.quantity,
      price: item.price,
    })),
    total,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 text-brand-dark flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-display font-extrabold text-brand-dark">
                      Shopping Bag
                    </h2>
                    <p className="text-xs text-gray-500 font-medium">
                      {cart.length} {cart.length === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="p-2 rounded-xl text-gray-400 hover:text-brand-dark hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="px-5 py-3 bg-emerald-50/50 border-b border-emerald-100/60">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    {freeShippingProgress >= 100 ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Free Cash on Delivery unlocked!
                      </span>
                    ) : (
                      <span>
                        Add{" "}
                        <strong className="text-slate-950 font-bold">
                          {formatPKR(Math.max(0, freeShippingThreshold - subtotal))}
                        </strong>{" "}
                        more for Free Shipping
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700">
                    {freeShippingProgress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-emerald-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xs"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                      <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-800">Your bag is empty</h3>
                    <p className="text-xs text-gray-500 max-w-xs mt-1 mb-6">
                      Explore our footwear collection and pick your favorite pair!
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-xl bg-brand-dark hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
                    >
                      Start Shopping &rarr;
                    </Link>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3.5 p-3 rounded-2xl bg-white border border-gray-200/70 shadow-sm"
                    >
                      {/* Product Thumbnail */}
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="relative w-20 h-20 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/product/${item.slug}`}
                              onClick={closeCart}
                              className="text-xs sm:text-sm font-bold text-gray-900 hover:text-brand-dark line-clamp-1"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-gray-800 transition-colors p-1"
                              aria-label="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                            <span className="font-semibold px-1.5 py-0.5 bg-gray-100 rounded text-gray-700">
                              EU {item.size}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-gray-300 inline-block"
                                style={{ backgroundColor: item.color.hex }}
                              />
                              {item.color.name}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Stepper & Price */}
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 hover:bg-gray-200 text-gray-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 hover:bg-gray-200 text-gray-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="text-xs sm:text-sm font-black text-brand-dark">
                              {formatPKR(item.price * item.quantity)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 space-y-3.5">
                  {/* Coupon Strip */}
                  <div>
                    {couponCode ? (
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-emerald-600" />
                          Code &ldquo;{couponCode}&rdquo; Applied (-{formatPKR(discount)})
                        </span>
                        <button
                          onClick={removeCoupon}
                          className="text-gray-600 hover:text-black text-xs underline font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Promo code (e.g. TIMERGARA10)"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="w-full text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand-dark"
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-2 bg-brand-dark hover:bg-black text-white text-xs font-bold rounded-xl transition-colors"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-200/60 pt-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">{formatPKR(subtotal)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Discount</span>
                        <span>-{formatPKR(discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-gray-900">
                        {shippingFee === 0 ? (
                          <span className="text-emerald-600 font-bold uppercase text-[11px]">
                            FREE
                          </span>
                        ) : (
                          formatPKR(shippingFee)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-brand-dark pt-1.5 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span className="text-base text-brand-dark font-black">{formatPKR(total)}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-2 pt-1">
                    <Link
                      href="/checkout"
                      onClick={closeCart}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-black text-sm shadow-md shadow-slate-950/20 ring-1 ring-amber-400/40 transition-all active:scale-95"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </Link>

                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Order Directly on WhatsApp (Instant COD)</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
