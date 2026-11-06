"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ShoppingBag,
  Truck,
  RotateCcw,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    subject: "Size & Stock Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", phone: "", subject: "Size & Stock Inquiry", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: "Where is Jan Mega Mall located in Timergara?",
      a: "Our flagship footwear showroom is situated on Rest House Road, Timergara, District Dir Lower, KPK, Pakistan. We are centrally located and open 7 days a week.",
    },
    {
      q: "Do you offer nationwide Cash on Delivery (COD)?",
      a: "Yes! We ship across Timergara, Swat, Dir Upper, Peshawar, Islamabad, Lahore, Karachi, and all cities in Pakistan. Orders above Rs. 4,999 get free shipping.",
    },
    {
      q: "Can I exchange shoes if the size doesn't fit?",
      a: "Yes, we provide a 7-day hassle-free size exchange guarantee. Message us on WhatsApp with your order details and we'll dispatch your replacement promptly.",
    },
    {
      q: "Can I order custom bespoke Kaptaan & Norozi chappals?",
      a: "Yes! We specialize in custom artisanal Peshawari chappals in custom calf and cowhide leathers, buckle designs, and orthopedic fittings. Contact our master artisan team on WhatsApp.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-16">
      {/* 1. SEAMLESS HERO SECTION (Clean luxury canvas, no awkward floating black box) */}
      <section className="relative pt-1 sm:pt-3 pb-6 sm:pb-8 lg:pb-10 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white border-b border-amber-500/10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Customer Care &amp; Store Visit</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
            Contact &amp; Visit <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              Jan Mega Mall Showroom
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions regarding shoe sizes, custom Kaptaan chappal orders, or showroom timings in Timergara? Reach out directly via WhatsApp, phone, or visit us in person.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* WhatsApp Direct */}
          <a
            href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I want to inquire about footwear at ${siteConfig.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-300/80 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group active:scale-95 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                Instant WhatsApp
              </span>
              <h3 className="font-display font-black text-base text-slate-950 mt-1">
                {siteConfig.phoneFormatted}
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Fastest response for sizing advice, orders, and custom chappal photos.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 mt-4 flex items-center gap-1 group-hover:underline">
              Chat on WhatsApp &rarr;
            </span>
          </a>

          {/* Showroom Address */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-400/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                Showroom Location
              </span>
              <h3 className="font-display font-black text-base text-slate-950 mt-1">
                Rest House Road
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Timergara, District Dir Lower, Khyber Pakhtunkhwa, Pakistan.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 mt-4">
              Flagship Footwear Store
            </span>
          </div>

          {/* Store Hours */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-400/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">
                Showroom Hours
              </span>
              <h3 className="font-display font-black text-base text-slate-950 mt-1">
                Mon - Sun Open
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Mon-Sat: 9:00 AM - 10:00 PM <br />
                Sunday: 2:00 PM - 10:00 PM
              </p>
            </div>
            <span className="text-xs font-bold text-slate-700 mt-4">
              Open 7 Days a Week
            </span>
          </div>

          {/* Nationwide Hotline */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-400/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 shadow-xs">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                COD Delivery Helpline
              </span>
              <h3 className="font-display font-black text-base text-slate-950 mt-1">
                {siteConfig.phoneInternational}
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Cash on delivery support &amp; 7-day size replacement inquiries.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 mt-4">
              Nationwide Shipping
            </span>
          </div>
        </div>
      </section>

      {/* 3. INQUIRY FORM & SHOWROOM DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-700">
                Send a Message
              </div>
              <h2 className="font-display font-black text-2xl text-slate-950 mt-1">
                Have a Question or Custom Order?
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill out the form below and our Timergara showroom team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salman Khan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-3 min-h-[46px] rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    WhatsApp Phone Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-3 min-h-[46px] rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-3 min-h-[46px] rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-amber-500 focus:bg-white font-medium"
                >
                  <option>Size &amp; Stock Inquiry</option>
                  <option>Custom Handcrafted Kaptaan Chappal</option>
                  <option>Order Delivery Status</option>
                  <option>7-Day Size Exchange Support</option>
                  <option>Wholesale &amp; Bulk Showroom Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Your Message or Shoe Requirements <span className="text-amber-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what shoe model, size, or custom request you are looking for..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                />
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been received. Our team will contact you on WhatsApp shortly.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-display font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* FAQs & Showroom Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-5">
              <h3 className="font-display font-black text-lg text-slate-950 flex items-center gap-2 pb-3 border-b border-gray-100">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-black text-slate-950">
                      {faq.q}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Quick WhatsApp Box */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white space-y-3 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black">
                <MapPin className="w-4 h-4" />
                <span>Rest House Road, Timergara, Dir Lower</span>
              </div>
              <h4 className="font-display font-black text-base text-white">
                Need Instant Help Right Now?
              </h4>
              <p className="text-xs text-gray-400">
                Chat directly with our showroom manager on WhatsApp for real shoe photos, size fitting guide, and quick COD booking.
              </p>
              <a
                href={siteConfig.getWhatsAppLink(`Assalam-o-Alaikum! I need quick help with shoes at ${siteConfig.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-xs shadow-md active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Chat with Manager on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
