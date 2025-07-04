"use client";

import { ShieldCheck, Cpu, Globe2, Gamepad2 } from "lucide-react";

export default function DivisiPage() {
  const divisions = [
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      description:
        "Melindungi sistem dan data digital dari ancaman siber melalui pendekatan proaktif, teknologi enkripsi, dan pengujian penetrasi.",
    },
    {
      title: "Big Data",
      icon: <Cpu className="w-10 h-10 text-indigo-600" />,
      description:
        "Mengelola dan menganalisis volume data besar untuk mendapatkan wawasan yang bernilai bagi pengambilan keputusan cerdas.",
    },
    {
      title: "Game Technology",
      icon: <Gamepad2 className="w-10 h-10 text-green-600" />,
      description:
        "Membangun pengalaman interaktif dengan teknologi game mutakhir yang dapat digunakan untuk hiburan, edukasi, dan simulasi.",
    },
    {
      title: "GIS (Geographic Information System)",
      icon: <Globe2 className="w-10 h-10 text-blue-600" />,
      description:
        "Mengintegrasikan data spasial dan geolokasi untuk mendukung pengambilan keputusan berbasis lokasi di berbagai sektor.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-12 shadow-xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-black leading-snug">
          Bidang Keahlian MBC Laboratory
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {divisions.map((divisi, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl transition border border-gray-200"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                {divisi.icon}
                <h2 className="text-xl sm:text-2xl font-semibold text-black">
                  {divisi.title}
                </h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                {divisi.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
