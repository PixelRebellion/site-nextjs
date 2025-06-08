import Navbar from "@/components/navbar/Nav";
import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { CookieProvider } from "@/Context/CookieContext";
import CookieConsent from "@/components/common/cookieConsent/CookieConsent";


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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookieProvider>
      <CookieConsent />
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
    </CookieProvider>
  );
}
