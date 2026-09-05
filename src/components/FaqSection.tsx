"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    question: "Bagaimana cara membedakan sampah Organik, Anorganik, dan Residu?",
    answer:
      "Sampah Organik (Kantong Hijau) adalah sisa bahan alami mudah membusuk seperti sisa makanan dapur, sayuran, kulit buah, dan daun kering. Sampah Anorganik (Kantong Biru) adalah material kering yang dapat didaur ulang seperti botol plastik PET, kaleng aluminium, kardus, dan kertas bersih. Sedangkan Sampah Residu (Kantong Merah) adalah sampah kotor atau sulit didaur ulang seperti popok bayi/pembalut, puntung rokok, kemasan saset multilayer, dan styrofoam.",
  },
  {
    question: "Mengapa pemilahan sampah dari rumah sangat mendesak saat ini?",
    answer:
      "TPA Sarimukti saat ini mengalami overcapacity (kelebihan muatan) parah sehingga kuota ritase pembuangan dibatasi ketat. Jika warga tidak memilah sampah dari rumah, TPS lokal di Lebak Gede akan cepat penuh dan menimbulkan bau busuk, pencemaran air lindi ke tanah warga, sarang bibit penyakit, hingga risiko banjir akibat saluran tersumbat.",
  },
  {
    question: "Ke mana sampah yang sudah dipilah akan disalurkan di Lebak Gede?",
    answer:
      "Sampah organik dapur warga disalurkan sebagai bahan baku pupuk kompos alami di Kebun SAE (RW 04) dan pakan biokonversi Maggot BSF (RW 07). Sampah anorganik bernilai ekonomis disetorkan ke Bank Sampah atau dijemput pengurus penjemputan Gaslah RW 04, 07, dan 14. Hanya sampah residu akhir yang diangkut petugas menuju TPA resmi.",
  },
  {
    question: "Bagaimana cara mudah menerapkan prinsip 3R (Reduce, Reuse, Recycle) sehari-hari?",
    answer:
      "Reduce: Mengurangi timbulan sampah dengan membawa tas kain (tote bag) sendiri saat belanja dan memakai tumbler isi ulang. Reuse: Menggunakan kembali toples atau botol bekas menjadi pot tanaman gantung dan wadah serbaguna. Recycle: Mengumpulkan botol plastik, kardus, dan kaleng dalam kondisi bersih & kering untuk didaur ulang menjadi produk bernilai jual.",
  },
  {
    question: "Bagaimana cara kerja fitur Scan AI Pemilah Sampah di website ini?",
    answer:
      "Anda cukup mengarahkan kamera HP atau mengunggah foto sampah yang ingin diperiksa ke form scanner. Model Computer Vision AI akan memproses ciri visual sampah langsung di browser dan memberitahu rekomendasi kantong warna yang sesuai (Hijau, Biru, atau Merah) beserta tips penanganan praktisnya.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Tanya Jawab Seputar Sampah
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Temukan jawaban praktis seputar cara pemilahan, pembagian kantong sampah, program Gaslah, dan sistem pengelolaan lingkungan di Kelurahan Lebak Gede.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col gap-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 overflow-hidden transition-all duration-300 hover:border-white/30 shadow-lg shadow-black/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white pr-4 leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/15 bg-zinc-900 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white text-black" : "text-white"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                    isOpen
                      ? "max-h-[500px] opacity-100 pb-5 sm:pb-6"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
