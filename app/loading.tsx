export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-4"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Elegant Gold Brand Pulse */}
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-widest text-white animate-pulse">
            ALINA
          </span>
          <span className="font-serif text-2xl md:text-3xl font-light tracking-widest text-gold-500 animate-pulse">
            VIP
          </span>
        </div>

        {/* Minimalist Shimmer Bar */}
        <div className="w-36 h-0.5 bg-charcoal-800 overflow-hidden rounded-full relative">
          <div className="w-16 h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full animate-shimmer" />
        </div>

        <p className="text-charcoal-400 font-sans text-xs tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
