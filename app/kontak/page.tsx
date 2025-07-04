"use client";

import { useState } from "react";

export default function Kontak() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nama = form.nama.value;
    const email = form.email.value;
    const pesan = form.pesan.value;

    const data = { nama, email, pesan };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Pesan berhasil dikirim!");
        form.reset();
      } else {
        setStatus("Gagal mengirim pesan.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Terjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <main className="space-y-6 px-4 py-8 sm:py-12 text-black">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Hubungi Kami</h1>

      <div className="text-base sm:text-lg space-y-2 max-w-xl mx-auto text-center sm:text-left">
        <p>
          <strong>Alamat:</strong> Jl. Teknologi No. 123, Bandung
        </p>
        <p>
          <strong>Telepon:</strong> 0812-3456-7890
        </p>
        <p>
          <strong>Email:</strong> info@mbclab.com
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md w-full mx-auto text-black"
      >
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="pesan"
          placeholder="Pesan"
          rows={4}
          required
          className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Kirim Pesan
        </button>
        {status && (
          <p className="text-sm text-green-600 font-medium pt-2">{status}</p>
        )}
      </form>
    </main>
  );
}
