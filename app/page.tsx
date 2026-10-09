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
          CALENDARI D&apos;ADVENT
        </h1>
        <p className="text-sm sm:text-base text-yellow-300 mt-2 tracking-widest">
          ★ CYBERPUNK EDITION · 24 DIES · 24 WORDLES ★
        </p>
        <p className="text-xs text-zinc-500 mt-3 max-w-xl mx-auto">
          Cada dia a partir del 30 d&apos;octubre se&apos;n desbloqueja un de
          nou. Resol el Wordle per llegir la frase i la carta.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <AdventGrid />
        <footer className="text-center text-[11px] text-zinc-600 mt-10">
          Fet amb 💜 · Dades a <code>src/data/adventDays.ts</code> · Progrés a
          Supabase <code>advent_progress id:1</code>
        </footer>
      </main>
    </div>
  );
}
