// layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'MBC Laboratory',
  description: 'Website resmi MBC Laboratory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-white to-red-500 text-black flex flex-col">
        {/* Header */}
        <header className="backdrop-blur-md bg-white/70 sticky top-0 z-50 shadow-md">
  <nav className="max-w-6xl mx-auto px-6 py-4 flex gap-8 text-lg font-medium text-black">
    <Link href="/" className="hover:text-blue-700">Home</Link>
    <Link href="/divisi" className="hover:text-blue-700">Divisi</Link>
    <Link href="/kontak" className="hover:text-blue-700">Kontak</Link>
    <Link href="/developer" className="hover:text-blue-700">Developer</Link>
  </nav>
</header>


        {/* Konten */}
        <main className="flex-grow px-4 py-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-600 bg-white/70 backdrop-blur-md">
          © {new Date().getFullYear()} MBC Laboratory
        </footer>
      </body>
    </html>
  );
}
