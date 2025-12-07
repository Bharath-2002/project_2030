'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSiteMeta } from '@/lib/data';

export default function AboutPage() {
  const siteMeta = getSiteMeta();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  Promise.resolve().then(() => {
    setIsVisible(true);
  });
}, []);


  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 md:px-12">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-sm font-medium tracking-widest text-red-500 uppercase mb-12 font-[family-name:var(--font-comfortaa)]">
            About
          </h1>

          <div className="text-2xl md:text-4xl lg:text-5xl leading-relaxed tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline font-[family-name:var(--font-comfortaa)]"
            >
              We are{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline text-red-500 font-[family-name:var(--font-chokokutai)]"
            >
              2030
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline font-[family-name:var(--font-comfortaa)]"
            >
              . A{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline italic text-white/80"
            >
              collective
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline font-[family-name:var(--font-comfortaa)]"
            >
              {' '}of creators pushing the{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline font-bold text-red-500"
            >
              boundaries
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline font-[family-name:var(--font-comfortaa)]"
            >
              {' '}of{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline font-[family-name:var(--font-comfortaa)] text-white/90"
            >
              digital expression
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline font-[family-name:var(--font-comfortaa)]"
            >
              .
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 text-lg md:text-xl text-white/60 leading-relaxed font-[family-name:var(--font-comfortaa)]"
          >
            Born from shared visions and midnight conversations, we craft experiences that blur the line between{' '}
            <span className="text-white italic">art</span> and{' '}
            <span className="text-white italic">technology</span>. Our work speaks to the future while honoring the raw, unfiltered spirit of{' '}
            <span className="text-red-500 font-bold">creative rebellion</span>.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/60 font-[family-name:var(--font-comfortaa)]">
              Get in touch:{' '}
              <a
                href={`mailto:${siteMeta.contactEmail}`}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                {siteMeta.contactEmail}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
