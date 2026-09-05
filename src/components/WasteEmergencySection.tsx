import Image from "next/image";

export default function WasteEmergencySection() {
  const impacts = [
    {
      title: "Penyebaran Bibit Penyakit & Vektor Hama",
      badge: "Risiko Kesehatan",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop",
      objectPosition: "object-center",
      description:
        "Tumpukan sampah yang membusuk menjadi sarang berkembang biaknya lalat, nyamuk, kecoa, dan tikus. Vektor ini membawa bakteri patogen yang dapat memicu wabah diare, disentri, leptospirosis, demam berdarah, hingga infeksi saluran pernapasan.",
    },
    {
      title: "Pencemaran Udara & Gas Berbahaya",
      badge: "Kualitas Udara",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=800&auto=format&fit=crop",
      objectPosition: "object-center",
      description:
        "Proses dekomposisi sampah tanpa sirkulasi menghasilkan gas metana (CH₄), amonia, dan hidrogen sulfida (H₂S). Selain menimbulkan bau busuk yang menyengat dan mengganggu aktivitas warga, gas tersebut berbahaya jika terhirup dan memicu risiko titik api.",
    },
    {
      title: "Pencemaran Air Tanah & Risiko Banjir",
      badge: "Sanitasi & Drainase",
      image: "/pencemaran-air-banjir.jpg",
      objectPosition: "object-top",
      description:
        "Cairan lindi (leachate) dari timbunan sampah dapat meresap ke dalam air tanah dan mencemari sumur warga di sekitarnya. Sampah yang tersapu air hujan juga berisiko menyumbat saluran drainase dan memicu banjir genangan.",
    },
  ];

  const steps = [
    {
      step: "Langkah 01",
      title: "Pilah Sampah dari Rumah",
      image: "/pilah-sampah-lebak-gede.jpg",
      imgClass: "object-cover object-center",
      bgClass: "bg-zinc-900",
      description:
        "Pisahkan sampah organik basah (kantong hijau), anorganik (kantong biru), dan residu (kantong merah) agar lebih mudah dikelola dan tidak memperparah bau.",
    },
    {
      step: "Langkah 02",
      title: "Kurangi Beban Timbunan",
      image: "/kurangi-beban-timbunan.png",
      imgClass: "object-contain p-4",
      bgClass: "bg-zinc-950/80",
      description:
        "Tahan pembuangan barang bekas berukuran besar, jangan membuang sampah sembarangan, serta manfaatkan barang yang masih bernilai guna atau daur ulang.",
    },
    {
      step: "Langkah 03",
      title: "Mengikuti Pemilahan & Pengangkutan Bersama GASLAH",
      image: "/gaslah-pengangkutan.png",
      imgClass: "object-contain p-2",
      bgClass: "bg-[#9ccb18]",
      description:
        "Aktif mengikuti kegiatan pemilahan sampah di lingkungan secara rutin dan ikut serta dalam jadwal pengangkutan sampah bersama program GASLAH.",
    },
  ];

  return (
    <section id="tantangan" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Kesiapsiagaan & Kebersihan Lingkungan
        </div>

        {/* Section Heading & Polite Explanation */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Tantangan Pengelolaan Sampah: Penutupan TPA Akibat Kapasitas Berlebih & Kesiapsiagaan Kita Bersama
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed lg:pt-1.5">
            Penutupan sementara TPA akibat <span className="text-slate-900 font-semibold">overcapacity</span> memicu penumpukan sampah di berbagai TPS. Mari bersama-sama siap siaga dan aktif memilah sampah demi menjaga kebersihan lingkungan kita.
          </p>
        </div>

        {/* Two Images Showcase - Dempet 2 di Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 items-stretch">
          {/* Card 1: TPA Overcapacity */}
          <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1200/800] overflow-hidden bg-slate-100">
              <Image
                src="/tpa-overcapacity.jpg"
                alt="Kondisi TPA yang mengalami overcapacity"
                width={1200}
                height={800}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="text-[9px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-md">
                  Kondisi TPA Utama
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-slate-900 font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none leading-snug">
                  Kapasitas Tempat Pemrosesan Akhir (TPA) Melampaui Batas
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Aktivitas pengangkutan dan penerimaan sampah mengalami penundaan sementara akibat volume timbunan yang telah melebihi kapasitas operasional harian.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Penumpukan Sampah di TPS */}
          <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1200/800] overflow-hidden bg-slate-100">
              <Image
                src="/tps-menumpuk.jpg"
                alt="Penumpukan sampah di TPS dan lingkungan pemukiman"
                width={1200}
                height={800}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="text-[9px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-md">
                  Dampak pada Titik TPS
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-slate-900 font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none leading-snug">
                  Penumpukan Sampah di Berbagai TPS dan Jalur Pemukiman
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Tertundanya pemindahan sampah ke TPA berdampak langsung pada antrean gerobak serta akumulasi sampah di lingkungan pemukiman warga.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Dampak: Slide di Mobile, Grid 3 di Desktop */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <div className="max-w-2xl mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Dampak & Bahaya Lingkungan
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Apa yang Akan Terjadi Ketika Sampah Terus Menumpuk di TPS?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Jika penumpukan sampah di Tempat Penampungan Sementara tidak segera diantisipasi secara bijak dan terkoordinasi, beberapa risiko serius dapat muncul bagi kesehatan dan kenyamanan warga:
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-medium text-slate-400 sm:hidden flex items-center gap-1 pb-1">
              Geser →
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible no-scrollbar">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="w-[78vw] sm:w-auto shrink-0 sm:shrink snap-center group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-100">
                  <Image
                    src={impact.image}
                    alt={impact.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 33vw"
                    className={`object-cover ${impact.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md">
                      {impact.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-slate-900 font-bold text-base mb-2 group-hover:text-rose-600 transition-colors">
                      {impact.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Points / Kesiapsiagaan Bersama - Slide di Mobile, Grid 3 di Desktop */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Langkah Kesiapsiagaan
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Upaya Nyata yang Dapat Kita Lakukan Bersama
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Panduan tindakan nyata bagi warga untuk bersama-sama meringankan beban tumpukan sampah dan menjaga lingkungan tetap sehat:
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-medium text-slate-400 sm:hidden flex items-center gap-1 pb-1">
              Geser →
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible no-scrollbar">
            {steps.map((item, index) => (
              <div
                key={index}
                className="w-[78vw] sm:w-auto shrink-0 sm:shrink snap-center group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col"
              >
                {/* Photo Ilustrasi */}
                <div className={`relative w-full aspect-[16/10] overflow-hidden ${item.bgClass}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 33vw"
                    className={`${item.imgClass} group-hover:scale-105 transition-transform duration-500`}
                  />
                  {/* Step Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/25 bg-black/80 text-white backdrop-blur-md shadow-sm">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-slate-900 text-base font-bold mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
