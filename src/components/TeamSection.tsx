"use client";

import TeamMarquee from "@/components/TeamMarquee";

export default function TeamSection() {
  return (
    <section
      id="tim-kami"
      className="relative w-full bg-zinc-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Tim & Anggota Organisasi
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
          Tim Pendamping RW 4, 7 & 14
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Para mahasiswa KKN Kelompok 2 Universitas Komputer Indonesia yang berdedikasi mengedukasi dan mendampingi warga Kelurahan Lebak Gede dalam tata kelola sampah terpilah.
        </p>
      </div>

      <TeamMarquee />
    </section>
  );
}
