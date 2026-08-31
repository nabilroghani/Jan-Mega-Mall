"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  CreditCard,
  Banknote,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/data/products";
import { generateWhatsAppOrderLink } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart, subtotal, shippingFee, discount, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Timergara",
    district: "Dir Lower",
    address: "",
    landmark: "",
    notes: "",
    paymentMethod: "cod",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `JMM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedId);
    setIsSubmitted(true);
  };

  const whatsAppOrderLink = generateWhatsAppOrderLink({
    items: cart.map((item) => ({
      name: item.name,
      size: item.size,
      color: item.color.name,
      qty: item.quantity,
      price: item.price,
    })),
    total,
    customerName: formData.fullName,
    customerCity: `${formData.city}, ${formData.district}`,
    customerAddress: `${formData.address} (Landmark: ${formData.landmark || "N/A"})`,
  });

  const [showInvoice, setShowInvoice] = useState(false);

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 sm:py-16 text-center">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200/80 shadow-xl space-y-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
              Order Confirmed!
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-dark mt-2">
              Thank You, {formData.fullName}!
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Your order <strong className="text-brand-dark font-mono">#{orderNumber}</strong> has been received by Jan Mega Mall Timergara.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 text-xs text-left space-y-2.5">
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping Address:</span>
              <span className="font-bold text-gray-900 text-right max-w-[200px] sm:max-w-none truncate">
                {formData.address}, {formData.city}, {formData.district}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contact Phone:</span>
              <span className="font-bold text-gray-900">{formData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method:</span>
              <span className="font-bold text-brand-dark uppercase">{formData.paymentMethod}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2.5 font-black text-sm text-brand-dark">
              <span>Total Payable:</span>
              <span className="text-brand-dark text-base">{formatPKR(total)}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={whatsAppOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>Send Order Confirmation to WhatsApp</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => setShowInvoice(true)}
                className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>📄 View / Print Invoice</span>
              </button>

              <Link
                href={`/track-order?id=${orderNumber}`}
                className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>📦 Track Order Status</span>
              </Link>
            </div>

            <Link
              href="/shop"
              onClick={() => clearCart()}
              className="inline-block text-xs font-bold text-gray-600 hover:text-black transition-colors pt-2"
            >
              &larr; Return to Shoe Store
            </Link>
          </div>
        </div>

        {/* Invoice Modal */}
        {showInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-left shadow-2xl border border-gray-200 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-amber-400/40">
                    <Image src="/logo.webp" alt="Jan Mega Mall Logo" width={40} height={40} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-base text-slate-950">JAN MEGA MALL</h3>
                    <p className="text-[10px] text-gray-500 font-medium">Rest House Road, Timergara, Dir Lower</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-slate-950">#{orderNumber}</span>
                  <p className="text-[10px] text-gray-400">Date: {new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="text-xs space-y-1 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p><strong>Customer:</strong> {formData.fullName} ({formData.phone})</p>
                <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.district}</p>
                <p><strong>Payment:</strong> {formData.paymentMethod.toUpperCase()} (Cash on Delivery)</p>
              </div>

              <div className="divide-y divide-gray-100 text-xs">
                {cart.map((item) => (
                  <div key={item.id} className="py-2 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-[10px] text-gray-500">Size: EU {item.size} • {item.color.name} • Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-brand-dark">{formatPKR(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-2 space-y-1 text-xs">
                <div className="flex justify-between text-gray-600"><span>Subtotal:</span><span>{formatPKR(subtotal)}</span></div>
                {discount > 0 && <div className="flex justify-between text-emerald-600 font-bold"><span>Discount:</span><span>-{formatPKR(discount)}</span></div>}
                <div className="flex justify-between text-gray-600"><span>Delivery:</span><span>{shippingFee === 0 ? "FREE" : formatPKR(shippingFee)}</span></div>
                <div className="flex justify-between text-sm font-black text-brand-dark pt-1 border-t border-gray-100">
                  <span>Grand Total:</span><span>{formatPKR(total)}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 bg-brand-dark hover:bg-black text-white text-xs font-bold rounded-xl transition-all"
                >
                  Print Receipt
                </button>
                <button
                  onClick={() => setShowInvoice(false)}
                  className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <h2 className="font-bold text-xl mb-3">No items in bag to checkout</h2>
        <Link href="/shop" className="text-xs font-bold text-brand-dark hover:underline">
          Go to catalog &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-dark">
          Checkout & Shipping
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Fast Cash on Delivery across Pakistan. Zero upfront payment required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-4">
            <h2 className="font-display font-black text-base text-slate-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 text-xs flex items-center justify-center font-black">
                1
              </span>
              Contact Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Full Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Muhammad Bilal"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Phone Number (WhatsApp) <span className="text-gray-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="0300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-4">
            <h2 className="font-display font-black text-base text-slate-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 text-xs flex items-center justify-center font-black">
                2
              </span>
              Shipping Address (Pakistan)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  City / Town <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Timergara / Swat / Peshawar"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  District / Province <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  required
                  placeholder="e.g. Dir Lower, KPK"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Complete Street / House Address <span className="text-gray-400">*</span>
                </label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  placeholder="House / Shop #, Street, Mohalla / Road..."
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Famous Landmark / Instructions
                </label>
                <input
                  type="text"
                  name="landmark"
                  placeholder="Near Rest House / DHQ Hospital..."
                  value={formData.landmark}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-dark focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-4">
            <h2 className="font-display font-black text-base text-slate-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 ring-1 ring-amber-400/40 text-xs flex items-center justify-center font-black">
                3
              </span>
              Payment Method
            </h2>

            <div className="space-y-3">
              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  formData.paymentMethod === "cod"
                    ? "border-amber-500 bg-amber-50/40 ring-1 ring-amber-400"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="mt-1 accent-amber-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm text-slate-950 flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-emerald-600" /> Cash on Delivery (COD)
                    </span>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Standard
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Pay with cash when the courier delivers your shoes.
                  </p>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  formData.paymentMethod === "jazzcash"
                    ? "border-amber-500 bg-amber-50/40 ring-1 ring-amber-400"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="jazzcash"
                  checked={formData.paymentMethod === "jazzcash"}
                  onChange={handleChange}
                  className="mt-1 accent-amber-500"
                />
                <div className="flex-1">
                  <span className="font-black text-sm text-slate-950 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-amber-600" /> JazzCash / EasyPaisa / Bank Transfer
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Pay via mobile wallet or bank transfer. Account details will be sent after order.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-4 sticky top-28">
            <h3 className="font-display font-black text-lg text-slate-950 pb-3 border-b border-gray-100">
              Your Order ({cart.length} items)
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 divide-y divide-gray-50">
              {cart.map((item) => (
                <div key={item.id} className="pt-2 flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-slate-950 text-amber-400 text-[10px] font-black rounded-full flex items-center justify-center ring-1 ring-amber-400/40">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-black text-slate-950 truncate">{item.name}</div>
                    <div className="text-[11px] text-gray-500">
                      Size: EU {item.size} • {item.color.name}
                    </div>
                  </div>
                  <div className="text-xs font-black text-slate-950">
                    {formatPKR(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs text-gray-600 pt-3 border-t border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">{formatPKR(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discount</span>
                  <span>-{formatPKR(discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-bold text-gray-900">
                  {shippingFee === 0 ? <span className="text-emerald-600 font-black">FREE</span> : formatPKR(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-950 pt-2 border-t border-gray-200">
                <span>Total Amount</span>
                <span className="text-xl text-slate-950 font-black">{formatPKR(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-display font-black text-sm shadow-xl shadow-slate-950/20 ring-1 ring-amber-400/40 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Confirm & Place Order (COD)</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

            <div className="pt-2 text-[11px] text-gray-400 space-y-1 text-center font-medium">
              <p className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Guaranteed Genuine Jan Mega Mall Footwear
              </p>
              <p>📍 Rest House Road, Timergara, Dir Lower</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
