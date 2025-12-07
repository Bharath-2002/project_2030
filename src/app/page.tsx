'use client';

import Image from 'next/image';
import { getAllFriends } from '@/lib/data';

export default function HomePage() {
  const friends = getAllFriends();

  // Create enough cards for seamless loops
  const column1Cards = [...friends, ...friends, ...friends, ...friends];
  const column2Cards = [...friends, ...friends, ...friends, ...friends];
  const column3Cards = [...friends, ...friends, ...friends, ...friends];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Rotated container at 45 degrees */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          transform: 'rotate(45deg) scale(1.5)',
          transformOrigin: 'center center',
        }}
      >
        <div className="flex gap-5 md:gap-8">
          {/* Column 1 - Scrolls UP */}
          <div className="w-40 md:w-56 lg:w-64 h-[200vh] overflow-hidden relative">
            <div className="animate-scroll-up flex flex-col gap-5 md:gap-8">
              {column1Cards.map((friend, index) => (
                <Card key={`col1-${friend.id}-${index}`} friend={friend} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolls DOWN */}
          <div className="w-40 md:w-56 lg:w-64 h-[200vh] overflow-hidden relative">
            <div className="animate-scroll-down flex flex-col gap-5 md:gap-8">
              {column2Cards.map((friend, index) => (
                <Card key={`col2-${friend.id}-${index}`} friend={friend} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolls UP */}
          <div className="w-40 md:w-56 lg:w-64 h-[200vh] overflow-hidden relative">
            <div className="animate-scroll-up-slow flex flex-col gap-5 md:gap-8">
              {column3Cards.map((friend, index) => (
                <Card key={`col3-${friend.id}-${index}`} friend={friend} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

interface CardProps {
  friend: ReturnType<typeof getAllFriends>[0];
}

function Card({ friend }: CardProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
      <Image
        src={friend.images.homeCard}
        alt={friend.name}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
        <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-white/50 mb-0.5">
          {friend.bio.title}
        </p>
        <h3 className="text-xs md:text-sm font-semibold text-white truncate">
          {friend.name}
        </h3>
      </div>

      {/* Subtle border */}
      <div className="absolute inset-0 rounded-lg md:rounded-xl border border-white/10 pointer-events-none" />
    </div>
  );
}
