"use client";

import { Lightbulb, Rocket, Users, Brain } from "lucide-react";
import Link from "next/link"; // ✅ Tambahan penting

export default function Home() {
  return (
    <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-lg mx-auto space-y-8">
      <h1 className="text-5xl font-extrabold text-center text-black drop-shadow-lg">
        Selamat Datang di <span className="text-blue-800">MBC Laboratory</span>
      </h1>
      <p className="text-lg text-black text-center leading-relaxed max-w-3xl mx-auto">
        🌐 Kami adalah pusat riset dan pengembangan teknologi terkini yang berfokus pada bidang <strong>Cybersecurity</strong>, <strong>Big Data</strong>, <strong>Game Technology</strong>, dan <strong>Geographic Information System (GIS)</strong>. Bersama, kita menciptakan masa depan digital yang lebih aman dan cerdas.
      </p>

      {/* VISI */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-black flex items-center gap-2">
          <Lightbulb className="text-yellow-500" /> Visi
        </h2>
        <p className="text-black text-justify pl-4 pr-4">
          Menjadi laboratorium terdepan dalam inovasi teknologi digital yang memberikan <em>dampak positif dan berkelanjutan</em> bagi masyarakat lokal maupun global.
        </p>
      </section>

      {/* MISI */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-black flex items-center gap-2">
          <Rocket className="text-red-500" /> Misi
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-black text-justify">
          <li className="flex gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Mendorong kolaborasi aktif antara akademisi, industri, dan masyarakat.
          </li>
          <li className="flex gap-2">
            <Brain className="w-5 h-5 text-purple-600" />
            Mengembangkan produk digital yang inovatif, edukatif, dan bermanfaat.
          </li>
          <li className="flex gap-2">
            <Rocket className="w-5 h-5 text-green-600" />
            Menjadi <em>ruang eksperimen</em> untuk teknologi masa depan melalui pendekatan multidisiplin.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link href="/divisi">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
            Pelajari Lebih Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
}
