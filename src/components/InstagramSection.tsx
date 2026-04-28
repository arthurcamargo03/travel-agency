const PHOTO_IDS = [
  "photo-1506905925346-21bda4d32df4",
  "photo-1514282401047-d79a71a590e8",
  "photo-1502602898657-3e91760cbb34",
  "photo-1512453979798-5ea266f8880c",
  "photo-1496442226666-8d4d0e62e6e9",
  "photo-1562602833-0f4ab2fc46e3",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-[#1d1d1f] py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              @exclusive.dreamss
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f7] tracking-tight leading-tight">
              Siga no Instagram.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/exclusive.dreamss/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/[0.15] text-[#f5f5f7] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            Seguir
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {PHOTO_IDS.map((id, i) => (
            <a
              key={i}
              href="https://www.instagram.com/exclusive.dreamss/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
              aria-label={`Ver post ${i + 1} no Instagram`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${id}?w=240&q=70)`,
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "w-6 h-6 text-[#c9a84c]"}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
