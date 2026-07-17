"use client";

export default function PrintButton() {
  return (
    <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => window.print()}
        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow-lg transition-all"
      >
        Télécharger PDF
      </button>
      <a
        href="/"
        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-full shadow-lg transition-all"
      >
        ← Retour
      </a>
    </div>
  );
}
