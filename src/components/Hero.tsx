"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll to adapt floating navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Tantangan TPA", href: "#tantangan" },
    { label: "Gerakan 3R", href: "#section-3r" },
    { label: "Katalog Sampah", href: "#katalog-sampah" },
    { label: "Dukungan QRIS", href: "#donasi" },
    { label: "Media Sosial", href: "#media-sosial" },
    { label: "Tim Kami", href: "#tim-kami" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white pb-16 pt-24 sm:pt-28 overflow-x-clip">
      {/* Background Image: High-Resolution 4207x2405 with Next.js Image fill */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Gedung DPR/MPR RI Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Lighter cinematic overlay so background image is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Navigation (Fixed Floating Navbar - Follows on Scroll) */}
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between border ${
            isScrolled
              ? "border-white/20 bg-black/80 shadow-2xl backdrop-blur-xl py-2 sm:py-2.5"
              : "border-slate-700/80 bg-black/55 shadow-lg backdrop-blur-md py-2.5 sm:py-3"
          } px-5 rounded-full text-white text-sm max-w-6xl w-full shadow-black/40 transition-all duration-300`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/40 p-1 group-hover:scale-105 transition-transform duration-300 shadow-md shadow-black/50 shrink-0">
              <Image
                src="/logo.svg"
                alt="Logo KKN Lebak Gede 2"
                width={44}
                height={44}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-base tracking-wide hidden sm:inline-block">KKN Lebak Gede 2</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="#kontak"
              className="border border-white/20 hover:border-white/40 hover:bg-white/10 px-4 py-2 rounded-full text-xs xl:text-sm font-medium transition duration-200 cursor-pointer text-slate-200 hover:text-white"
            >
              Hubungi Kami
            </a>
            <a
              href="#scan-sampah"
              className="flex items-center gap-1.5 bg-white hover:bg-slate-200 active:scale-95 text-black px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition duration-200 cursor-pointer shadow-md shadow-white/20"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
              <span>Pilah Sampah</span>
            </a>
          </div>

          {/* Mobile Menu Button - iOS Optimized Touch Target */}
          <button
            id="menuToggle"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-slate-300 hover:text-white p-2.5 -mr-1.5 rounded-full hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all touch-manipulation focus:outline-none"
            aria-label="Buka Menu Navigasi"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar Panel - Slides from Right */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[82vw] max-w-xs bg-zinc-950 border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out z-10 overflow-y-auto no-scrollbar ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top: Header & Nav Links */}
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-white/40 p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/logo.svg"
                    alt="Logo KKN Lebak Gede 2"
                    width={36}
                    height={36}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-semibold text-sm text-white block leading-tight">KKN Lebak Gede 2</span>
                  <span className="text-[10px] text-slate-400 font-mono">Kelurahan Lebak Gede</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white p-2 -mr-1.5 rounded-full hover:bg-white/10 active:bg-white/20 active:scale-95 transition touch-manipulation focus:outline-none"
                aria-label="Tutup Menu Navigasi"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1.5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                >
                  <span>{link.label}</span>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom: Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#scan-sampah"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl text-sm font-semibold hover:bg-slate-200 active:scale-95 transition shadow-lg shadow-white/10"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
              <span>Pilah Sampah AI</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center border border-white/20 hover:border-white/40 hover:bg-white/10 py-3 rounded-xl text-sm font-medium transition text-white active:scale-95"
            >
              Hubungi Pengurus
            </a>
          </div>
        </div>
      </div>

      {/* Main Hero Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto py-12 md:py-20">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2.5 border border-white/20 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-xs sm:text-sm hover:border-white/40 transition shadow-sm mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-slate-200">Gerakan Kolaborasi KKN Kelompok 2 UNIKOM</p>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl bg-gradient-to-r from-white via-slate-100 to-slate-400 text-transparent bg-clip-text leading-tight drop-shadow-md">
          Lebak Gede Bisa Jaya, Bersih Resik
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mt-5 leading-relaxed font-light drop-shadow">
          Kolaborasi aktif warga dan pengurus RW 04, RW 07, dan RW 14 mewujudkan lingkungan yang asri, sehat, dan mandiri dengan pemilahan sampah bijak dari rumah.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 text-sm font-medium w-full max-w-md">
          <a
            href="#scan-sampah"
            className="px-6 py-3.5 bg-white text-black hover:bg-slate-200 active:scale-95 transition rounded-full font-semibold shadow-lg shadow-white/20 cursor-pointer text-center"
          >
            Mulai Pilah Sampah
          </a>
          <a
            href="#tantangan"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 backdrop-blur-md rounded-full px-6 py-3.5 transition cursor-pointer text-white font-medium text-center"
          >
            <span>Pelajari Tantangan</span>
            <svg
              className="mt-0.5"
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25.5 4.75 4l-3.5 3.5"
                stroke="currentColor"
                strokeOpacity=".7"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}