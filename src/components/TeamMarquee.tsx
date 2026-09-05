"use client";

import { useState } from "react";
import Image from "next/image";

interface Member {
  title: string;
  badge: string;
  division: string;
  image: string;
}

const members: Member[] = [
  {
    title: "Ketua Kelompok",
    badge: "Ketua",
    division: "Koordinator Tim",
    image: "/Foto Anggota/Ketua Kelompok.jpeg",
  },
  {
    title: "Sekretaris",
    badge: "Sekretaris",
    division: "Administrasi",
    image: "/Foto Anggota/Sekertaris.jpeg",
  },
  {
    title: "Bendahara",
    badge: "Bendahara",
    division: "Keuangan",
    image: "/Foto Anggota/Bendahara.jpeg",
  },
  {
    title: "Ketua Divisi Acara",
    badge: "Ketua Acara",
    division: "Divisi Acara",
    image: "/Foto Anggota/Ketua Acara.jpeg",
  },
  {
    title: "Anggota Divisi Acara",
    badge: "Anggota Acara",
    division: "Divisi Acara",
    image: "/Foto Anggota/Anggota Acara 1.jpeg",
  },
  {
    title: "Anggota Divisi Acara",
    badge: "Anggota Acara",
    division: "Divisi Acara",
    image: "/Foto Anggota/Anggota Acara 2.jpeg",
  },
  {
    title: "Anggota Divisi Acara",
    badge: "Anggota Acara",
    division: "Divisi Acara",
    image: "/Foto Anggota/Anggota Acara 3.jpeg",
  },
  {
    title: "Ketua Divisi Humas",
    badge: "Ketua Humas",
    division: "Divisi Humas",
    image: "/Foto Anggota/Ketua Humas.jpeg",
  },
  {
    title: "Anggota Divisi Humas",
    badge: "Anggota Humas",
    division: "Divisi Humas",
    image: "/Foto Anggota/Anggota Humas 1.jpeg",
  },
  {
    title: "Anggota Divisi Humas",
    badge: "Anggota Humas",
    division: "Divisi Humas",
    image: "/Foto Anggota/Anggota Humas 2.jpeg",
  },
  {
    title: "Anggota Divisi Humas",
    badge: "Anggota Humas",
    division: "Divisi Humas",
    image: "/Foto Anggota/Anggota Humas 3.jpeg",
  },
  {
    title: "Ketua Divisi PDD",
    badge: "Ketua PDD",
    division: "Divisi PDD",
    image: "/Foto Anggota/Ketua PDD.jpeg",
  },
  {
    title: "Anggota Divisi PDD",
    badge: "Anggota PDD",
    division: "Divisi PDD",
    image: "/Foto Anggota/Anggota PDD 1.jpeg",
  },
  {
    title: "Anggota Divisi PDD",
    badge: "Anggota PDD",
    division: "Divisi PDD",
    image: "/Foto Anggota/Anggota PDD 2.jpeg",
  },
  {
    title: "Anggota Divisi PDD",
    badge: "Anggota PDD",
    division: "Divisi PDD",
    image: "/Foto Anggota/Anggota PDD 3.jpeg",
  },
];

export default function TeamMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicating the list to achieve an infinite seamless continuous marquee loop
  const marqueeItems = [...members, ...members];

  return (
    <div className="w-full relative mt-4">
      {/* Header Info Tag (Black & White) */}
      <div className="flex items-center justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-black/70 border border-white/20 text-white backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Tim & Anggota Organisasi & Pendamping RW 4, 7, 14
        </span>
      </div>

      {/* Marquee Wrapper with Dark Edge Fade Gradients */}
      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-28 md:w-36 z-20 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Running Track */}
        <div
          className="marquee-track animate-team-marquee flex w-max"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="w-48 sm:w-56 h-72 sm:h-80 mx-3 sm:mx-4 relative rounded-2xl overflow-hidden group cursor-pointer border border-white/15 hover:border-white/50 bg-black/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-1.5 flex-shrink-0"
            >
              {/* Member Photo: Centered on the person's body (cuts out empty ceiling headroom) */}
              <Image
                src={encodeURI(item.image)}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover object-[center_62%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Department Badge Top Left (Exact Real Position, No BPH) */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-md shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Compact bottom gradient overlay so torso & hands remain visible */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none transition-opacity duration-300" />

              {/* Text Information at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-3.5 sm:p-4 z-10 flex flex-col justify-end">
                <h3 className="text-white text-sm sm:text-base font-bold tracking-tight leading-snug group-hover:text-slate-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5 font-light">
                  {item.division}
                </p>
              </div>

              {/* Glowing highlight bar at bottom (Black & White monochrome) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-36 z-20 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>
    </div>
  );
}
