'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo animasi */}
      <motion.div
        className="mb-4"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Loader2 className="w-12 h-12 text-blue-700 animate-spin" />
      </motion.div>

      {/* Text Loading */}
      <motion.p
        className="text-lg font-medium tracking-wide text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Memuat halaman...
      </motion.p>
    </motion.div>
  );
}
