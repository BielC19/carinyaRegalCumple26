// src/lib/supabaseClient.ts
// Connexió Supabase només client (sense backend /api, compatible amb Static Export).
import { createClient } from "@supabase/supabase-js";

// En build de GitHub (sense secrets) fem servir placeholders perquè
// el prerender estàtic no peti. En runtime el Context ja cau a "mode local".
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  console.warn(
    "Falten NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY. Mode placeholder (build) / local (runtime)."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
