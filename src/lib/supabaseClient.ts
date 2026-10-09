// src/lib/supabaseClient.ts
// Connexió Supabase només client (sense backend /api, compatible amb Static Export).
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Falten NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY a .env.local"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
