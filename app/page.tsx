import { AdventGrid } from "@/src/components/AdventGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-mono">
      {/* Header cyberpunk */}
      <header className="text-center pt-10 pb-6 px-4">
        <p className="text-xs tracking-[0.4em] text-cyan-400 mb-2">
          // REGAL D&apos;ANIVERSARI //
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-fuchsia-500 drop-shadow-[0_0_15px_#d946ef]">
          CALENDARI D&apos;ADVENT PER LA CLARA
        </h1>
        <p className="text-sm sm:text-base text-yellow-300 mt-2 tracking-widest">
          ★ PER LA CARINYA EIDICO ANIVERSARI  · 24 DIES · 24 WORDLES ★
        </p>
        <p className="text-xs text-zinc-500 mt-3 max-w-xl mx-auto">
          Cada dia a partir de que tinguis 19 anys es desbloqueja un de
          nou. Resol la porva per obtenir un regal.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <AdventGrid />
        <footer className="text-center text-[11px] text-zinc-600 mt-10">
          Fet amb 💛 de part del Patito Biel.
        </footer>
      </main>
    </div>
  );
}
