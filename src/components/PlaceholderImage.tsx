'use client';

interface PlaceholderImageProps {
  name: string;
  type: 'card' | 'hero' | 'square';
  className?: string;
}

export default function PlaceholderImage({ name, type, className = '' }: PlaceholderImageProps) {
  const dimensions = {
    card: { width: 320, height: 480 },
    hero: { width: 1920, height: 1080 },
    square: { width: 800, height: 800 },
  };

  const { width, height } = dimensions[type];

  return (
    <div
      className={`bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-zinc-600 mb-2">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="text-sm text-zinc-700 uppercase tracking-widest">
          {name}
        </div>
      </div>
    </div>
  );
}
