"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartDrawer } from "@/components/CartDrawer";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
        <CartDrawer />
      </WishlistProvider>
    </CartProvider>
  );
};
