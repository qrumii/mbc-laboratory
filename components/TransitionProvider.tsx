'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState<React.ReactNode>(null);
  const [routeKey, setRouteKey] = useState(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setDisplayedChildren(children);
      return;
    }

    setIsTransitioning(true);
    setDisplayedChildren(null); // kosong dulu, supaya halaman lama hilang

    const timeout = setTimeout(() => {
      setRouteKey(pathname);
      setDisplayedChildren(children);
      setIsTransitioning(false);
    }, 700); // total transisi keluar + loading

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={routeKey}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full"
        >
          {displayedChildren}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isTransitioning && <LoadingScreen key="loading" />}
      </AnimatePresence>
    </>
  );
}
