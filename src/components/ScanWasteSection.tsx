"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  classifyWasteImage,
  buildResult,
  ClassificationResult,
  WasteCategory,
} from "@/lib/wasteAiClassifier";

const PRESET_SAMPLES = [
  {
    name: "Sisa Makanan & Sayur",
    category: "Organik",
    image: "/Jenis Sampah/Organik/sisa-makanan-sayuran-buah.jpg",
    bag: "Kantong Hijau",
  },
  {
    name: "Botol Plastik & Kaleng",
    category: "Anorganik",
    image: "/Jenis Sampah/Unorganik/botol-botolan-plastik-kaca-kaleng.jpg",
    bag: "Kantong Biru",
  },
  {
    name: "Sisa Kardus & Karton",
    category: "Anorganik",
    image: "/Jenis Sampah/Unorganik/sisa-kardus.jpg",
    bag: "Kantong Biru",
  },
  {
    name: "Popok Bayi / Diapers",
    category: "Residu",
    image: "/Jenis Sampah/Residu/sampah-popok-bayi.jpg",
    bag: "Kantong Merah",
  },
];

export default function ScanWasteSection() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Mohon unggah file format gambar (JPG, PNG, atau WebP).");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      setImageSrc(dataUrl);
      await runClassification(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const runClassification = async (imageInput: string) => {
    setLoading(true);
    setProgress(25);
    setResult(null);

    try {
      const res = await classifyWasteImage(imageInput, (pct) => {
        setProgress(Math.max(25, pct));
      });
      setProgress(100);
      setResult(res);
    } catch (err) {
      console.error(err);
      setError("Gagal memproses gambar. Silakan coba gambar lain.");
    } finally {
      setLoading(false);
    }
  };

  const handlePresetClick = async (url: string) => {
    setImageSrc(url);
    setError(null);
    await runClassification(url);
  };

  const handleManualOverride = (targetCategory: WasteCategory) => {
    if (!result) return;
    const overrides: Record<WasteCategory, { name: string; en: string }> = {
      organik: {
        name: "Sampah Organik / Dapur Basah (Pilihan Warga)",
        en: "Organic Material (Manual Select)",
      },
      anorganik: {
        name: "Sampah Daur Ulang Plastik / Kertas / Logam",
        en: "Recyclable Anorganic (Manual Select)",
      },
      residu: {
        name: "Sampah Residu / Kemasan Saset / Popok",
        en: "Residual Waste (Manual Select)",
      },
    };

    const info = overrides[targetCategory];
    const newRes = buildResult(targetCategory, info.name, info.en, 98, result.candidateScores);
    setResult(newRes);
  };

  const resetScanner = () => {
    setImageSrc(null);
    setResult(null);
    setError(null);
    setProgress(0);
  };

  return (
    <section
      id="scan-sampah"
      className="relative w-full bg-black text-white pb-20 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI Scanner Pengenal Sampah
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Scan Jenis Sampah dengan AI
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ambil foto sampah atau unggah gambar dari galeri Anda. Teknologi Computer Vision AI akan otomatis
            mengidentifikasi apakah sampah termasuk <strong>Organik (Kantong Hijau)</strong>,{" "}
            <strong>Anorganik (Kantong Biru)</strong>, atau <strong>Residu (Kantong Merah)</strong>.
          </p>
        </div>

        {/* Scanner Card Container */}
        <div className="bg-zinc-950/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          {/* Hidden File & Camera Inputs */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />

          {/* State 1: Belum Ada Foto (Upload Form & Preset) */}
          {!imageSrc && (
            <div className="space-y-8">
              {/* Drag & Drop / Click Zone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
                }}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/20 hover:border-white/50 bg-zinc-900/40 hover:bg-zinc-900/70 rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group"
              >
                {/* Camera / Upload Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-5 shadow-lg shadow-white/10 group-hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Ambil Foto Sampah atau Pilih dari Galeri
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                  Arahkan kamera ke sisa makanan dapur, botol kemasan, kardus, atau popok untuk mengetahui kantong wadah yang tepat.
                </p>

                {/* Direct Action Buttons */}
                <div
                  className="flex flex-wrap items-center justify-center gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Buka Kamera HP</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-sm cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <span>Unggah File Gambar</span>
                  </button>
                </div>
              </div>

              {/* Sample Presets */}
              <div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 text-center sm:text-left">
                  Atau Uji Contoh Sampah Nyata di Bawah Ini:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PRESET_SAMPLES.map((sample) => (
                    <button
                      key={sample.name}
                      type="button"
                      onClick={() => handlePresetClick(sample.image)}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 text-left transition-all bg-zinc-900/60 p-2 cursor-pointer"
                    >
                      <div className="relative h-28 w-full rounded-xl overflow-hidden bg-zinc-800 mb-2">
                        <Image
                          src={sample.image}
                          alt={sample.name}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 bg-black/80 text-white backdrop-blur-md">
                          {sample.category}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white truncate px-1">
                        {sample.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 px-1">
                        {sample.bag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* State 2: Gambar Sedang / Sudah Dianalisis */}
          {imageSrc && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Kolom Kiri: Pratinjau Foto */}
                <div className="md:col-span-5 space-y-3">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/20 bg-zinc-900 shadow-inner">
                    <Image
                      src={imageSrc}
                      alt="Sampah yang dipindai"
                      fill
                      unoptimized
                      className="object-cover"
                    />

                    {loading && (
                      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-white text-center">
                        <svg
                          className="w-10 h-10 animate-spin text-white mb-3"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <div className="text-sm font-bold">Menganalisis Kategori Sampah...</div>
                        <div className="text-xs text-zinc-400 mt-1">
                          Memproses via Model Zero-Shot Vision AI
                        </div>
                        <div className="w-44 bg-zinc-800 rounded-full h-1.5 mt-4 overflow-hidden border border-white/10">
                          <div
                            className="bg-white h-1.5 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={resetScanner}
                    className="w-full py-2.5 px-3 rounded-xl border border-white/20 hover:bg-zinc-800 text-xs font-bold text-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Pindai Foto Sampah Lain</span>
                  </button>
                </div>

                {/* Kolom Kanan: Hasil Keputusan Kategori AI */}
                <div className="md:col-span-7">
                  {loading && (
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 text-center text-zinc-400 space-y-2">
                      <p className="text-sm font-medium">
                        Model AI sedang memverifikasi ciri visual objek ke dalam kategori <strong>Organik</strong>, <strong>Anorganik</strong>, atau <strong>Residu</strong>...
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-950/50 border border-red-800 rounded-2xl p-4 text-xs sm:text-sm text-red-200 flex items-start gap-3">
                      <span>⚠️</span>
                      <div>
                        <div className="font-bold">Gagal Menganalisis</div>
                        <p>{error}</p>
                      </div>
                    </div>
                  )}

                  {result && !loading && (
                    <div className="space-y-4">
                      {/* Banner Utama Keputusan */}
                      <div className="rounded-2xl p-5 border border-white/20 bg-zinc-900/90 shadow-lg">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">
                              {result.category === "organik" ? "🌱" : result.category === "anorganik" ? "♻️" : "🗑️"}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                                  {result.verdictTitle}
                                </h3>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/20 bg-black text-white">
                                  {result.confidence}% Yakin
                                </span>
                              </div>
                              <p className="text-xs text-zinc-400 mt-0.5">
                                {result.verdictSubtitle}
                              </p>
                            </div>
                          </div>

                          <span className="shrink-0 px-3 py-1 text-xs font-bold rounded-full border border-white/20 bg-black text-white shadow-sm">
                            {result.bagName}
                          </span>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                          <span className="text-zinc-400">Karakteristik Materi:</span>
                          <span className="font-semibold text-white bg-black/60 px-2.5 py-1 rounded border border-white/10">
                            {result.detectedObjectIndonesian}
                          </span>
                        </div>
                      </div>

                      {/* Distribusi Probabilitas 3 Kategori */}
                      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-4 text-xs space-y-2.5">
                        <div className="font-semibold text-zinc-300 text-[11px] uppercase tracking-wider">
                          Distribusi Keyakinan AI (3 Kategori):
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-zinc-300 font-medium">1. Sampah Organik (Kantong Hijau)</span>
                              <span className="font-bold text-white">{result.candidateScores.organic}%</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                              <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${result.candidateScores.organic}%` }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-zinc-300 font-medium">2. Sampah Anorganik (Kantong Biru)</span>
                              <span className="font-bold text-white">{result.candidateScores.recyclable}%</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                              <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${result.candidateScores.recyclable}%` }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-zinc-300 font-medium">3. Sampah Residu (Kantong Merah)</span>
                              <span className="font-bold text-white">{result.candidateScores.residual}%</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                              <div
                                className="h-full bg-rose-500 rounded-full"
                                style={{ width: `${result.candidateScores.residual}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Panduan Aksi & Penyaluran */}
                      <div className="space-y-2.5 text-xs sm:text-sm">
                        <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
                          <div className="font-bold text-white mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                            <span>💡</span>
                            <span>Instruksi Penanganan di Rumah:</span>
                          </div>
                          <p className="text-zinc-400 text-xs leading-relaxed">{result.recommendation}</p>
                        </div>

                        <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
                          <div className="font-bold text-white mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                            <span>📍</span>
                            <span>Penyaluran di Wilayah Lebak Gede:</span>
                          </div>
                          <p className="text-zinc-400 text-xs leading-relaxed">{result.actionGuide}</p>
                        </div>
                      </div>

                      {/* Koreksi Manual Kategori */}
                      <div className="pt-2">
                        <div className="text-[11px] text-zinc-400 mb-2">
                          Hasil kurang tepat? Pilih koreksi manual langsung:
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => handleManualOverride("organik")}
                            className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                              result.category === "organik"
                                ? "bg-white text-black border-white"
                                : "bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800"
                            }`}
                          >
                            Organik
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualOverride("anorganik")}
                            className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                              result.category === "anorganik"
                                ? "bg-white text-black border-white"
                                : "bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800"
                            }`}
                          >
                            Anorganik
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualOverride("residu")}
                            className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                              result.category === "residu"
                                ? "bg-white text-black border-white"
                                : "bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800"
                            }`}
                          >
                            Residu
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
