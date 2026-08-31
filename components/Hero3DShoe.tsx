"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { RotateCw, ArrowRight } from "lucide-react";
import { formatPKR } from "@/data/products";

// 50-frame 360deg sequence — transparent background, video-smooth rotation
const TOTAL_FRAMES = 50;
const FRAMES = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const n = String(i + 1).padStart(3, "0");
  return `/img/ezgif-frame-${n}_no_bg.webp`;
});

const PX_PER_FRAME = 10;   // px of horizontal drag per frame (lower = faster)
const AUTO_FPS    = 8;     // auto-spin fps — 8fps = ~6s per full rotation
const AUTO_MS     = Math.round(1000 / AUTO_FPS);

export const Hero3DShoe = () => {
  const [frameIdx, setFrameIdx]         = useState(0);
  const [isDragging, setIsDragging]     = useState(false);
  const [isAutoSpinning, setIsSpinning] = useState(true);
  const [loaded, setLoaded]             = useState(false);

  const autoRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX  = useRef(0);
  const dragStartF  = useRef(0);
  const loadedCount = useRef(0);

  // Pre-load all 50 frames into browser memory for instant swaps
  useEffect(() => {
    let cancelled = false;
    loadedCount.current = 0;
    FRAMES.forEach(src => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (cancelled) return;
        loadedCount.current += 1;
        if (loadedCount.current >= TOTAL_FRAMES) setLoaded(true);
      };
      // Count broken images too so we don't hang
      img.onerror = () => {
        if (cancelled) return;
        loadedCount.current += 1;
        if (loadedCount.current >= TOTAL_FRAMES) setLoaded(true);
      };
    });
    return () => { cancelled = true; };
  }, []);

  // Auto-spin
  useEffect(() => {
    if (isAutoSpinning && loaded) {
      autoRef.current = setInterval(() => {
        setFrameIdx(prev => (prev + 1) % TOTAL_FRAMES);
      }, AUTO_MS);
    } else {
      if (autoRef.current) clearInterval(autoRef.current);
    }
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [isAutoSpinning, loaded]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    setIsSpinning(false);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartF.current = frameIdx;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, [frameIdx]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx    = e.clientX - dragStartX.current;
    const delta = -Math.round(dx / PX_PER_FRAME);
    const next  = ((dragStartF.current + delta) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
    setFrameIdx(next);
  }, [isDragging]);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch {}
  }, []);

  const resetSpin = () => { setFrameIdx(0); setIsSpinning(true); };

  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none">

      {/* ── Stage ── */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`relative w-full aspect-[3/2] md:aspect-[4/3] max-h-[360px] flex items-center justify-center overflow-visible ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "none" }}
      >
        {/* Subtle radial glow under shoe */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 70%, rgba(245,158,11,0.13) 0%, transparent 65%)",
          }}
        />

        {/* Soft floor shadow */}
        <div
          className="absolute bottom-[6%] left-1/2 pointer-events-none"
          style={{
            width: "55%",
            height: "22px",
            transform: "translateX(-50%) scaleY(0.35)",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.22) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Loading spinner */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
            <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs text-slate-400 font-semibold">Loading 360° view…</span>
          </div>
        )}

        {/* Active frame — single img, src swapped for instant render */}
        {loaded && (
          <img
            src={FRAMES[frameIdx]}
            alt="360deg shoe view"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 24px 36px rgba(0,0,0,0.28)) drop-shadow(0 6px 16px rgba(245,158,11,0.10))",
              willChange: "contents",
              imageRendering: "auto",
            }}
            draggable={false}
          />
        )}

        {/* 360° badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/65 text-white text-[11px] font-black tracking-wider backdrop-blur-sm">
          <RotateCw className="w-3 h-3 text-orange-400" />
          360°
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="mt-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
          <RotateCw
            className={`w-3.5 h-3.5 text-orange-500 ${isAutoSpinning || isDragging ? "animate-spin" : ""}`}
            style={isAutoSpinning ? { animationDuration: "1.5s" } : {}}
          />
          <span>
            {!loaded
              ? "Loading frames…"
              : isAutoSpinning
              ? "Auto-spinning — drag to control"
              : isDragging
              ? "Rotating…"
              : "← Drag to rotate →"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {!isAutoSpinning && (
            <button
              type="button"
              onClick={resetSpin}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Resume auto-spin"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          )}
          <Link
            href="/product/air-velocity-pro-runner"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-black text-xs shadow transition-all active:scale-95 group"
          >
            <span>{formatPKR(6499)}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
