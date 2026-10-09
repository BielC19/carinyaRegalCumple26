import { DayView } from "@/src/components/DayView";

// Obligatori per Static Export a GitHub Pages: prerenderitza les 24 pàgines.
export function generateStaticParams() {
  return Array.from({ length: 24 }, (_, i) => ({
    day: String(i + 1),
  }));
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const dayNum = parseInt(day, 10);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-mono px-4 py-10">
      <header className="text-center mb-6">
        <h1 className="text-xl font-bold text-fuchsia-500 drop-shadow-[0_0_12px_#d946ef]">
          CALENDARI D&apos;ADVENT · DIA {day}
        </h1>
      </header>
      <DayView day={dayNum} />
    </div>
  );
}
