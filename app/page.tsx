"use client";

import { Lightbulb, Rocket, Users, Brain } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md px-4 sm:px-10 py-8 rounded-xl shadow-lg mx-auto space-y-8">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-black drop-shadow-lg leading-snug">
        Selamat Datang di <span className="text-blue-800">MBC Laboratory</span>
      </h1>

      <p className="text-base sm:text-lg text-black text-center leading-relaxed max-w-3xl mx-auto">
        🌐 Kami adalah pusat riset dan pengembangan teknologi terkini yang berfokus pada bidang <strong>Cybersecurity</strong>, <strong>Big Data</strong>, <strong>Game Technology</strong>, dan <strong>Geographic Information System (GIS)</strong>. Bersama, kita menciptakan masa depan digital yang lebih aman dan cerdas.
      </p>

      {/* VISI */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black flex items-center gap-2 sm:gap-4">
          <Lightbulb className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" /> Visi
        </h2>
        <p className="text-black text-justify text-base sm:text-lg">
          Menjadi laboratorium terdepan dalam inovasi teknologi digital yang memberikan <em>dampak positif dan berkelanjutan</em> bagi masyarakat lokal maupun global.
        </p>
      </section>

      {/* MISI */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black flex items-center gap-2 sm:gap-4">
          <Rocket className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" /> Misi
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-black text-justify text-base sm:text-lg">
          <li className="flex items-start gap-2">
            <Users className="w-5 h-5 text-blue-600 mt-1" />
            Mendorong kolaborasi aktif antara akademisi, industri, dan masyarakat.
          </li>
          <li className="flex items-start gap-2">
            <Brain className="w-5 h-5 text-purple-600 mt-1" />
            Mengembangkan produk digital yang inovatif, edukatif, dan bermanfaat.
          </li>
          <li className="flex items-start gap-2">
            <Rocket className="w-5 h-5 text-green-600 mt-1" />
            Menjadi <em>ruang eksperimen</em> untuk teknologi masa depan melalui pendekatan multidisiplin.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link href="/divisi">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full shadow-md transition w-full sm:w-auto">
            Pelajari Lebih Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
}
