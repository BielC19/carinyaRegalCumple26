// src/components/DayView.tsx
// Vista compartida: serveix per al modal (home) i per a la ruta /[day] (híbrid).
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDayContent } from "@/src/data/adventDays";
import {
  useAdventProgress,
  getUnlockDateForDay,
} from "@/src/context/AdventProgressContext";
import { WordleGame } from "@/src/components/WordleGame";

export function DayView({ day }: { day: number }) {
  const { isDayAvailable, isDayCompleted, unlockDay, loading } =
    useAdventProgress();
  const content = getDayContent(day);
  const [justWon, setJustWon] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [unlockLabel, setUnlockLabel] = useState("");

  useEffect(() => {
    setMounted(true);
    setUnlockLabel(getUnlockDateForDay(day).toLocaleDateString("ca-ES"));
  }, [day]);

  if (!content || day < 1 || day > 24) {
    return (
      <div className="text-center font-mono text-pink-500 mt-10">
        Dia inexistent (1-24).
        <br />
        <Link href="/" className="underline text-cyan-300">
          Tornar
        </Link>
      </div>
    );
  }

  const completed = isDayCompleted(day) || justWon;
  const available = mounted && !loading && (completed || isDayAvailable(day));

  if (!mounted || loading) {
    return (
      <p className="text-center font-mono text-cyan-300 animate-pulse mt-10">
        Carregant dia {day}... ▓▓▓
      </p>
    );
  }

  if (!available) {
    return (
      <div className="max-w-md mx-auto text-center border-2 border-zinc-800 rounded p-6 bg-zinc-950">
        <p className="font-mono text-4xl mb-2">🔒</p>
        <h2 className="font-mono text-xl text-zinc-400">DIA {day} XIFRAT</h2>
        <p className="font-mono text-sm text-zinc-500 mt-2" suppressHydrationWarning>
          Es desbloqueja el {unlockLabel}{" "}
          (i cal haver completat el dia {day - 1}).
        </p>
        <Link
          href="/"
          className="inline-block mt-4 font-mono text-sm text-cyan-300 underline"
        >
          ← Tornar a la graella
        </Link>
      </div>
    );
  }

  async function handleWin() {
    await unlockDay(day);
    setJustWon(true);
  }

  return (
    <div className="max-w-lg mx-auto bg-black border-2 border-fuchsia-500 rounded-lg p-5 shadow-[0_0_30px_#d946ef]">
      <h2 className="font-mono text-xl font-bold text-cyan-300 mb-2">
        DIA {day}
      </h2>
      <p className="font-mono text-sm text-yellow-300 border border-yellow-400/40 rounded p-2 mb-4 bg-yellow-400/5">
        💡 {content.puzzleClue}
      </p>
      {!completed ? (
        <WordleGame solution={content.wordleSolution} onWin={handleWin} />
      ) : (
        <div className="space-y-4">
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
              className="block text-center font-mono font-bold bg-yellow-400 text-black rounded py-2 hover:bg-yellow-300"
            >
              ⬇ DESCARREGAR REGAL
            </a>
          )}
        </div>
      )}
      <Link
        href="/"
        className="inline-block mt-4 font-mono text-sm text-cyan-300 underline"
      >
        ← Tornar a la graella
      </Link>
    </div>
  );
}
