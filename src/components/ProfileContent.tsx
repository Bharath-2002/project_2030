'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Friend } from '@/lib/data';

interface ProfileContentProps {
  friend: Friend;
}

export default function ProfileContent({ friend }: ProfileContentProps) {
  const nameForMarquee = friend.name.toUpperCase();
  const marqueeText = `${nameForMarquee} * `.repeat(10);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Full screen on mobile, 16:9 on desktop */}
      <section className="relative w-full h-screen md:h-auto md:aspect-[16/9]">
        <Image
          src={friend.images.profileHero}
          alt={friend.name}
          fill
          priority
          className="object-cover object-[15%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Marquee - positioned at bottom, overlaying the image */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 md:py-6">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-8xl md:text-7xl lg:text-8xl font-bold tracking-tighter mx-4 text-red-500 drop-shadow-lg">
              {marqueeText}
            </span>
            <span className="text-8xl md:text-7xl lg:text-8xl font-bold tracking-tighter mx-4 text-red-500 drop-shadow-lg">
              {marqueeText}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: Split View | Mobile: Stacked */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Square Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={friend.images.profileSquare}
                  alt={friend.name}
                  fill
                  className="object-cover object-[25%_center]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col justify-center"
            >
              <h2 className="text-sm font-medium tracking-widest text-white/60 uppercase mb-2 font-[family-name:var(--font-comfortaa)]">
                {friend.bio.title}
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-red-500">
                {friend.name}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-[family-name:var(--font-comfortaa)]">
                {friend.bio.description}
              </p>

              <a
                href={friend.bio.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity group  text-red-500"
              >
                Instagram
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1  text-red-500"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="px-6 pb-12 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          ← Back to all
        </Link>
      </div>
    </div>
  );
}
