import Image from "next/image";

export default function Section3R() {
  const threeRData = [
    {
      keyword: "REDUCE",
      title: "Kurangi Sampah dari Sumbernya",
      tagline: "Mencegah timbunan sampah sebelum tercipta",
      badge: "Langkah 1: Kurangi",
      image: "/3r-reduce-plastik.png",
      imgClass: "object-cover object-center",
      bgClass: "bg-white",
      description:
        "Reduce adalah prioritas utama dalam pengelolaan sampah. Artinya, kita secara sadar membatasi dan mengurangi penggunaan barang atau kemasan yang berpotensi langsung menjadi sampah sekali pakai.",
      actions: [
        "Membawa tas belanja kain (tote bag) sendiri saat belanja ke pasar atau minimarket.",
        "Membawa botol minum (tumbler) dan wadah bekal makanan sendiri.",
        "Menghindari penggunaan kantong kresek, sedotan, dan alat makan sekali pakai.",
        "Membeli produk dalam kemasan besar/isi ulang untuk menghemat kemasan saset.",
      ],
    },
    {
      keyword: "REUSE",
      title: "Gunakan Kembali Barang yang Ada",
      tagline: "Memperpanjang usia pakai barang berharga",
      badge: "Langkah 2: Gunakan Lagi",
      image: "/3r-reuse-botol.png",
      imgClass: "object-cover object-center",
      bgClass: "bg-zinc-900",
      description:
        "Reuse berfokus pada memanfaatkan kembali barang yang sudah ada tanpa perlu membuangnya terlebih dahulu. Barang yang masih kokoh dapat dialihfungsikan menjadi wadah baru atau diberikan kepada yang membutuhkan.",
      actions: [
        "Memanfaatkan toples dan botol plastik bekas sebagai pot tanaman gantung atau hiasan lingkungan.",
        "Menggunakan kembali kardus dan tas belanja yang masih kuat untuk keperluan pengiriman barang.",
        "Memanfaatkan pakaian bekas yang sudah tidak terpakai menjadi kain lap atau kerajinan kain perca.",
        "Mendonorkan atau menyumbangkan baju dan barang layak pakai kepada warga yang membutuhkan.",
      ],
    },
    {
      keyword: "RECYCLE",
      title: "Daur Ulang Jadi Produk Bernilai",
      tagline: "Mengubah sampah menjadi manfaat ekonomi baru",
      badge: "Langkah 3: Daur Ulang",
      image: "/3r-recycle-kompos.jpg",
      imgClass: "object-cover object-center",
      bgClass: "bg-zinc-900",
      description:
        "Recycle adalah proses mengolah kembali material sampah yang tidak bisa digunakan langsung agar menjadi bahan baku produk baru, baik secara mandiri maupun melalui Bank Sampah.",
      actions: [
        "Mengolah sisa sayuran, buah, dan sampah organik dapur menjadi pupuk kompos atau pakan maggot BSF.",
        "Mengumpulkan botol plastik, kaleng, dan kardus bersih untuk disetorkan ke Bank Sampah terdekat.",
        "Mendukung dan menggunakan produk kreatif yang terbuat dari bahan daur ulang lokal.",
        "Memastikan sampah anorganik dalam keadaan bersih dan kering saat dipilah agar bernilai ekonomis tinggi.",
      ],
    },
  ];

  return (
    <section id="section-3r" className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white pb-20 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Pill (Black & White) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/75 border border-white/20 text-white backdrop-blur-md mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Gerakan Bijak Kelola Sampah
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 text-transparent bg-clip-text leading-tight">
              Mari Kita Terapkan Prinsip 3R: Reduce, Reuse, & Recycle
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
              Solusi paling efektif dalam menghadapi krisis penumpukan sampah dimulai dari kebiasaan kecil di rumah kita sendiri. Dengan menerapkan pola hidup 3R, kita meringankan beban TPS sekaligus mewujudkan lingkungan Lebak Gede yang bersih, sehat, dan asri.
            </p>
          </div>
          <span className="shrink-0 text-[11px] font-medium text-slate-400 md:hidden flex items-center gap-1 pb-1">
            Geser →
          </span>
        </div>

        {/* 3R Cards - Slide di Mobile, Grid 3 di Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible no-scrollbar">
          {threeRData.map((item, index) => (
            <div
              key={index}
              className="w-[84vw] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-center group rounded-2xl border border-white/15 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col"
            >
              {/* Image Preview */}
              <div className={`relative w-full aspect-[16/10] overflow-hidden ${item.bgClass}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 33vw"
                  className={`${item.imgClass} group-hover:scale-105 transition-transform duration-500`}
                />
                {/* Badge Top Left (Warna Hitam) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/20 bg-black/85 text-white backdrop-blur-md shadow-sm">
                    {item.badge}
                  </span>
                </div>
                {/* Large Keyword Overlay on Bottom Right */}
                <div className="absolute bottom-2 right-3 z-10 pointer-events-none">
                  <span className="text-xl sm:text-2xl font-black text-white/50 tracking-wider drop-shadow-md">
                    {item.keyword}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-bold tracking-tight mb-1 group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Practical Action Steps List */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                    Aksi Nyata yang Bisa Dilakukan:
                  </p>
                  <ul className="space-y-2">
                    {item.actions.map((act, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light leading-relaxed">
                        <svg
                          className="w-4 h-4 text-white shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Callout Banner (Monochrome Black & White) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-white/15 bg-black/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center sm:text-left">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Komitmen Bersama
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
              Mulai dari Diri Sendiri, Rumah Tangga, hingga Lingkungan RW
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed font-light">
              Perubahan besar tercipta dari kepedulian kecil yang dilakukan secara konsisten. Mari wujudkan Lebak Gede yang mandiri dan bijak dalam mengelola sampah.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black border border-white/25 text-white hover:bg-zinc-900 transition shadow-lg">
              Lebak Gede Bersih & Asri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
