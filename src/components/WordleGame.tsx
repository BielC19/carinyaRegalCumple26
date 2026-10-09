// src/components/WordleGame.tsx
// Wordle longitud variable, 6 intents com l'original + teclat en pantalla.
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type LetterStatus = "correct" | "present" | "absent" | "empty" | "typing";

const MAX_ATTEMPTS = 6;

const KEYBOARD_ROWS: string[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const NUMBER_ROW = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function evaluateGuess(
  guess: string,
  solution: string
): Exclude<LetterStatus, "empty" | "typing">[] {
  const len = solution.length;
  const result: Exclude<LetterStatus, "empty" | "typing">[] = Array(len).fill(
    "absent"
  );
  const remaining = new Map<string, number>();

  for (let i = 0; i < len; i++) {
    if (guess[i] === solution[i]) {
      result[i] = "correct";
    } else {
      remaining.set(solution[i], (remaining.get(solution[i]) ?? 0) + 1);
    }
  }
  for (let i = 0; i < len; i++) {
    if (result[i] === "correct") continue;
    const ch = guess[i];
    const count = remaining.get(ch) ?? 0;
    if (count > 0) {
      result[i] = "present";
      remaining.set(ch, count - 1);
    } else {
      result[i] = "absent";
    }
  }
  return result;
}

function cellColor(status: LetterStatus): string {
  switch (status) {
    case "correct":
      return "bg-green-500 border-green-500 text-black shadow-[0_0_12px_#22c55e]";
    case "present":
      return "bg-yellow-400 border-yellow-400 text-black shadow-[0_0_12px_#facc15]";
    case "absent":
      return "bg-zinc-800 border-zinc-700 text-zinc-400";
    case "typing":
      return "bg-black border-fuchsia-500 text-fuchsia-200 shadow-[0_0_10px_#d946ef]";
    default:
      return "bg-black border-zinc-700 text-zinc-200";
  }
}

function keyColor(status?: LetterStatus): string {
  switch (status) {
    case "correct":
      return "bg-green-500 text-black";
    case "present":
      return "bg-yellow-400 text-black";
    case "absent":
      return "bg-zinc-800 text-zinc-500";
    default:
      return "bg-zinc-900 text-cyan-200 border border-cyan-500/40 hover:bg-zinc-800";
  }
}

export function WordleGame({
  solution: rawSolution,
  onWin,
}: {
  solution: string;
  onWin: () => void;
}) {
  const solution = useMemo(() => rawSolution.toUpperCase(), [rawSolution]);
  const wordLen = solution.length;
  const needsNumbers = useMemo(() => /[0-9]/.test(solution), [solution]);

  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState("");

  const evaluations = useMemo(
    () => guesses.map((g) => evaluateGuess(g, solution)),
    [guesses, solution]
  );

  const keyStatus = useMemo(() => {
    const map = new Map<string, LetterStatus>();
    const rank = (s: LetterStatus) =>
      s === "correct" ? 3 : s === "present" ? 2 : s === "absent" ? 1 : 0;
    guesses.forEach((g, gi) => {
      const ev = evaluations[gi];
      g.split("").forEach((ch, i) => {
        const prev = map.get(ch) ?? "empty";
        if (rank(ev[i]) > rank(prev)) map.set(ch, ev[i]);
      });
    });
    return map;
  }, [guesses, evaluations]);

  const submit = useCallback(() => {
    if (status !== "playing") return;
    if (current.length !== wordLen) {
      setMessage(`Calen ${wordLen} lletres`);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    const guess = current.toUpperCase();
    const next = [...guesses, guess];
    setGuesses(next);
    setCurrent("");
    setMessage("");
    if (guess === solution) {
      setStatus("won");
      onWin();
    } else if (next.length >= MAX_ATTEMPTS) {
      setStatus("lost");
    }
  }, [current, guesses, solution, status, wordLen, onWin]);

  const addLetter = useCallback(
    (ch: string) => {
      if (status !== "playing") return;
      if (current.length >= wordLen) return;
      setCurrent((c) => (c + ch).toUpperCase());
    },
    [current.length, status, wordLen]
  );

  const delLetter = useCallback(() => {
    if (status !== "playing") return;
    setCurrent((c) => c.slice(0, -1));
  }, [status]);

  // Teclat físic
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (status !== "playing") return;
      if (e.key === "Enter") {
        submit();
      } else if (e.key === "Backspace") {
        delLetter();
      } else if (/^[a-zA-Z0-9çÇàèéíïóòúüñÑ]$/.test(e.key) && e.key.length === 1) {
        addLetter(e.key);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submit, addLetter, delLetter, status]);

  const rows: (string | null)[][] = Array.from(
    { length: MAX_ATTEMPTS },
    (_, r) => {
      if (r < guesses.length) return guesses[r].split("");
      if (r === guesses.length)
        return [
          ...current.split(""),
          ...Array(wordLen - current.length).fill(null),
        ];
      return Array(wordLen).fill(null);
    }
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className={`grid gap-1.5 ${shake ? "animate-pulse" : ""}`}>
        {rows.map((row, r) => (
          <div
            key={r}
            className="grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${wordLen}, minmax(0,1fr))` }}
          >
            {row.map((ch, c) => {
              let st: LetterStatus = "empty";
              if (r < guesses.length) st = evaluations[r][c];
              else if (r === guesses.length && ch) st = "typing";
              return (
                <div
                  key={c}
                  className={`aspect-square flex items-center justify-center text-lg sm:text-xl font-mono font-bold border-2 rounded ${cellColor(st)}`}
                >
                  {ch ?? ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {message && (
        <p className="text-center text-yellow-300 font-mono text-sm mt-3">
          {message}
        </p>
      )}
      {status === "won" && (
        <p className="text-center text-green-400 font-mono font-bold mt-3 animate-pulse">
          ✓ CORRECTE! Dia desbloquejat
        </p>
      )}
      {status === "lost" && (
        <p className="text-center text-pink-500 font-mono text-sm mt-3">
          Solució: <span className="font-bold">{solution}</span> — torna-ho a
          provar (recarrega)
        </p>
      )}

      {/* Teclat en pantalla com l'original */}
      <div className="mt-4 space-y-1.5 select-none">
        {needsNumbers && (
          <div className="flex gap-1 justify-center">
            {NUMBER_ROW.map((k) => (
              <button
                key={k}
                onClick={() => addLetter(k)}
                className={`flex-1 max-w-9 h-11 rounded font-mono text-sm font-bold ${keyColor(keyStatus.get(k))}`}
              >
                {k}
              </button>
            ))}
          </div>
        )}
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1 justify-center">
            {row.map((k) => {
              if (k === "ENTER")
                return (
                  <button
                    key={k}
                    onClick={submit}
                    className="px-2 h-12 rounded bg-fuchsia-600 text-black font-mono text-xs font-bold hover:bg-fuchsia-400"
                  >
                    ⏎
                  </button>
                );
              if (k === "⌫")
                return (
                  <button
                    key={k}
                    onClick={delLetter}
                    className="px-2 h-12 rounded bg-cyan-600 text-black font-mono text-lg font-bold hover:bg-cyan-400"
                  >
                    ⌫
                  </button>
                );
              return (
                <button
                  key={k}
                  onClick={() => addLetter(k)}
                  className={`flex-1 max-w-9 h-12 rounded font-mono text-sm font-bold ${keyColor(keyStatus.get(k))}`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <p className="text-center text-zinc-500 font-mono text-[11px] mt-2">
        {wordLen} lletres · {MAX_ATTEMPTS} intents · Pots usar teclat físic o
        tàctil
      </p>
    </div>
  );
}
