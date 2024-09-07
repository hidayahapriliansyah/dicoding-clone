import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import NavbarMobile from '../components/NavbarMobile';
import NavbarDesktop from '../components/NavbarDesktop';
import Footer from '../components/Footer';

const quicksand = Quicksand({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Dicoding Indonesia - Bangun Karirmu Sebagai Developer Profesional Dicoding Indonesia",
  description: "Dicoding home page clone by Adi Muhamad Firmansyah",
  openGraph: {
    title: 'Dicoding Indonesia - Bangun Karirmu Sebagai Developer Profesional Dicoding Indonesia',
    description: 'Dicoding home page clone by Adi Muhamad Firmansyah',
    url: 'https://dicoding-clone.vercel.app',
    siteName: 'Dicoding Clone by Adi Muhamad Firmansyah',
    images: [
      {
        url: 'https://dicoding-clone.vercel.app/og/dicoding_cover.jpeg',
        width: 1600,
        height: 900,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${quicksand.className} overflow-x-hidden`}>
        <header className='w-full'>
          <NavbarMobile />
          <NavbarDesktop />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
