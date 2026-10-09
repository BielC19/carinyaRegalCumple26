-- SUPABASE_SETUP.sql
-- Enganxa això a Supabase Dashboard > SQL Editor > New query > Run
-- Crea la taula advent_progress amb una sola fila id:1

create table if not exists public.advent_progress (
  id int primary key,
  unlocked_days int[] not null default '{}'
);

-- Fila única (idempotent)
insert into public.advent_progress (id, unlocked_days)
values (1, '{}')
on conflict (id) do nothing;

-- Permís lectura/escriptura pública (sense login, tal com demanen les instruccions).
-- Si ja tens RLS activat, calen aquestes polítiques:
alter table public.advent_progress enable row level security;

drop policy if exists "Lectura pública progrés" on public.advent_progress;
create policy "Lectura pública progrés"
  on public.advent_progress for select
  using (true);

drop policy if exists "Escriptura pública progrés" on public.advent_progress;
create policy "Escriptura pública progrés"
  on public.advent_progress for update
  using (true)
  with check (true);
