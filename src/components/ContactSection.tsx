"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactItem {
  name: string;
  role: string;
  organization: string;
  badge: string;
  phone: string;
  waNumber: string;
  message?: string;
  description: string;
}

const contacts: ContactItem[] = [
  {
    organization: "Kelompok 2 Lebak Gede",
    name: "Tim Pendamping KKN",
    role: "Pusat Informasi & Edukasi Pemilahan",
    badge: "Koordinator Utama",
    phone: "+62 813-9478-4696",
    waNumber: "6281394784696",
    message: "Halo Kelompok 2 Lebak Gede, saya ingin bertanya seputar informasi dan edukasi pemilahan sampah.",
    description: "Layanan konsultasi seputar jenis sampah, panduan pemilahan 3R, serta kegiatan edukasi warga Lebak Gede.",
  },
  {
    organization: "Gaslah RW 04",
    name: "Pak Asep Rachmat",
    role: "Petugas Gaslah RW 04",
    badge: "Koordinasi RW 04",
    phone: "+62 831-4647-5623",
    waNumber: "6283146475623",
    message: "Halo Pak Asep Rachmat (Gaslah RW 04), saya warga ingin menanyakan jadwal pengangkutan sampah terpilah.",
    description: "Layanan koordinasi jadwal penjemputan dan pengangkutan sampah terpilah Gaslah untuk lingkungan wilayah RW 04.",
  },
  {
    organization: "Pengurus Wilayah RW 07",
    name: "Pak Wawan",
    role: "Pengurus Wilayah RW 07",
    badge: "Koordinasi RW 07",
    phone: "+62 812-2089-9271",
    waNumber: "6281220899271",
    message: "Halo Pak Wawan, saya warga ingin berkoordinasi terkait pengelolaan dan kebersihan lingkungan RW 07.",
    description: "Koordinasi kebersihan lingkungan, jadwal pengangkutan sampah lokal, serta sinergi warga di lingkungan RW 07.",
  },
  {
    organization: "Pengurus Wilayah RW 14",
    name: "Pak Asep Mulyana",
    role: "Pengurus Wilayah RW 14",
    badge: "Koordinasi RW 14",
    phone: "+62 877-3736-5137",
    waNumber: "6287737365137",
    message: "Halo Pak Asep Mulyana, saya warga ingin berkoordinasi mengenai kebersihan dan pengangkutan sampah RW 14.",
    description: "Pusat koordinasi penanganan sampah, penertiban TPS wilayah, dan kesiapan pengangkutan terpilah di lingkungan RW 14.",
  },
];

export default function ContactSection() {
  const [isQrisModalOpen, setIsQrisModalOpen] = useState(false);

  return (
    <section
      id="kontak"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-800 shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Pusat Kontak & Koordinasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Hubungi Pengurus & Pendamping Wilayah
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Butuh informasi jadwal pengangkutan sampah terpilah, program Gaslah, atau koordinasi penanganan kebersihan di wilayah Anda?
            Silakan hubungi kontak narahubung resmi di bawah ini via WhatsApp atau telepon.
          </p>
        </div>

        {/* Contact Cards Grid - Slide di Mobile, Grid 2 di Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 md:overflow-visible no-scrollbar mb-16">
          {contacts.map((contact, index) => {
            const waUrl = `https://wa.me/${contact.waNumber}?text=${encodeURIComponent(
              contact.message || "Halo, saya ingin bertanya seputar penanganan sampah."
            )}`;

            return (
              <div
                key={index}
                className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-slate-300 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Organization & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                        {contact.organization}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-emerald-600 transition-colors">
                        {contact.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">{contact.role}</p>
                    </div>

                    {/* Badge */}
                    <span className="shrink-0 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm">
                      {contact.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {contact.description}
                  </p>
                </div>

                {/* Contact Action Bar */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {/* Phone Number Display */}
                  <div className="flex items-center gap-2 text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <svg
                        className="w-4 h-4 fill-none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="font-mono text-sm font-semibold tracking-wide text-slate-800">
                      {contact.phone}
                    </span>
                  </div>

                  {/* WhatsApp Direct Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-slate-900/10 cursor-pointer shrink-0"
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-4 h-4 fill-current text-emerald-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Hubungi WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated QRIS Support Section */}
        <div
          id="donasi"
          className="relative w-full bg-gradient-to-br from-slate-950 via-zinc-900 to-black text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/15 mb-16 overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content: Description, Objectives & Merchant Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Dukungan & Partisipasi Nyata Warga
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                  Dukung Aksi Nyata & Pengelolaan Sampah Lebak Gede
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Setiap partisipasi dan dukungan dana Anda disalurkan secara terarah untuk realisasi program lingkungan berkelanjutan di RW 04, RW 07, dan RW 14: pengadaan mesin bor kompos, kandang ayam pemanfaatan sampah organik, kebun tanaman produktif, serta armada transportasi kebersihan wilayah.
                </p>

                {/* 3 Program Utama Alokasi Dana */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {/* Program 1: Mesin Bor Kompos RW 7 & 14 */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-start hover:border-emerald-500/40 transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-emerald-400 text-base">⚙️</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        RW 07 & RW 14
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Mesin Bor Kompos</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Pembelian mesin bor lubang biopori & pengolahan kompos organik warga.
                    </p>
                  </div>

                  {/* Program 2: Kandang Ayam RW 04 */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-start hover:border-amber-500/40 transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-amber-400 text-base">🐔</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        RW 04
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Kandang Ayam Terpadu</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Pembuatan kandang ayam pemanfaatan sisa makanan organik rumah tangga.
                    </p>
                  </div>

                  {/* Program 3: Area Tanaman Hijau RW 14 */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-start hover:border-blue-500/40 transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-blue-400 text-base">🌿</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        RW 14
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Area Tanaman Hijau</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Pembuatan & penataan kebun tanaman produktif dari pupuk kompos lokal.
                    </p>
                  </div>
                </div>

                {/* Merchant Verified Information */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide block">Nama Penerima / Merchant Resmi:</span>
                    <strong className="text-white text-sm font-semibold tracking-wide">
                      SUBHAN KURNIA ROHMAN, TRANSPORTASI
                    </strong>
                    <span className="text-slate-400 block font-mono text-[11px] mt-0.5">
                      NMID: <span className="text-emerald-400 font-semibold">ID1025382504567</span> • A01
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-[11px] shrink-0 border border-emerald-500/30">
                    QRIS Standar Nasional
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsQrisModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-slate-200 active:scale-95 font-semibold text-xs sm:text-sm transition shadow-lg shadow-white/10 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>Perbesar / Scan QRIS</span>
                </button>

                <a
                  href="/qris-donasi.png"
                  download="QRIS-Donasi-Lebak-Gede.png"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 active:scale-95 font-semibold text-xs sm:text-sm transition text-white cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Gambar</span>
                </a>

                <a
                  href="https://wa.me/6281394784696?text=Halo%20Tim%20KKN%20Lebak%20Gede,%20saya%20sudah%20melakukan%20donasi/dukungan%20via%20QRIS%20untuk%20operasional%20pengelolaan%20sampah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition py-2 px-3"
                >
                  <span>Konfirmasi via WA →</span>
                </a>
              </div>
            </div>

            {/* Right Content: Framed QRIS Card Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={() => setIsQrisModalOpen(true)}
                className="group relative bg-white text-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-white/20 max-w-[290px] sm:max-w-[310px] w-full cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                {/* Click to Zoom Hover Overlay Banner */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center z-20 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Klik untuk Memperbesar</span>
                  <span className="text-xs text-slate-300 mt-1">Bisa di-screenshot untuk bayar via m-Banking</span>
                </div>

                {/* QRIS Image */}
                <div className="relative w-full aspect-[3/4.2] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/qris-donasi.png"
                    alt="QRIS Subhan Kurnia Rohman Transportasi"
                    fill
                    unoptimized
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Mini Footer on Card */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-700">Semua m-Banking & e-Wallet</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Aktif
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-3 text-center">
                Scan langsung menggunakan camera e-wallet atau mobile banking apa saja.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive QRIS Modal Popup */}
        {isQrisModalOpen && (
          <div
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsQrisModalOpen(false)}
          >
            <div
              className="relative bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsQrisModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition"
                aria-label="Tutup QRIS Modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  QRIS Donasi & Dukungan Kegiatan
                </span>
                <h3 className="font-bold text-lg text-slate-900 mt-2">
                  SUBHAN KURNIA ROHMAN, TRANSPORTASI
                </h3>
                <p className="text-xs text-slate-500 font-mono">NMID: ID1025382504567</p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5">
                  <span className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md border border-slate-200">
                    ⚙️ Bor Kompos (RW 7 & 14)
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md border border-slate-200">
                    🐔 Kandang Ayam (RW 4)
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md border border-slate-200">
                    🌿 Tanaman Hijau (RW 14)
                  </span>
                </div>
              </div>

              {/* Large Image */}
              <div className="relative w-full aspect-[3/4.2] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-inner mb-5">
                <Image
                  src="/qris-donasi.png"
                  alt="QRIS Donasi Lebak Gede"
                  fill
                  unoptimized
                  className="object-contain p-2"
                />
              </div>

              {/* Guide & Download Button */}
              <div className="flex flex-col gap-2.5 text-center">
                <p className="text-xs text-slate-500 leading-relaxed">
                  💡 <strong>Tips HP:</strong> Screenshot layar ini, lalu buka aplikasi m-Banking (BCA/Mandiri/BRI dll) atau e-Wallet (GoPay/OVO/Dana), pilih <strong>Scan QRIS</strong> dan upload gambar dari galeri Anda.
                </p>

                <div className="flex gap-2.5 mt-2">
                  <a
                    href="/qris-donasi.png"
                    download="QRIS-Donasi-Lebak-Gede.png"
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs sm:text-sm transition text-center"
                  >
                    Simpan Gambar QRIS
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsQrisModalOpen(false)}
                    className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Banner (Motivasi Lingkungan) */}
        <div className="py-14 bg-gradient-to-br from-slate-900 via-zinc-900 to-black rounded-3xl w-full text-center px-6 sm:px-12 shadow-2xl border border-white/10 text-white">
          <p className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-widest">
            Satu Langkah Nyata Dari Rumah
          </p>
          <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto my-5 leading-snug">
            “Bumi tidak butuh segelintir orang yang sempurna tanpa sampah, bumi butuh kita semua yang konsisten peduli dan memilah dari hal terkecil setiap hari.”
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-300 max-w-xl mx-auto">
            ✨ Bersama Mengelola Sampah, Bersama Membangun Masa Depan Lebak Gede yang Asri & Berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  );
}
