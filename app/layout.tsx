import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/src/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendari d'Advent Carinya 💛",
  description: "Regal d'aniversari: 24 dies, 24 jocs, 24 sorpreses",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ca"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-black text-zinc-100"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
