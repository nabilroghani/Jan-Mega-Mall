"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product, ShoeColorVariant } from "@/types";

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, size: number, color: ShoeColorVariant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 4999;
const STANDARD_SHIPPING_FEE = 250;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("jmm_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load cart from storage", e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("jmm_cart", JSON.stringify(cart));
      } catch (e) {
        console.error("Failed to save cart to storage", e);
      }
    }
  }, [cart, isHydrated]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (
    product: Product,
    size: number,
    color: ShoeColorVariant,
    quantity = 1
  ) => {
    const itemId = `${product.id}-${size}-${color.name.toLowerCase().replace(/\s+/g, "-")}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = Math.min(
          updated[existingIndex].quantity + quantity,
          product.stockCount || 99
        );
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: itemId,
          productId: product.id,
          name: product.name,
          slug: product.slug,
          brand: product.brand,
          category: product.category,
          price: product.price,
          originalPrice: product.originalPrice,
          size,
          color,
          image: product.images[0] || product.thumbnail,
          quantity,
          maxStock: product.stockCount || 99,
        };
        return [newItem, ...prev];
      }
    });

    setIsOpen(true);
  };

  const removeItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: Math.min(newQuantity, item.maxStock),
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode("");
    setDiscountPercent(0);
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "TIMERGARA10" || cleanCode === "JAN10") {
      setCouponCode(cleanCode);
      setDiscountPercent(10);
      return { success: true, message: "10% Special Discount applied!" };
    }
    if (cleanCode === "EID500") {
      setCouponCode(cleanCode);
      setDiscountPercent(15);
      return { success: true, message: "15% Festive discount applied!" };
    }
    return { success: false, message: "Invalid promo code. Try 'JAN10' or 'TIMERGARA10'" };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountPercent(0);
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const total = Math.max(0, subtotal - discount + shippingFee);

  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        shippingFee,
        discount,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingProgress,
        couponCode,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
