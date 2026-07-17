export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-slate-600 text-xs">
          © {year}{" "}
          <span className="text-slate-400 font-semibold">DevDonald</span>. Tous droits réservés.
        </p>
        <p className="text-slate-700 text-xs">
          Fait avec ❤️ au Bénin
        </p>
      </div>
    </footer>
  );
}
