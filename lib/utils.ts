import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "./siteConfig";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export function generateWhatsAppOrderLink(params: {
  productName?: string;
  size?: number;
  color?: string;
  price?: number;
  total?: number;
  items?: { name: string; size: number; color: string; qty: number; price: number }[];
  customerName?: string;
  customerCity?: string;
  customerAddress?: string;
}): string {
  let message = `*${siteConfig.name} - New Order Inquiry*\n📍 Store: ${siteConfig.location.shortAddress}, ${siteConfig.location.district}\n--------------------------------\n`;

  if (params.items && params.items.length > 0) {
    message += `*Order Items:*\n`;
    params.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n   - Size: EU ${item.size}\n   - Color: ${item.color}\n   - Qty: ${item.qty} x Rs. ${item.price.toLocaleString()}\n`;
    });
    if (params.total) {
      message += `\n*Total Amount:* Rs. ${params.total.toLocaleString()} (Cash on Delivery)\n`;
    }
  } else if (params.productName) {
    message += `*Product:* ${params.productName}\n*Size:* EU ${params.size || "N/A"}\n*Color:* ${params.color || "Standard"}\n*Price:* Rs. ${params.price?.toLocaleString()}\n`;
  }

  if (params.customerName) {
    message += `--------------------------------\n*Customer Details:*\nName: ${params.customerName}\nCity: ${params.customerCity || siteConfig.location.city}\nAddress: ${params.customerAddress || ""}\n`;
  }

  message += `\nPlease confirm my order. Thank you!`;

  return siteConfig.getWhatsAppLink(message);
}
