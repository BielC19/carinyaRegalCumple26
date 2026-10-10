// src/components/AdventGrid.tsx
"use client";

import { useEffect, useState } from "react";
import { adventDays } from "@/src/data/adventDays";
import { useAdventProgress } from "@/src/context/AdventProgressContext";
import { DayModal } from "@/src/components/DayModal";
import { getDayContent } from "@/src/data/adventDays";

export function AdventGrid() {
  const { isDayAvailable, isDayCompleted, loading, error, isDemo } =
    useAdventProgress();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedContent =
    selectedDay !== null ? getDayContent(selectedDay) : undefined;

  // Evita hydration mismatch: fins que el client no munta,
  // mostra el mateix skeleton que el servidor prerenderitza.
  if (!mounted || loading) {
    return (
      <p className="text-center font-mono text-cyan-300 animate-pulse mt-10">
        Carregant calendari... ▓▓▓
      </p>
    );
  }

  return (
    <>
      {isDemo && (
        <p className="text-center font-mono text-xs text-black bg-yellow-400 rounded p-2 mb-4 max-w-xl mx-auto font-bold">
          🧪 MODE DEMO (?demo=1) — tot obert per provar. Els desbloquejos NO
          es desen.{" "}
          <a href="./" className="underline">
            Sortir del demo
          </a>
        </p>
      )}
      {error && (
        <p className="text-center font-mono text-xs text-yellow-400 border border-yellow-500/40 rounded p-2 mb-4 max-w-xl mx-auto">
          ⚠ {error}
        </p>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {adventDays.map(({ day }) => {
          const completed = isDayCompleted(day);
          const available = completed || isDayAvailable(day);
          return (
            <button
              key={day}
              disabled={!available}
              onClick={() => setSelectedDay(day)}
              className={`aspect-square rounded border-2 font-mono font-bold text-2xl transition-all
                ${
                  completed
                    ? "bg-green-500/15 border-green-400 text-green-300 shadow-[0_0_15px_#22c55e]"
                    : available
                      ? "bg-black border-fuchsia-500 text-fuchsia-300 shadow-[0_0_15px_#d946ef] hover:bg-fuchsia-500 hover:text-black hover:scale-105 cursor-pointer"
                      : "bg-zinc-950 border-zinc-800 text-zinc-700 cursor-not-allowed"
                }`}
            >
              <span className="block text-2xl">
                {completed ? "✓" : available ? day : "🔒"}
              </span>
              <span className="block text-[10px] tracking-widest opacity-70">
                {completed ? `DIA ${day}` : available ? `DIA ${day}` : "XIFRAT"}
              </span>
            </button>
          );
        })}
      </div>

      {selectedContent && (
        <DayModal
          content={selectedContent}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  );
}
