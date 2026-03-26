import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Outfit } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import { headers } from "next/headers";
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

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paisajismo y Sentidos | Paisajismo & Coaching",
  description: "Tienda de productos virtuales y servicios de paisajismo.",
};

import DynamicLayoutWrapper from "@/components/layout/DynamicLayoutWrapper";
import ModalProvider from "@/components/providers/ModalProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable}`}>
      <body
        className={`${outfit.className} antialiased bg-background text-foreground min-h-screen flex flex-col relative`}
      >
        <ModalProvider />
        <DynamicLayoutWrapper navbar={<Navbar />}>
          {children}
        </DynamicLayoutWrapper>
      </body>
    </html>
  );
}
