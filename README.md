# 🌐 MBC Laboratory Website

Website resmi MBC Laboratory, sebuah pusat riset dan inovasi teknologi digital. Dibangun dengan framework modern Next.js 15 dan Tailwind CSS, serta terintegrasi backend ringan menggunakan Node.js + Express untuk mendukung komunikasi melalui formulir kontak.

---

## 🎯 Tujuan Proyek

Menyediakan platform informasi online bagi MBC Laboratory dengan antarmuka profesional, interaktif, dan mudah diakses oleh mahasiswa, mitra industri, dan publik. Website ini memperkenalkan:

- 📌 Profil dan Visi MBC Laboratory
- 🧠 Empat bidang divisi utama
- 💌 Kontak langsung via formulir dan email
- 👨‍💻 Informasi pengembang (developer)

---

## 🚀 Fitur Utama

- 🔄 Animasi transisi halaman menggunakan Framer Motion
- 🎨 Desain responsif dengan Tailwind CSS (mobile & desktop)
- 📧 Formulir kontak terhubung ke email via Node.js + Nodemailer
- 🧩 Modularisasi komponen: Reusable & maintainable
- 🌍 Deployment online di [Vercel](https://mbc-laboratory-rizqi.vercel.app)

---

## 🧩 Teknologi yang Digunakan

| Kategori   | Stack                                  |
|------------|-----------------------------------------|
| Frontend   | Next.js 15, Tailwind CSS, TypeScript    |
| Animasi    | Framer Motion                           |
| UI Icons   | Lucide React                            |
| Backend    | Node.js, Express, Nodemailer, Dotenv    |
| Deployment | Vercel (frontend), Railway/Render (API) |

---

## 🗂 Struktur Proyek

```bash
mbc-laboratory/
├── app/                  # Folder utama halaman Next.js (home, divisi, kontak, developer)
├── components/           # Komponen UI global (Layout, Transisi, Loading, dll)
├── public/               # Aset statis (foto developer, icon, dsb)
├── styles/               # globals.css (konfigurasi Tailwind dan styling tambahan)
├── backend/              # Server Express untuk menangani formulir kontak
│   ├── index.js          # Entry point server backend
│   └── .env              # Konfigurasi email
├── .gitignore
├── package.json
└── README.md

```

### 🔐 HTTPS Otomatis via Vercel

Website ini menggunakan hosting dari [Vercel](https://vercel.com/) yang secara otomatis menyediakan sertifikat **SSL gratis** melalui Let's Encrypt. Semua domain (termasuk custom domain) langsung mendapatkan enkripsi HTTPS tanpa konfigurasi manual.

- 🔒 SSL aktif secara default (HTTPS)
- 🔁 Redirect otomatis dari HTTP → HTTPS
- 🔃 Sertifikat diperbarui otomatis (auto-renewal)
- 🧠 Tanpa perlu pengaturan .htaccess atau TLS sendiri

Dengan ini, semua komunikasi pengguna (seperti data dari formulir kontak) dienkripsi secara aman, serta mendukung kepercayaan pengguna dan peningkatan SEO.

### ⚙️ Instalasi Lokal

Untuk menjalankan proyek ini secara lokal, pastikan kamu sudah menginstal **Node.js** dan **npm** di perangkatmu. Kemudian ikuti langkah berikut:

1. **Klon repositori ini:**
   ```bash
   git clone https://github.com/qrumii/mbc-laboratory.git
   cd mbc-laboratory

🚀 Deployment ke Vercel
  Untuk melakukan deployment frontend:

  1. )Login ke Vercel menggunakan akun GitHub.

  2. )Klik "Add New Project" → Pilih repository mbc-laboratory.

  3. )Pastikan pengaturan berikut:

      Framework Preset: Next.js
      Root Directory: . (jika package.json ada di root folder)
      Build Command: npm run build
    Output Directory: .next

  4.) Klik tombol "Deploy".

Setelah deploy berhasil, website akan tersedia di domain *.vercel.app dan dapat diakses dengan HTTPS secara otomatis tanpa konfigurasi tambahan.

### 🛠️ Backend (Form Kontak API)

Proyek ini dilengkapi dengan backend ringan berbasis **Node.js + Express**, yang berfungsi untuk menangani pengiriman pesan dari formulir kontak di halaman `/kontak`. Pesan dari pengguna akan dikirim melalui **email** menggunakan layanan **Nodemailer**, tanpa menyimpan data ke database.

#### 📁 Lokasi

Semua file backend terdapat di folder: mbc-backend
Struktur File:

````
/mbc-backend
├── index.js     # Entry point server Express
├── package.json # Konfigurasi dependensi backend
└── .env         # Variabel lingkungan (private)
````

#### ⚙️ Fitur Backend

- Endpoint POST `/api/contact`
- Validasi input `nama`, `email`, dan `pesan`
- Kirim email ke alamat tujuan dengan konten pesan pengguna
- Menampilkan respons sukses atau gagal

#### 🔐 Konfigurasi .env

```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=yourapppassword
EMAIL_RECEIVER=youremail@gmail.com
```
## 🚀 Backend Deployment (Node.js + Express) via Render

Backend project ini menggunakan Express.js dan Nodemailer, yang dideploy secara gratis menggunakan [Render](https://render.com). Berikut langkah-langkah deployment backend agar dapat diakses publik dan terhubung ke frontend:

### 🔧 Struktur Proyek Backend
Pastikan folder `mbc-backend/` memiliki file berikut:
- `index.js` — Entry point aplikasi Express
- `.env` — Menyimpan variabel lingkungan (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECEIVER`)
- `package.json` — Berisi metadata, dependencies, dan script start

### 📁 Contoh Struktur:
````
mbc-backend/
├── index.js
├── .env
├── package.json

````

### 📝 Konfigurasi Render
1. **Masuk ke https://render.com**, buat akun atau login.
2. Klik **"New Web Service"** → pilih repositori yang berisi folder backend.
3. Isi pengaturan deployment:
   - **Name**: bebas (misalnya `mbc-backend`)
   - **Root Directory**: `mbc-backend`
   - **Runtime**: Node
   - **Build Command**: kosongkan (tidak diperlukan)
   - **Start Command**: `node index.js`
   - **Environment**:
     - Tambahkan variabel `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECEIVER` sesuai dengan .env Anda
     - Tambahkan juga `PORT` dengan nilai misalnya `10000`

4. Klik **"Create Web Service"**, tunggu proses deploy hingga selesai.
5. Setelah berhasil, Render akan memberikan URL publik seperti:  
   `https://mbc-laboratory.onrender.com`



