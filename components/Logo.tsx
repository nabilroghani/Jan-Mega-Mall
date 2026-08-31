import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showText = true,
  size = "md",
  className = "",
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const imageSizes = {
    sm: 36,
    md: 44,
    lg: 64,
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Official Gold & Obsidian Circular Coin Emblem */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 ring-1 ring-amber-400/40`}>
        <Image
          src="/logo.webp"
          alt="Jan Mega Mall Logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div
            className={`font-display font-black tracking-tight text-base sm:text-lg leading-none flex items-center gap-1 ${
              isLight ? "text-white" : "text-slate-950"
            }`}
          >
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              JAN
            </span>
            <span>MEGA MALL</span>
          </div>
          <span
            className={`text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.22em] font-black mt-0.5 ${
              isLight ? "text-amber-400/90" : "text-amber-700"
            }`}
          >
            Timergara • Footwear
          </span>
        </div>
      )}
    </Link>
  );
};
