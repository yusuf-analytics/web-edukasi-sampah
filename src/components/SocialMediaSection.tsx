import Image from "next/image";

export default function SocialMediaSection() {
  const instagramUrl =
    "https://www.instagram.com/kkn2lebakgede?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";
  const tiktokUrl =
    "https://www.tiktok.com/@2lebakgede?is_from_webapp=1&sender_device=pc";

  return (
    <section
      id="media-sosial"
      className="relative w-full bg-slate-50 text-slate-900 pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Dokumentasi & Kanal Informasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Dukung Media Sosial Kami
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ikuti perjalanan kegiatan sosialisasi pilah sampah dari rumah, kegiatan bersama warga, serta liputan edukasi lingkungan di Kelurahan Lebak Gede melalui Instagram dan TikTok resmi kami.
          </p>
        </div>

        {/* Social Showcase Cards Grid - Slide di Mobile, Grid 2 di Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible no-scrollbar items-stretch">
          {/* Card 1: Instagram */}
          <div className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            {/* Header info */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                    Instagram Resmi
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">@kkn2lebakgede</p>
                </div>
              </div>

              <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-slate-200 bg-slate-100 text-slate-800 shadow-sm">
                Instagram
              </span>
            </div>

            {/* Image Preview Container */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center items-center bg-slate-50">
              <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner">
                <Image
                  src="/social-instagram.png"
                  alt="Profil Instagram @kkn2lebakgede"
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="p-5 pt-0">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md shadow-rose-600/20 cursor-pointer"
              >
                <span>Follow & Kunjungi @kkn2lebakgede</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: TikTok */}
          <div className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center group relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            {/* Header info */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.47V8.58a8.28 8.28 0 0 0 4.82 1.54V6.69z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                    TikTok Resmi
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">@2lebakgede</p>
                </div>
              </div>

              <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-slate-200 bg-slate-100 text-slate-800 shadow-sm">
                TikTok
              </span>
            </div>

            {/* Image Preview Container */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center items-center bg-slate-50">
              <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner">
                <Image
                  src="/social-tiktok.png"
                  alt="Profil TikTok @2lebakgede"
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="p-5 pt-0">
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-slate-900/10 cursor-pointer"
              >
                <span>Follow & Kunjungi @2lebakgede</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
