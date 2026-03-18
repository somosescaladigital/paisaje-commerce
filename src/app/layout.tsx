import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escala Digital | Paisajismo & Coaching",
  description: "Tienda de productos virtuales y servicios de paisajismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans relative`}
      >
        {/* Fondo de Paisaje Sutil */}
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.05] grayscale divide-y-0">
          <img 
            src="/images/bg-landscape.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <Navbar />
        <main className="flex-1 relative flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
