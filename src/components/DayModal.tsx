// src/components/DayModal.tsx
"use client";

import { useState } from "react";
import type { DayContent } from "@/src/data/adventDays";
import { useAdventProgress } from "@/src/context/AdventProgressContext";
import { WordleGame } from "@/src/components/WordleGame";

export function DayModal({
  content,
  onClose,
}: {
  content: DayContent;
  onClose: () => void;
}) {
  const { unlockDay, isDayCompleted } = useAdventProgress();
  const [unlocked, setUnlocked] = useState(isDayCompleted(content.day));

  async function handleWin() {
    await unlockDay(content.day);
    setUnlocked(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-black border-2 border-fuchsia-500 rounded-lg p-5 shadow-[0_0_30px_#d946ef] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-mono text-xl font-bold text-cyan-300">
            DIA {content.day}
          </h2>
          <button
            onClick={onClose}
            className="font-mono text-zinc-400 hover:text-pink-500 text-xl px-2"
            aria-label="Tancar"
          >
            ✕
          </button>
        </div>

        <p className="font-mono text-sm text-yellow-300 border border-yellow-400/40 rounded p-2 mb-4 bg-yellow-400/5">
          💡 {content.puzzleClue}
        </p>

        {!unlocked ? (
          <WordleGame solution={content.wordleSolution} onWin={handleWin} />
        ) : (
          <div className="space-y-4 animate-pulse-once">
            <div className="border border-green-500/60 rounded p-3 bg-green-500/10">
              <p className="font-mono text-green-300 text-sm mb-1">FRASE:</p>
              <p className="font-mono text-lg text-white">{content.phrase}</p>
            </div>
            <div className="border border-cyan-500/60 rounded p-3 bg-cyan-500/10">
              <p className="font-mono text-cyan-300 text-sm mb-1">CARTA:</p>
              <p className="font-mono text-sm text-zinc-100 whitespace-pre-wrap">
                {content.letterSnippet}
              </p>
            </div>
            {content.downloadUrl && (
              <a
                href={content.downloadUrl}
                download
                className="block text-center font-mono font-bold bg-yellow-400 text-black rounded py-2 hover:bg-yellow-300 shadow-[0_0_15px_#facc15]"
              >
                ⬇ DESCARREGAR REGAL
              </a>
            )}
            {/* Permet rejugar */}
            <details className="text-zinc-500 font-mono text-xs">
              <summary className="cursor-pointer hover:text-zinc-300">
                Tornar a jugar el puzzle
              </summary>
              <div className="mt-2">
                <WordleGame
                  solution={content.wordleSolution}
                  onWin={() => {}}
                />
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}
