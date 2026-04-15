export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Ícone do Instagram */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
          <InstagramIcon />
        </div>

        <p className="text-yellow-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Acompanhe a nossa rotina
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Siga no{" "}
          <span className="text-yellow-400">Instagram</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Destinos incríveis, bastidores das viagens, dicas exclusivas e muito mais.
          Fique por dentro de tudo que acontece na Exclusive Dreams.
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/40"
        >
          <InstagramIcon />
          @exclusivedreams.viagens
        </a>

        {/* Indicador de fotos */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-2 opacity-60">
          {[
            "photo-1506905925346-21bda4d32df4",
            "photo-1514282401047-d79a71a590e8",
            "photo-1502602898657-3e91760cbb34",
            "photo-1512453979798-5ea266f8880c",
            "photo-1496442226666-8d4d0e62e6e9",
            "photo-1562602833-0f4ab2fc46e3",
          ].map((id, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden bg-zinc-800"
              style={{
                backgroundImage: `url(https://images.unsplash.com/${id}?w=200&q=60)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        <p className="text-gray-600 text-xs mt-3">Siga para ver mais fotos e vídeos exclusivos ↑</p>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
