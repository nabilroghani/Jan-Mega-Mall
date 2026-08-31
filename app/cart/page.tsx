"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  Tag,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/data/products";
import { generateWhatsAppOrderLink } from "@/lib/utils";

export default function CartPage() {
  const {
    cart,
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
    if (res.success) setCouponInput("");
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

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400">
          <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
        </div>
        <h1 className="font-display font-black text-2xl text-brand-dark mb-2">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
          Explore our wide range of athletic footwear, handcrafted Kaptaan chappals, and formal styles.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-dark hover:bg-black text-white font-bold text-sm shadow-md"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-dark">
          Shopping Bag ({cart.length} {cart.length === 1 ? "Item" : "Items"})
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review your selected footwear before proceeding to checkout.
        </p>
      </div>

      {/* Free Shipping Progress */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm mb-8">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800 mb-2">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-600" />
            {freeShippingProgress >= 100 ? (
              <span className="text-emerald-600 flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Free Nationwide Cash on Delivery Qualified!
              </span>
            ) : (
              <span>
                Add{" "}
                <strong className="text-brand-dark">
                  {formatPKR(Math.max(0, freeShippingThreshold - subtotal))}
                </strong>{" "}
                more to get Free Delivery
              </span>
            )}
          </span>
          <span className="text-xs text-gray-500 font-semibold">{freeShippingProgress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500 rounded-full bg-emerald-500"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden divide-y divide-gray-100">
            {cart.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <Link
                    href={`/product/${item.slug}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100"
                  >
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </Link>

                  <div className="flex-1 min-w-0 sm:hidden">
                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      {item.brand}
                    </div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-sm font-bold text-brand-dark hover:text-black transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                      <span className="font-bold px-1.5 py-0.5 rounded bg-gray-100 text-[11px]">EU {item.size}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-gray-300 inline-block"
                          style={{ backgroundColor: item.color.hex }}
                        />
                        {item.color.name}
                      </span>
                    </div>
                    <div className="text-xs font-black text-brand-dark mt-1">
                      {formatPKR(item.price)}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block flex-1 min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                    {item.brand}
                  </div>
                  <Link
                    href={`/product/${item.slug}`}
                    className="text-base font-bold text-brand-dark hover:text-black transition-colors block"
                  >
                    {item.name}
                  </Link>

                  <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                    <span className="font-bold px-2 py-0.5 rounded bg-gray-100">EU {item.size}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full border border-gray-300 inline-block"
                        style={{ backgroundColor: item.color.hex }}
                      />
                      {item.color.name}
                    </span>
                  </div>

                  <div className="text-sm font-black text-brand-dark mt-2">
                    {formatPKR(item.price)}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t border-gray-50 sm:border-0">
                  <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 sm:w-7 sm:h-7 hover:bg-gray-200 text-gray-600 flex items-center justify-center active:scale-95"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 sm:w-7 sm:h-7 hover:bg-gray-200 text-gray-600 flex items-center justify-center active:scale-95"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-base font-black text-brand-dark">
                      {formatPKR(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-black p-2 transition-colors active:scale-95"
                      title="Remove"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              href="/shop"
              className="text-xs font-bold text-brand-dark hover:underline flex items-center gap-1 p-1"
            >
              &larr; Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/80 shadow-sm space-y-4">
            <h3 className="font-display font-black text-lg text-brand-dark pb-3 border-b border-gray-100">
              Order Summary
            </h3>

            {/* Coupon input */}
            <div>
              {couponCode ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    Code {couponCode} (-{formatPKR(discount)})
                  </span>
                  <button onClick={removeCoupon} className="text-gray-600 underline text-xs p-1">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="w-full text-xs px-3 py-3 min-h-[44px] rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 min-h-[44px] bg-slate-950 hover:bg-black text-amber-400 text-xs font-black rounded-xl transition-colors shrink-0 active:scale-95 ring-1 ring-amber-400/30"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">{formatPKR(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Special Discount</span>
                  <span>-{formatPKR(discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="font-bold text-gray-900">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 uppercase font-black">FREE</span>
                  ) : (
                    formatPKR(shippingFee)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-950 pt-3 border-t border-gray-200">
                <span>Total Amount</span>
                <span className="text-xl text-slate-950 font-black">{formatPKR(total)}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <Link
                href="/checkout"
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-display font-black text-sm shadow-md shadow-slate-950/20 ring-1 ring-amber-400/40 transition-all active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Confirm Order on WhatsApp (Fast COD)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
