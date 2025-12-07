import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4">404</h1>
      <p className="text-xl md:text-2xl text-white/60 mb-8">Page not found</p>
      <Link
        href="/"
        className="text-lg font-medium hover:opacity-70 transition-opacity"
      >
        ← Back to home
      </Link>
    </div>
  );
}
