import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { siteConfig } from "@/lib/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0f19",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://janmegamall.pk"),
  title: {
    default: "Jan Mega Mall | Premier Luxury Footwear in Timergara, Dir Lower",
    template: "%s | Jan Mega Mall Timergara",
  },
  description:
    "Discover handcrafted genuine leather Kaptaan & Norozi chappals, high-speed athletic sneakers, executive formal shoes, and women's footwear at Jan Mega Mall, Rest House Road, Timergara. Free Cash on Delivery across Pakistan.",
  keywords: [
    "Jan Mega Mall",
    "Jan Mega Mall Timergara",
    "Shoe store Timergara",
    "Kaptaan chappal Dir Lower",
    "Peshawari chappal Timergara",
    "Sneakers Pakistan",
    "Footwear KPK",
    "Buy shoes online Pakistan",
    "Running shoes Dir Lower",
  ],
  authors: [{ name: "Jan Mega Mall", url: "https://janmegamall.pk" }],
  creator: "Jan Mega Mall Timergara",
  publisher: "Jan Mega Mall",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/logo.webp", sizes: "192x192", type: "image/webp" },
      { url: "/logo.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [{ url: "/logo.webp", sizes: "180x180", type: "image/webp" }],
    shortcut: ["/logo.webp"],
  },
  openGraph: {
    title: "Jan Mega Mall | Premier Luxury Footwear in Timergara, Dir Lower",
    description:
      "Handcrafted genuine leather Kaptaan chappals, high-speed athletic runners & executive dress shoes on Rest House Road, Timergara. Free nationwide Cash on Delivery.",
    url: "https://janmegamall.pk",
    siteName: "Jan Mega Mall",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1024,
        height: 1024,
        alt: "Jan Mega Mall Timergara Luxury Footwear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Mega Mall | Luxury Footwear Store in Timergara, Dir Lower",
    description:
      "Handcrafted Kaptaan chappals & athletic sneakers on Rest House Road, Timergara. Free nationwide COD.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ShoeStore",
  name: "Jan Mega Mall",
  image: "https://janmegamall.pk/logo.webp",
  description:
    "Timergara's premier footwear showroom featuring handcrafted leather Kaptaan chappals, athletic sneakers, and formal shoes with nationwide Cash on Delivery in Pakistan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rest House Road",
    addressLocality: "Timergara",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "34.8286",
    longitude: "71.8407",
  },
  url: "https://janmegamall.pk",
  telephone: siteConfig.phoneInternational,
  priceRange: "PKR 1500 - PKR 15000",
  paymentAccepted: "Cash on Delivery, JazzCash, EasyPaisa, Bank Transfer",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "14:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-brand-surface text-brand-dark selection:bg-amber-500 selection:text-slate-950 pb-14 sm:pb-0">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomNav />
          <WhatsAppFloating />
        </Providers>
      </body>
    </html>
  );
}
