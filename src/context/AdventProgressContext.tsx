// src/context/AdventProgressContext.tsx
// Gestió d'estat global: SELECT id:1, UPDATE unlocked_days, isDayAvailable.
// Compatible amb GitHub Pages (tot al client, "use client").
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { ADVENT_START_DATE } from "@/src/data/adventDays";

interface AdventProgressContextValue {
  unlockedDays: number[];
  loading: boolean;
  error: string | null;
  // Mode demo (?demo=1): tot obert per provar, desbloquejos només locals.
  isDemo: boolean;
  unlockDay: (day: number) => Promise<void>;
  isDayAvailable: (day: number, now?: Date) => boolean;
  isDayCompleted: (day: number) => boolean;
  getUnlockDateForDay: (day: number) => Date;
}

const AdventProgressContext = createContext<AdventProgressContextValue | null>(
  null
);

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function getUnlockDateForDay(day: number): Date {
  const base = startOfDay(ADVENT_START_DATE);
  const date = new Date(base);
  date.setDate(base.getDate() + (day - 1));
  return date;
}

export function AdventProgressProvider({ children }: { children: ReactNode }) {
  const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState(false);

  // Mode demo: ?demo=1 a la URL (només client, compatible amb Static Export).
  // En demo tot està obert i els desbloquejos NO es desen a Supabase.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setIsDemo(params.get("demo") === "1");
    } catch {
      setIsDemo(false);
    }
  }, []);

  // Càrrega inicial: SELECT fila id:1
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const { data, error: supaError } = await supabase
          .from("advent_progress")
          .select("unlocked_days")
          .eq("id", 1)
          .single();

        if (supaError) {
          // Si la taula/fila no existeix, no bloquegem la UI: mode local.
          console.warn("Supabase SELECT advent_progress:", supaError.message);
          setError(
            "No s'ha pogut carregar el progrés (revisa taula advent_progress id:1). Mode local."
          );
          setUnlockedDays([]);
          return;
        }
        setUnlockedDays((data?.unlocked_days as number[]) ?? []);
        setError(null);
      } catch (e) {
        console.warn(e);
        setError("Error de connexió amb Supabase. Mode local.");
        setUnlockedDays([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isDayCompleted = useCallback(
    (day: number) => unlockedDays.includes(day),
    [unlockedDays]
  );

  // Disponible si:
  // 1) data actual >= 30oct + (day-1)  (cada dia se n'obre un de nou)
  // 2) seqüencial: dia 1 sempre que arribi la data; dia N>1 només si N-1 completat
  // En mode demo (?demo=1): tot obert sense restriccions.
  const isDayAvailable = useCallback(
    (day: number, now: Date = new Date()) => {
      if (day < 1 || day > 24) return false;
      if (isDemo) return true;
      const today = startOfDay(now);
      const unlockDate = startOfDay(getUnlockDateForDay(day));
      if (today < unlockDate) return false;
      if (day === 1) return true;
      return unlockedDays.includes(day - 1);
    },
    [unlockedDays, isDemo]
  );

  const unlockDay = useCallback(
    async (day: number) => {
      if (unlockedDays.includes(day)) return;
      const next = [...unlockedDays, day].sort((a, b) => a - b);
      // Optimista: actualitza UI de seguida
      setUnlockedDays(next);
      // En demo no toquem Supabase: progrés només local per no embrutar el regal.
      if (isDemo) return;
      try {
        const { error: supaError } = await supabase
          .from("advent_progress")
          .update({ unlocked_days: next })
          .eq("id", 1);
        if (supaError) {
          console.warn("Supabase UPDATE advent_progress:", supaError.message);
          setError("No s'ha pogut desar a Supabase. Progrés només local.");
        }
      } catch (e) {
        console.warn(e);
        setError("No s'ha pogut desar a Supabase. Progrés només local.");
      }
    },
    [unlockedDays, isDemo]
  );

  const value = useMemo(
    () => ({
      unlockedDays,
      loading,
      error,
      isDemo,
      unlockDay,
      isDayAvailable,
      isDayCompleted,
      getUnlockDateForDay,
    }),
    [
      unlockedDays,
      loading,
      error,
      isDemo,
      unlockDay,
      isDayAvailable,
      isDayCompleted,
    ]
  );

  return (
    <AdventProgressContext.Provider value={value}>
      {children}
    </AdventProgressContext.Provider>
  );
}

export function useAdventProgress(): AdventProgressContextValue {
  const ctx = useContext(AdventProgressContext);
  if (!ctx) {
    throw new Error(
      "useAdventProgress ha d'usar-se dins de <AdventProgressProvider>"
    );
  }
  return ctx;
}
