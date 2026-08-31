"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Phone,
  Check,
  ChevronRight,
  Share2,
  Ruler,
  X,
  CheckCircle2,
} from "lucide-react";
import { getProductBySlug, getRelatedProducts, formatPKR } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { generateWhatsAppOrderLink } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-500 mb-6">The shoe you are looking for is no longer available.</p>
        <Link
          href="/shop"
          className="px-6 py-3 bg-brand-dark text-white rounded-xl font-bold text-sm"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0] || product.thumbnail);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 41);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews" | "shipping">("desc");
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);
  const relatedProducts = getRelatedProducts(product.id, product.category);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleShare = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsAppLink = generateWhatsAppOrderLink({
    productName: product.name,
    size: selectedSize,
    color: selectedColor.name,
    price: product.price,
    total: product.price * quantity,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 pb-28 sm:pb-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 mb-4 sm:mb-6 font-semibold overflow-x-auto pb-1 whitespace-nowrap">
        <Link href="/" className="hover:text-brand-dark transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
        <Link href="/shop" className="hover:text-brand-dark transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-brand-dark transition-colors capitalize"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
        <span className="text-gray-900 font-bold truncate max-w-[180px] sm:max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start mb-12 sm:mb-16">
        {/* Left: Images Gallery */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
          <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 border border-gray-200/80 overflow-hidden shadow-sm group">
            {/* Sale Badge */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
              {product.isSale && discountPercent > 0 && (
                <span className="px-2.5 py-1 rounded-lg bg-brand-dark text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* Top Right Floating Action: Wishlist & Share */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(product);
                }}
                className={`p-2.5 rounded-xl transition-all shadow-sm active:scale-90 ${
                  isFavorite
                    ? "bg-amber-500 text-white shadow-amber-500/30"
                    : "bg-white/90 text-gray-700 hover:bg-white"
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? "fill-white text-white" : ""}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white/90 text-gray-700 hover:bg-white transition-all shadow-sm active:scale-90"
                title="Share link"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <Image
              src={selectedImage}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 95vw, 60vw"
              className="object-contain object-center p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white ${
                    selectedImage === img
                      ? "border-brand-dark ring-2 ring-gray-900/10 scale-105"
                      : "border-gray-200 hover:border-gray-300 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`View ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-500">
                {product.brand} • {product.category}
              </span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 font-bold text-xs">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-gray-400 font-normal">({product.reviewCount})</span>
              </div>
            </div>

            <h1 className="font-display font-black text-xl sm:text-3xl text-brand-dark leading-snug">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-1.5 text-xs">
              <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> In Stock ({product.stockCount} in Timergara)
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-semibold">SKU: {product.id}</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-brand-dark">
                {formatPKR(product.price)}
              </div>
              {product.originalPrice && (
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    {formatPKR(product.originalPrice)}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    Save {formatPKR(product.originalPrice - product.price)}
                  </span>
                </div>
              )}
            </div>

            <div className="text-right">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[11px] sm:text-xs block">
                Cash on Delivery
              </span>
              <span className="text-[10px] text-gray-400 mt-0.5 block">Free delivery above Rs. 4,999</span>
            </div>
          </div>

          {/* Color Selector */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-700">Select Color:</span>
              <span className="text-brand-dark">{selectedColor.name}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {product.colors.map((color) => {
                const isSelected = selectedColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-2 min-h-[42px] rounded-xl border text-xs font-bold transition-all active:scale-95 ${
                      isSelected
                        ? "border-brand-dark bg-gray-100 text-brand-dark ring-2 ring-gray-900/10"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-gray-700">Select EU Size:</span>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="font-bold text-gray-800 hover:underline flex items-center gap-1 p-0.5"
              >
                <Ruler className="w-3.5 h-3.5" /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-[44px] py-2.5 rounded-xl text-xs font-black border transition-all active:scale-95 flex items-center justify-center ${
                      isSelected
                        ? "bg-slate-950 text-amber-400 border-slate-950 ring-1 ring-amber-400/40 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-amber-400/60"
                    }`}
                  >
                    EU {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* In-Page Action Controls */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-2.5">
              {/* Quantity Stepper */}
              <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center font-bold text-gray-600 active:scale-95 text-base"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 sm:w-10 text-center font-black text-sm text-brand-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center font-bold text-gray-600 active:scale-95 text-base"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Main Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 min-h-[48px] sm:min-h-[50px] py-3 px-4 rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-display font-black text-sm shadow-lg shadow-slate-950/20 ring-1 ring-amber-400/40 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Add to Shopping Bag</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Order Button */}
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] sm:min-h-[50px] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-display font-black text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Order via WhatsApp (Quick COD)</span>
            </a>

            {copiedLink && (
              <p className="text-xs text-emerald-600 font-bold text-center animate-in fade-in">
                ✓ Product link copied to clipboard!
              </p>
            )}
          </div>

          {/* Quick Perks */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200/80">
              <Truck className="w-4 h-4 text-gray-700 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-gray-700 block">Fast COD</span>
            </div>
            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200/80">
              <RotateCcw className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-gray-700 block">7-Day Exchange</span>
            </div>
            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200/80">
              <ShieldCheck className="w-4 h-4 text-gray-700 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-gray-700 block">100% Genuine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden mb-12 sm:mb-16">
        <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("desc")}
            className={`px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
              activeTab === "desc"
                ? "border-brand-dark text-brand-dark bg-gray-50"
                : "border-transparent text-gray-600 hover:text-brand-dark"
            }`}
          >
            Description &amp; Features
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
              activeTab === "specs"
                ? "border-brand-dark text-brand-dark bg-gray-50"
                : "border-transparent text-gray-600 hover:text-brand-dark"
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
              activeTab === "reviews"
                ? "border-brand-dark text-brand-dark bg-gray-50"
                : "border-transparent text-gray-600 hover:text-brand-dark"
            }`}
          >
            Reviews ({product.reviews?.length || product.reviewCount})
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
              activeTab === "shipping"
                ? "border-brand-dark text-brand-dark bg-gray-50"
                : "border-transparent text-gray-600 hover:text-brand-dark"
            }`}
          >
            Delivery &amp; Returns
          </button>
        </div>

        <div className="p-4 sm:p-8">
          {activeTab === "desc" && (
            <div className="space-y-5 max-w-3xl">
              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-brand-dark mb-2.5">
                  Key Product Highlights:
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-brand-dark flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="max-w-2xl">
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500 font-semibold">Upper Material</span>
                  <span className="font-bold text-gray-900">{product.specs.upperMaterial}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500 font-semibold">Sole Material</span>
                  <span className="font-bold text-gray-900">{product.specs.soleMaterial}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500 font-semibold">Closure Type</span>
                  <span className="font-bold text-gray-900">{product.specs.closureType}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500 font-semibold">Weight</span>
                  <span className="font-bold text-gray-900">{product.specs.weight}</span>
                </div>
                {product.specs.origin && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-500 font-semibold">Craftsmanship / Origin</span>
                    <span className="font-bold text-gray-900">{product.specs.origin}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200/80 max-w-xl">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-black font-display text-brand-dark">
                    {product.rating.toFixed(1)}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 my-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500">Verified Customer Feedback</div>
                </div>

                <div className="sm:border-l sm:border-gray-200 sm:pl-6 text-xs text-gray-600 space-y-1">
                  <p>★ 100% of reviewers recommend this shoe</p>
                  <p>★ True to size fitting</p>
                  <p>★ Verified in-store Timergara feedback</p>
                </div>
              </div>

              <div className="space-y-3 max-w-3xl">
                {(product.reviews || []).map((rev) => (
                  <div key={rev.id} className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-gray-900">{rev.userName}</span>
                        <span className="text-[11px] text-gray-500 ml-2">({rev.userCity})</span>
                      </div>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                      {rev.verified && (
                        <span className="text-[10px] font-bold text-emerald-600 ml-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-700">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-3 max-w-2xl text-xs sm:text-sm text-gray-700 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-brand-dark" /> Delivery Policy
                </h4>
                <p className="text-xs text-gray-600">
                  Standard delivery takes 2 to 4 business days anywhere in Pakistan. Cash on Delivery (COD) is available on all orders. Free shipping is provided on carts above Rs. 4,999.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-emerald-600" /> 7-Day Size Exchange
                </h4>
                <p className="text-xs text-gray-600">
                  If the size doesn&apos;t fit perfectly, simply message us on WhatsApp. We will dispatch the replacement size promptly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-8">
            <div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-500">
                Recommendations
              </div>
              <h2 className="font-display font-black text-xl sm:text-3xl text-brand-dark mt-0.5">
                You May Also Like
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-bold text-brand-dark hover:underline"
            >
              Browse All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Single Clean Mobile Sticky Bottom Bar (Fixed on screens < sm) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-500/20 px-3.5 py-2.5 sm:hidden shadow-[0_-6px_25px_rgba(0,0,0,0.10)] flex items-center gap-2">
        <div className="min-w-0 pr-1 shrink-0">
          <div className="text-[10px] text-amber-700 font-black uppercase tracking-wider truncate">
            EU {selectedSize} • {selectedColor.name}
          </div>
          <div className="text-base font-black text-slate-950 leading-tight">
            {formatPKR(product.price * quantity)}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 px-3 min-h-[46px] rounded-xl bg-slate-950 hover:bg-black text-amber-400 font-black text-xs flex items-center justify-center gap-1.5 shadow ring-1 ring-amber-400/40 active:scale-95 transition-all"
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black">Added!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Add to Bag</span>
            </>
          )}
        </button>

        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 min-h-[46px] min-w-[46px] rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/25 active:scale-95 transition-all shrink-0"
          aria-label="Order on WhatsApp"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-gray-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-brand-dark" />
                <h3 className="font-display font-black text-lg text-brand-dark">
                  Footwear Size Conversion
                </h3>
              </div>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-brand-dark font-black">
                    <th className="p-2.5 border border-gray-200">EU Size</th>
                    <th className="p-2.5 border border-gray-200">UK Size</th>
                    <th className="p-2.5 border border-gray-200">US Men</th>
                    <th className="p-2.5 border border-gray-200">Length (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr><td className="p-2 font-bold border border-gray-100">39</td><td className="p-2 border border-gray-100">5.5</td><td className="p-2 border border-gray-100">6.5</td><td className="p-2 border border-gray-100">24.5 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">40</td><td className="p-2 border border-gray-100">6.5</td><td className="p-2 border border-gray-100">7.5</td><td className="p-2 border border-gray-100">25.0 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">41</td><td className="p-2 border border-gray-100">7.5</td><td className="p-2 border border-gray-100">8.5</td><td className="p-2 border border-gray-100">26.0 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">42</td><td className="p-2 border border-gray-100">8.0</td><td className="p-2 border border-gray-100">9.0</td><td className="p-2 border border-gray-100">26.5 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">43</td><td className="p-2 border border-gray-100">9.0</td><td className="p-2 border border-gray-100">10.0</td><td className="p-2 border border-gray-100">27.5 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">44</td><td className="p-2 border border-gray-100">9.5</td><td className="p-2 border border-gray-100">10.5</td><td className="p-2 border border-gray-100">28.0 cm</td></tr>
                  <tr><td className="p-2 font-bold border border-gray-100">45</td><td className="p-2 border border-gray-100">10.5</td><td className="p-2 border border-gray-100">11.5</td><td className="p-2 border border-gray-100">29.0 cm</td></tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setShowSizeGuide(false)}
              className="w-full py-2.5 bg-brand-dark text-white rounded-xl text-xs font-bold hover:bg-black transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
