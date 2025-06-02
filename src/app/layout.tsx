import Navbar from "@/components/navbar/Nav";
import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        toastOptions={{
          position: "top-center",
          className: 'text-2xl',
          duration: 5000,
        }}
      />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
