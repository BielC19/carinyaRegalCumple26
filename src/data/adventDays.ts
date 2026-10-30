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
    wordleSolution: "ACHUCHURRABLE",
    puzzleClue: "Pista: Ets ...",
    phrase: "Ets achuchurrable perque sempre que estic una mica malament m'ajudes infinit. Ets la mes adorable i la persona mes atractiva del mon. Preciosa meva",
    letterSnippet: "Carta del dia 1: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia1.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 2,
    wordleSolution: "BRILLANT",
    puzzleClue: "Pista: ets com una estrella.",
    phrase: "Ets birllan, bonica i estas bonisima com una estrella que admiras del cel.",
    letterSnippet: "Carta del dia 2: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia2.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 3,
    wordleSolution: "CREACIO",
    puzzleClue: "Pista: ets la millor ... del mon.",
    phrase: "Ets la millor creacio mai feta perque ets cullunera, collonuda i sobretot ets CASA i la carinya guapaa.",
    letterSnippet: "Carta del dia 3: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia3.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 4,
    wordleSolution: "DELICADA",
    puzzleClue: "Pista: Ho ets amb mi i tothom",
    phrase: "A part de ser delicada em quides i em tractes super de be, tambe ets divertidisima, deliciosa i etas destruible juju.",
    letterSnippet: "Carta del dia 4: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia4.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 5,
    wordleSolution: "ESTIMACIO",
    puzzleClue: "Pista: es el q fem sempre i es el que ets per mi",
    phrase: "Sempre ens estimem tot i que no sempre tinguem el millor dia, pero tu sempre has sigut i seras la meva estimacio. T'estim",
    letterSnippet: "Carta del dia 5: escriu aquí el tros de carta.", 
    // downloadUrl: "/regals/dia5.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 6,
    wordleSolution: "FIAUM",
    puzzleClue: "Pista: Jo amb el cotxe quan t'ha passat algo'",
    phrase: "Ets lo mes imprtant que m'ha passat a la vida i per tu vaig FIAAAUUUMM quan sigui i on sigui. Ets la millor figura del planeta ",
    letterSnippet: "Carta del dia 6: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia6.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 7,
    wordleSolution: "GENEROSA",
    puzzleClue: "Pista: la mes ... perque sempre em ...(massa obbi si ho possa).",
    phrase: "Ets la més graciosa i generosa amb tot el que tens, amb el que et sobre mes i amb el que et falta o vas mes justa sempre ho comparteixes amb mi sempre. Ets la millor GUAPAAA",
    letterSnippet: "Carta del dia 7: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia7.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 8,
    wordleSolution: "HERMOSA",
    puzzleClue: "Pista: Ho ets infinitament per dints i per fora i m'agrades per aixo (entre altres coes)",
    phrase: "Sempre estas guapisima pero el que passa es que tu ets la mes herosa de tots els temps amormeu. jujuu t'estiimmm 💛",
    letterSnippet: "Carta del dia 8: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia8.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 9,
    wordleSolution: "IMPRESIONANT",
    puzzleClue: "Pista: Cada dia que veig que fas el que et proposes i fes algunes creus( o no) . ......",
    phrase: "Sempre que et veig fent que a mi em costrai un minim nomes pel fet de que tu t'ho has proposat i no t'importa res mes, es una de les coses que m'inpresionen de tu, a part del teu caparrot que es llestisim i impresionantisim. mercii per tot amorr ",
    letterSnippet: "Carta del dia 9: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia9.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 10,
    wordleSolution: "JOIA",
    puzzleClue: "Pista: si no fosis un esser viu series la ...... mes valuosa de tot el mon i tothom et voldria tenir (com ara)",
    phrase: "Em sento afortinadisim d'estar aqui amb tu pero se que si no hi fosis i fosis una pedra, seria la joia mes preciosa i hermosa del mon (tal i com jo et concidero araaaa)",
    letterSnippet: "Carta del dia 10: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia10.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 11,
    wordleSolution: "KOALA",
    puzzleClue: "Pista: nosaltres idealment en versio animal seriem un ...",
    phrase: "Ojala podernos passar tot el dia estiats i abraçats com a koales, perque t'estim infiniitt i vull poder passar un bon temps de qualitat i descansatiu amb tu que ets l'amor de la meva vida guapa",
    letterSnippet: "Carta del dia 11: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia11.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 12,
    wordleSolution: "LLUM",
    puzzleClue: "Pista: Ara posarem ....... a la. (si segueixo es massa obii)",
    phrase: "Carinya, tu es la meva llum que sempre qu estic perdut o no se exactament que fer tu es la llum que m'indica sempre el cami correcte i el millor, sobretot perque semrpe es amb tu amor.",
    letterSnippet: "Carta del dia 12: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia12.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 13,
    wordleSolution: "MAJESTUOSA",
    puzzleClue: "Pista: Espero que et sentis ...... o t'ho pugui fer sentir sempreee",
    phrase: "Ets la meva reina i et mereixes que et tractin majestusament, per que tinguis una vida magica i magnifica. T'estim Diosa💛",
    letterSnippet: "Carta del dia 13: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia13.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 14,
    wordleSolution: "NIGUIRI",
    puzzleClue: "Pista: Estas mes bona que el ... que ens mengem a. ....",
    phrase: "Ets la mes natural, neutre quan veus la gent que disctueix i sobretot estas mes bona que res al mon nena meva",
    letterSnippet: "Carta del dia 14: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia14.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 15,
    wordleSolution: "OBSERVADORA",
    puzzleClue: "Pista: ho ets molt i va molt be perque aixi ho ...(obi) tot.",
    phrase: "Tot i que podria haver posat, objectiva  ja que sempre em dones la teva opinio i es molt util que ho fais des d'aquesta part, m'ha semblat que tambe ets molt observadora el que t'ajuda a apendre rapid, i es una cosa que admiro de tuu guapaa.",
    letterSnippet: "Carta del dia 15: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia15.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 16,
    wordleSolution: "PREOCUPADA",
    puzzleClue: "Pista: ho ets i a vagades massa amb tothom, jijii.",
    phrase: "M'encanta que et preocupis tant perla gent perque aprenc molt de tu i m'ajuda infinit, ets la meva persona preferida, ja que a vagades m'has hagut de fer de phsicologa i de tot estic infinitametn agreit de que sigui aixi amb mi i amb tothom. tots som els mes afortunats de tenirtee carinya.",
    letterSnippet: "Carta del dia 16: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia16.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 17,
    wordleSolution: "QUALITAT",
    puzzleClue: "Pista: tu ets tota .... ; t'agraden les coses de ...",
    phrase: "Ets la persona de mes qualitat que m'he trobat mai, per lo guapa que ets la qualitat i quantitat d'empatia i inteligencia entre altres qualitats",
    letterSnippet: "Carta del dia 17: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia17.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 18,
    wordleSolution: "REFUGI",
    puzzleClue: "Pista: Ets (paraula obia), ets el memu ....",
    phrase: "Ets el meu lloc segur i de confiança al que sempre que em passa la minima cosa i ho necestio se que et tinc perque ets la millor del mon ammooorrr",
    letterSnippet: "Carta del dia 18: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia18.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 19,
    wordleSolution: "SOMRIURE",
    puzzleClue: "Pista: el que m'agrada mes de la teva c...",
    phrase: "El teu somriure fa que cada cop que et miro em posis tonto de lo guapa, mona i preciosa que ets.",
    letterSnippet: "Carta del dia 19: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia19.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 20,
    wordleSolution: "TENDRESA",
    puzzleClue: "Pista: Ets com filet ben bo sence greix. Ets. ......",
    phrase: "Els teus mimos i les abraçades son lo millor del mon, ets el meu tresor més preciat i a sobre la mes tendre del mon (per aixo estas tan bona) jujuuu",
    letterSnippet: "Carta del dia 20: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia20.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 21,
    wordleSolution: "UNICA",
    puzzleClue: "Pista: nomes pots ser tu",
    phrase: "Soc molt feliç de que no hi pugui haver ningu com tu a tot l'univers, perque ets unica i espercial, el que fa que t'estimi mes que a res.",
    letterSnippet: "Carta del dia 21: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia21.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 22,
    wordleSolution: "VICTORIOSA",
    puzzleClue: "Pista: Tu sempre surt ..........",
    phrase: "Ets una campiona perque sempre guanys a tot el que et proposes, estic com orgullos de tu i de lo valenta que ets al lluitar tant per tot el que vols.",
    letterSnippet: "Carta del dia 22: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia22.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 23,
    wordleSolution: "WOW",
    puzzleClue: "Pista: El que penso en veuret cada dia",
    phrase: "M'inpresiones cada cop que et miro a aquesta cara guapa, t'admiro tant que m'inpresiones",
    letterSnippet: "Carta del dia 23: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia23.pdf", // 👈 descomenta només si hi ha regal
  },
  {
    day: 24,
    wordleSolution: "XULO",
    puzzleClue: "Pista: Si fosis una joguina seria super ...",
    phrase: "Xula, te dos dignificats, un et defineix molt i l'altre poc, perque tu ets super guai i la millor i a sobre tractes super be a totho i ets molt molt molt maja sempreee",
    letterSnippet: "Carta del dia 24: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia24.pdf", // 👈 descomenta només si hi ha regal
  },
    {
    day: 25,
    wordleSolution: "YOUTUBE",
    puzzleClue: "Pista: Nosaltres sempre i passem un bon temps",
    phrase: "Merci per tants moment bonics amb tu al costat rient o entrentinguts pero semper els dos, un i l'altre. t'estimoo🥹💛",
    letterSnippet: "Carta del dia 24: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia24.pdf", // 👈 descomenta només si hi ha regal
  },
    {
    day: 26,
    wordleSolution: "ZONA",
    puzzleClue: "Pista: Ets la meva ...",
    phrase: "Ets la meva zona de confort, ara i sempre i estic molt orgullos de nosaltres i del que hem construit",
    letterSnippet: "Carta del dia 24: escriu aquí el tros de carta.",
    // downloadUrl: "/regals/dia24.pdf", // 👈 descomenta només si hi ha regal
  },
];

export function getDayContent(day: number): DayContent | undefined {
  return adventDays.find((d) => d.day === day);
}
