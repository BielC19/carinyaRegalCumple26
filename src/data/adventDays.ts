// src/data/adventDays.ts
// ============================================================
//  COM OMPIR AQUEST FITXER (només has de tocar el que posa 👈)
// ------------------------------------------------------------
//  1. Per cada dia, canvia el text que hi ha ENTRE COMETES.
//  2. NO toquis els números de "day:" ni esborris cap coma o clau.
//  3. "wordleSolution": la paraula EN MAJÚSCULES i sense espais.
//     Pot tenir les lletres que vulguis (el tauler s'adapta sol).
//  4. "puzzleClue": la pista (es veu ABANS d'endevinar, no hi posis la resposta).
//  5. "phrase" i "letterSnippet": es veuen NOMÉS quan s'encerta.
//  6. "downloadUrl": deixa la línia comentada (amb //) si aquell dia
//     no té regal. Si en té, posa el fitxer a public/regals/ i escriu
//     "/regals/nom-del-fitxer.pdf".
// ============================================================

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

export const adventDays: DayContent[] = [
  {
    day: 1,
    wordleSolution: "ADORABLE", // 👈 CANVIA: ex. "PETONS"
    puzzleClue: "Pista: Ets ...", // 👈 CANVIA
    phrase: "Ets adorable i la persona mes atractiva del mon. Preciosa meva", // 👈 CANVIA
    letterSnippet: "Carta del dia 1: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia1.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 2,
    wordleSolution: "Brillant", // 👈 CANVIA
    puzzleClue: "Pista: ets com una estrella.", // 👈 CANVIA
    phrase: "Ets birllan, bonica i estas bonisima com una estrella que admiras del cel.", // 👈 CANVIA
    letterSnippet: "Carta del dia 2: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia2.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 3,
    wordleSolution: "CRACIO", // 👈 CANVIA
    puzzleClue: "Pista: ets la millor ... del mon.", // 👈 CANVIA
    phrase: "Ets perque ets cullunera, collonuda i sobretot es la carinya guapaa.", // 👈 CANVIA
    letterSnippet: "Carta del dia 3: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia3.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 4,
    wordleSolution: "DELICADA", // 👈 CANVIA
    puzzleClue: "Pista: Ho ets amb mi i tothom", // 👈 CANVIA
    phrase: "No nomes ets delicada, tambe ets divertidisima, deliciosa i etas destruible juju.", // 👈 CANVIA
    letterSnippet: "Carta del dia 4: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia4.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 5,
    wordleSolution: "PARAULA5", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 5: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia5.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 6,
    wordleSolution: "PARAULA6", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 6: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia6.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 7,
    wordleSolution: "PARAULA7", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 7: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia7.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 8,
    wordleSolution: "PARAULA8", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 8: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia8.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 9,
    wordleSolution: "PARAULA9", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 9: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia9.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 10,
    wordleSolution: "PARAULA10", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 10: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia10.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 11,
    wordleSolution: "PARAULA11", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 11: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia11.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 12,
    wordleSolution: "PARAULA12", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 12: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia12.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 13,
    wordleSolution: "PARAULA13", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 13: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia13.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 14,
    wordleSolution: "PARAULA14", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 14: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia14.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 15,
    wordleSolution: "PARAULA15", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 15: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia15.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 16,
    wordleSolution: "PARAULA16", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 16: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia16.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 17,
    wordleSolution: "PARAULA17", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 17: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia17.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 18,
    wordleSolution: "PARAULA18", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 18: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia18.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 19,
    wordleSolution: "PARAULA19", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 19: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia19.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 20,
    wordleSolution: "PARAULA20", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 20: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia20.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 21,
    wordleSolution: "PARAULA21", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 21: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia21.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 22,
    wordleSolution: "PARAULA22", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 22: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia22.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 23,
    wordleSolution: "PARAULA23", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 23: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia23.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 24,
    wordleSolution: "PARAULA24", // 👈 CANVIA
    puzzleClue: "Pista: ", // 👈 CANVIA
    phrase: "", // 👈 CANVIA
    letterSnippet: "Carta del dia 24: escriu aquí el tros de carta.", // 👈 CANVIA
    // downloadUrl: "/regals/dia24.pdf", // 👈 descomenta només si hi ha regal
  },
];

export function getDayContent(day: number): DayContent | undefined {
  return adventDays.find((d) => d.day === day);
}
