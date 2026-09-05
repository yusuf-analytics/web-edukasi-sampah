"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface WasteItem {
  id: string;
  name: string;
  category: "organik" | "anorganik" | "residu";
  categoryLabel: string;
  bagType: string;
  image: string;
  description: string;
  handlingTip: string;
  destination: string;
}

const wasteItems: WasteItem[] = [
  // ORGANIK (Folder: /Jenis Sampah/Organik/)
  {
    id: "org-1",
    name: "Sisa Makanan, Sayuran & Buah",
    category: "organik",
    categoryLabel: "Organik Basah",
    bagType: "Kantong Hijau",
    image: "/Jenis Sampah/Organik/sisa-makanan-sayuran-buah.jpg",
    description: "Sisa racikan dapur, potongan sayur-mayur, kupasan kulit buah, dan sisa lauk pauk yang mudah membusuk secara alami.",
    handlingTip: "Tiriskan kandungan kuah/air terlebih dahulu sebelum dimasukkan ke kantong hijau agar tidak menimbulkan bau busuk dan rembesan.",
    destination: "Bahan baku utama pembuatan pupuk kompos, lubang biopori pekarangan, atau pakan budidaya maggot BSF.",
  },
  {
    id: "org-2",
    name: "Sisa Nasi & Olahan Pokok",
    category: "organik",
    categoryLabel: "Organik Basah",
    bagType: "Kantong Hijau",
    image: "/Jenis Sampah/Organik/sisa-nasi.jpg",
    description: "Nasi basi, sisa kerak nasi rice cooker, roti berjamur, dan sisa olahan biji-bijian atau karbohidrat yang tidak habis.",
    handlingTip: "Dapat dijemur menjadi karak/aking untuk pakan ternak unggas, atau langsung dicampur ke wadah komposter aktif.",
    destination: "Pakan ternak unggas warga (ayam/bebek) atau campuran bahan komposter kaya mikroorganisme pengurai.",
  },
  {
    id: "org-3",
    name: "Cangkang & Kulit Telur",
    category: "organik",
    categoryLabel: "Organik Kering",
    bagType: "Kantong Hijau",
    image: "/Jenis Sampah/Organik/cangkang-telur.jpg",
    description: "Cangkang telur ayam, bebek, maupun telur puyuh yang kaya akan kandungan kalsium karbonat bermutu tinggi untuk tanah.",
    handlingTip: "Remas cangkang menjadi kepingan kecil agar lebih cepat terurai saat dicampurkan ke tanah pot atau komposter.",
    destination: "Penyubur kalsium alami bagi tanaman hias/sayur dan peningkat kualitas unsur hara media tanam.",
  },
  {
    id: "org-4",
    name: "Daun Kering & Ranting Tanaman",
    category: "organik",
    categoryLabel: "Organik Kering",
    bagType: "Kantong Hijau",
    image: "/Jenis Sampah/Organik/daun-kering-ranting.jpg",
    description: "Guguran daun pekarangan, ranting kecil, sisa pangkasan tanaman hias, dan serbuk kayu pembersihan kebun.",
    handlingTip: "Hindari membakar sampah daun karena memicu polusi asap; kumpulkan sebagai unsur cokelat (karbon) kompos.",
    destination: "Bahan penyeimbang rasio karbon (C/N) dalam pembuatan kompos atau dijadikan mulsa penutup tanah.",
  },

  // ANORGANIK (Folder: /Jenis Sampah/Unorganik/)
  {
    id: "ano-1",
    name: "Botol Plastik, Kaca & Kaleng Logam",
    category: "anorganik",
    categoryLabel: "Anorganik Daur Ulang",
    bagType: "Kantong Biru",
    image: "/Jenis Sampah/Unorganik/botol-botolan-plastik-kaca-kaleng.jpg",
    description: "Botol air mineral, botol kecap/sirup kaca, kaleng minuman soda, kaleng susu kental manis, dan wadah logam lainnya.",
    handlingTip: "Bilas bersih dari sisa cairan atau minyak, lepas label kemasan, lalu remas botol/kaleng agar hemat ruang simpan.",
    destination: "Disetor ke Bank Sampah atau pelapak daur ulang untuk dilebur dan dicetak ulang menjadi produk baru bernilai jual.",
  },
  {
    id: "ano-2",
    name: "Sisa Kardus & Kertas Karton",
    category: "anorganik",
    categoryLabel: "Anorganik Daur Ulang",
    bagType: "Kantong Biru",
    image: "/Jenis Sampah/Unorganik/sisa-kardus.jpg",
    description: "Kotak kardus paket online, karton kemasan makanan kering, kotak sereal, serta lembaran kertas dokumen bekas.",
    handlingTip: "Lipat kardus hingga pipih dan ikat rapi dengan tali. Pastikan kondisi tetap kering (tidak terkena air atau minyak masakan).",
    destination: "Pabrik daur ulang bubur kertas (pulp) untuk dicetak ulang menjadi kardus dan kemasan karton baru.",
  },

  // RESIDU (Folder: /Jenis Sampah/Residu/)
  {
    id: "res-1",
    name: "Popok Bayi & Pembalut Wanita",
    category: "residu",
    categoryLabel: "Sampah Residu",
    bagType: "Kantong Merah",
    image: "/Jenis Sampah/Residu/sampah-popok-bayi.jpg",
    description: "Popok sekali pakai (diapers) bayi/dewasa dan pembalut sanitasi wanita yang mengandung gel polimer penyerap air sintetis.",
    handlingTip: "Buang kotoran padat ke kloset, gulung popok dengan rapi menggunakan perekat sampingnya, lalu masukkan ke kantong merah.",
    destination: "Pengangkutan khusus menuju Tempat Pemrosesan Akhir (TPA) saniter / fasilitas pemusnah berizin.",
  },
  {
    id: "res-2",
    name: "Puntung Rokok & Sisa Abu",
    category: "residu",
    categoryLabel: "Sampah Residu",
    bagType: "Kantong Merah",
    image: "/Jenis Sampah/Residu/puntung-rokok.jpg",
    description: "Puntung dan filter rokok berbahan serat selulosa asetat yang mengikat racun kimia berbahaya seperti tar dan nikotin.",
    handlingTip: "Pastikan puntung rokok telah padam sempurna sebelum dibuang guna mencegah risiko percikan api atau kebakaran.",
    destination: "Wadah residu TPA, tidak boleh dicampur ke pupuk kompos karena beracun bagi ekosistem tanah.",
  },
  {
    id: "res-3",
    name: "Sampah Styrofoam Kemasan",
    category: "residu",
    categoryLabel: "Sampah Residu",
    bagType: "Kantong Merah",
    image: "/Jenis Sampah/Residu/sampah-styrofoam.jpg",
    description: "Wadah makanan styrofoam (polistirena busa) bekas mie instan cup, kotak nasi bungkus, dan pelindung kemasan elektronik.",
    handlingTip: "Bersihkan dari sisa minyak/kuah dan kemas ke dalam kantong merah residu; styrofoam sangat sulit terurai secara alami.",
    destination: "Limbah residu TPA atau pemanfaatan energi Refuse Derived Fuel (RDF) khusus industri tertentu.",
  },
  {
    id: "res-4",
    name: "Sampah Medis & Jarum Suntik",
    category: "residu",
    categoryLabel: "Residu Tajam / B3",
    bagType: "Kantong Merah",
    image: "/Jenis Sampah/Residu/sampah-jarum-suntik.jpg",
    description: "Jarum suntik insulin mandiri, strip tes darah, pisau cukur sekali pakai, dan benda tajam medis rumahan.",
    handlingTip: "Wajib dimasukkan ke wadah botol plastik tebal tertutup (safety box darurat) sebelum dikantongi agar tidak melukai petugas.",
    destination: "Penanganan limbah B3 medis / pengangkutan khusus limbah tajam faskes atau insinerator suhu tinggi.",
  },
  {
    id: "res-5",
    name: "Sisa Obat-obatan & Strip Kadaluarsa",
    category: "residu",
    categoryLabel: "Residu B3 Farmasi",
    bagType: "Kantong Merah",
    image: "/Jenis Sampah/Residu/sisa-obat-obatan.jpg",
    description: "Obat kadaluarsa, tablet, sirup sisa, salep basi, serta strip blister obat berbahan komposit aluminium foil-plastik.",
    handlingTip: "Keluarkan obat dari blister, hancurkan tablet dan campur ampas kopi/tanah agar tidak disalahgunakan, lalu bungkus rapat.",
    destination: "Penanganan residu khusus limbah kimia farmasi agar tidak mencemari sumber air tanah lingkungan warga.",
  },
];

const categories = [
  { key: "semua", label: "Semua Jenis", count: wasteItems.length },
  { key: "organik", label: "Sampah Organik", count: wasteItems.filter((i) => i.category === "organik").length },
  { key: "anorganik", label: "Sampah Anorganik", count: wasteItems.filter((i) => i.category === "anorganik").length },
  { key: "residu", label: "Sampah Residu", count: wasteItems.filter((i) => i.category === "residu").length },
];

export default function WasteCatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    selectedCategory === "semua"
      ? wasteItems
      : wasteItems.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 380;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="katalog-sampah"
      className="relative w-full bg-white text-slate-900 pb-20 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-800 shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Katalog Gambar & Panduan Pemilahan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Pilah Tepat, Lingkungan Terawat
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih kategori sampah di bawah ini untuk melihat contoh visual gambar dan panduan penanganannya.
            Gunakan tombol panah atau geser layar untuk menelusuri katalog.
          </p>
        </div>

        {/* Category Tabs & Slider Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md scale-102"
                      : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-white text-slate-900"
                        : "bg-slate-200 text-slate-600 border border-slate-300"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline font-medium">
              Menampilkan {filteredItems.length} item
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider("left")}
                aria-label="Slide sebelumnya"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-30"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollSlider("right")}
                aria-label="Slide selanjutnya"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-30"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Area */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex-none w-[80vw] sm:w-[325px] md:w-[360px] bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 snap-start flex flex-col shadow-sm"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 285px, (max-width: 768px) 325px, 360px"
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge for Category */}
                <div className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md shadow-sm text-[11px] font-semibold uppercase tracking-wider">
                  {item.categoryLabel}
                </div>

                {/* Bag Badge */}
                <div className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full border border-white/20 bg-black/80 text-zinc-200 backdrop-blur-md shadow-sm text-[11px] font-medium">
                  {item.bagType}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Guide Box */}
                <div className="space-y-2.5 pt-3 border-t border-slate-200">
                  <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200/70">
                    <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>💡</span> Tips Penanganan:
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.handlingTip}
                    </p>
                  </div>

                  <div className="bg-blue-50/80 rounded-xl p-2.5 border border-blue-200/70">
                    <p className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <span>📍</span> Penyaluran / Manfaat:
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.destination}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hint for Touch / Mobile */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500 font-medium">
          <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Geser kartu ke samping untuk melihat contoh lainnya</span>
        </div>
      </div>
    </section>
  );
}
