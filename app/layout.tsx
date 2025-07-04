import './globals.css';
import Link from 'next/link';
import TransitionProvider from '@/components/TransitionProvider';

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
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-row flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2 text-sm sm:text-lg font-medium text-black">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <Link href="/divisi" className="hover:text-blue-700 transition">Divisi</Link>
            <Link href="/kontak" className="hover:text-blue-700 transition">Kontak</Link>
            <Link href="/developer" className="hover:text-blue-700 transition">Developer</Link>
          </nav>
        </header>

        {/* Halaman & Footer ikut masuk ke dalam transisi */}
        <TransitionProvider>
          <main className="flex-grow px-4 sm:px-6 py-10 sm:py-20">
            {children}
          </main>

          <footer className="text-center py-6 text-xs sm:text-sm text-gray-600 bg-white/70 backdrop-blur-md">
            © {new Date().getFullYear()} MBC Laboratory
          </footer>
        </TransitionProvider>

      </body>
    </html>
  );
}
