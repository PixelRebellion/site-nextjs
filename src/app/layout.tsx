import Navbar from "@/components/navbar/Nav";
import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Pixel Rebellion",
  description: "Freelance agency for the digital age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${roboto.variable} font-sans`}>
      <Navbar />
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
