// src/data/adventDays.ts
// Edita aquí les paraules (EN MAJÚSCULES), pistes, frases i cartes.
// L'usuari només ha d'omplir aquest fitxer.

export interface DayContent {
  day: number;
  wordleSolution: string;
  puzzleClue: string;
  phrase: string;
  letterSnippet: string;
  downloadUrl?: string;
}

// Data d'inici: 30 octubre 2026
// Dia 1 = 30 oct, dia 2 = 31 oct, ..., dia 24 = 22 nov
export const ADVENT_START_DATE = new Date(2026, 9, 30); // mes 9 = octubre

export const adventDays: DayContent[] = Array.from(
  { length: 24 },
  (_, i) => {
    const day = i + 1;
    return {
      day,
      wordleSolution: `PARAULA${day}`,
      puzzleClue: `Pista del dia ${day}: canvia'm al fitxer adventDays.ts`,
      phrase: `Frase del dia ${day}: canvia'm al fitxer adventDays.ts`,
      letterSnippet: `Fragment de carta del dia ${day}: Estimada, cada moment amb tu és especial... (canvia'm)`,
      // downloadUrl: `/regals/dia${day}.pdf`, // opcional: descomenta quan tinguis fitxers a /public/regals/
    };
  }
);

// Exemples reals (esborra els placeholders quan tinguis el contingut):
// Dia 1 i 2 d'exemple segons Instruccions.md:
// {
//   day: 1,
//   wordleSolution: "HOLA",
//   puzzleClue: "La paraula clàssica per començar.",
//   phrase: "Comencem aquesta aventura junts.",
//   letterSnippet: "Estimada, ",
// },
// {
//   day: 2,
//   wordleSolution: "QUÈ",
//   puzzleClue: "Una pregunta sobre ella.",
//   phrase: "Un dia ple de sorpreses.",
//   letterSnippet: "cada moment amb tu és especial.",
// },

export function getDayContent(day: number): DayContent | undefined {
  return adventDays.find((d) => d.day === day);
}
