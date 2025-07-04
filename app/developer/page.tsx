"use client";

export default function DeveloperPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-10">
        
        {/* Foto Developer */}
        <div className="flex-shrink-0">
          <img
            src="/foto-rizqi.jpg"
            alt="Foto Developer"
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover shadow-md border-4 border-white"
          />
        </div>

        {/* Informasi Developer */}
        <div className="text-black space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Muhammad Rizqi
          </h1>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
            Saya adalah mahasiswa aktif program studi <strong>Teknik Telekomunikasi</strong> dengan minat khusus dalam bidang <strong>Internet of Things (IoT)</strong>, <strong>pengembangan web</strong>, dan <strong>teknologi jaringan</strong>.
          </p>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
            Proyek ini dibangun dengan menggunakan <strong>Next.js</strong> dan <strong>Tailwind CSS</strong>, serta didukung oleh backend <strong>Node.js</strong> dan <strong>PHP</strong> untuk kebutuhan API dan pengelolaan data.
          </p>
          <p className="text-gray-800 text-base sm:text-lg">
            NIM: <strong>101012300280</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
