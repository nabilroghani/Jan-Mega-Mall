"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Package,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Phone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { formatPKR } from "@/data/products";
import { siteConfig } from "@/lib/siteConfig";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || "";

  const [orderQuery, setOrderQuery] = useState(initialId);
  const [searched, setSearched] = useState(Boolean(initialId));
  const [orderData, setOrderData] = useState<any>(null);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!orderQuery.trim()) return;

    // Simulate instant demo order lookup
    const id = orderQuery.toUpperCase().startsWith("JMM-")
      ? orderQuery.toUpperCase()
      : `JMM-${orderQuery}`;

    setOrderData({
      id,
      date: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      customer: "Muhammad Bilal",
      phone: "0300 ••••567",
      destination: "Timergara / Dir Lower, KPK",
      courier: "TCS Express & Jan Express Dispatch",
      status: "In Transit",
      expectedDelivery: "Within 24-48 Hours",
      items: [
        { name: "Executive Kaptaan Chappal (Double Sole)", size: "42", color: "Mustard Camel", price: 6499 },
      ],
      total: 6499,
      steps: [
        {
          title: "Order Placed & Confirmed",
          time: "Today, 10:30 AM",
          desc: "Order received and verified for Cash on Delivery.",
          done: true,
        },
        {
          title: "Packed at Timergara Flagship Showroom",
          time: "Today, 12:15 PM",
          desc: "Rest House Road showroom quality checked the footwear.",
          done: true,
        },
        {
          title: "Dispatched via Courier",
          time: "Today, 02:40 PM",
          desc: "Parcel handed over to courier for transit.",
          done: true,
          current: true,
        },
        {
          title: "Out for Delivery",
          time: "Estimated Tomorrow",
          desc: "Rider will call your phone before arriving.",
          done: false,
        },
        {
          title: "Delivered & Cash Collected",
          time: "Pending",
          desc: "Cash on delivery payment at your doorstep.",
          done: false,
        },
      ],
    });
    setSearched(true);
  };

  useEffect(() => {
    if (initialId) {
      handleSearch();
    }
  }, [initialId]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 pb-28 sm:pb-16 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          <span>Real-time Courier Dispatch</span>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-brand-dark">
          Track Your Shoe Parcel
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Enter your Order ID (e.g. <span className="font-mono font-bold text-gray-700">JMM-492019</span>) or registered phone number to check live delivery status.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="max-w-lg mx-auto">
        <div className="relative flex items-center shadow-lg rounded-2xl bg-white border border-gray-200/90 overflow-hidden focus-within:border-brand-dark">
          <input
            type="text"
            placeholder="Enter Order ID (e.g. JMM-102938) or Phone..."
            value={orderQuery}
            onChange={(e) => setOrderQuery(e.target.value)}
            className="w-full py-3.5 pl-4 pr-28 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1.5 py-2.5 px-4 bg-brand-dark hover:bg-black text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track</span>
          </button>
        </div>
      </form>

      {/* Results View */}
      {searched && orderData && (
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
          {/* Order Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase">
                  {orderData.status}
                </span>
                <span className="text-xs font-mono font-bold text-gray-400">
                  #{orderData.id}
                </span>
              </div>
              <h2 className="font-display font-black text-lg sm:text-xl text-brand-dark mt-1">
                Estimated Delivery: {orderData.expectedDelivery}
              </h2>
            </div>

            <a
              href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I want to inquire about my Order ${orderData.id}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-6 pt-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
              Tracking Milestones
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {orderData.steps.map((step: any, idx: number) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step.done
                        ? "bg-emerald-600 text-white shadow-sm ring-4 ring-emerald-50"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.done ? "✓" : idx + 1}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                      <span className="font-bold text-sm text-gray-900">
                        {step.title}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Footer */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-gray-400 block font-semibold">Delivery Location</span>
              <span className="font-bold text-gray-800">{orderData.destination}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-semibold">Courier Partner</span>
              <span className="font-bold text-gray-800">{orderData.courier}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-semibold">Payment on Delivery</span>
              <span className="font-black text-brand-dark">{formatPKR(orderData.total)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Support Info Card */}
      <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-dark/5 text-brand-dark flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-900">Need Immediate Help with Order?</h4>
            <p className="text-xs text-gray-500">
              Our Timergara showroom team is available 9:00 AM – 10:00 PM daily.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-bold text-xs text-center transition-all"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-400">Loading tracking engine...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
