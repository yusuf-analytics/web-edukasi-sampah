"use client";

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
