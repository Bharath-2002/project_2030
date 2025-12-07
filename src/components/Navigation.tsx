'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getAllFriends } from '@/lib/data';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const friends = getAllFriends();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0, 0, 0.2, 1],
      },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-red-500 hover:text-red-400 transition-colors font-[family-name:var(--font-chokokutai)]"
          onClick={closeMenu}
        >
          2030
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors tracking-wide font-[family-name:var(--font-comfortaa)] px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10"
            onClick={closeMenu}
          >
            About
          </Link>

          <button
            onClick={toggleMenu}
            className="relative z-50 p-2 -mr-2 text-red-500 hover:text-red-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
          >
            <ul className="flex flex-col items-center gap-6 md:gap-8">
              {friends.map((friend, i) => (
                <motion.li
                  key={friend.id}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={`/profile/${friend.slug}`}
                    onClick={closeMenu}
                    className="text-3xl md:text-5xl font-bold text-white hover:text-red-500 transition-colors tracking-tight"
                  >
                    {friend.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
