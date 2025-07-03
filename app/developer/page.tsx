"use client";

export default function DeveloperPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-8">
        {/* Foto Developer */}
        <div className="flex-shrink-0">
          <img
             src="/foto-rizqi.jpg"
            alt="Foto Developer"
            className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-white"
          />
        </div>

        {/* Informasi Developer */}
        <div className="text-black space-y-4 text-justify">
          <h1 className="text-3xl font-bold text-center md:text-left">
            Muhammad Rizqi
          </h1>
          <p className="text-gray-800">
            Saya adalah mahasiswa aktif program studi <strong>Teknik Telekomunikasi</strong> dengan minat khusus dalam bidang <strong>Internet of Things (IoT)</strong>, <strong>pengembangan web</strong>, dan <strong>teknologi jaringan</strong>. 
          </p>
          <p className="text-gray-800">
            Proyek ini dibangun dengan menggunakan <strong>Next.js</strong> dan <strong>Tailwind CSS</strong>, serta didukung oleh backend <strong>Node.js</strong> dan <strong>PHP</strong> untuk kebutuhan API dan pengelolaan data.
          </p>
          <p className="text-gray-800">
            NIM: <strong>101012300280</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
