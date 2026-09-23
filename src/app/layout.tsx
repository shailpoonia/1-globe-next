import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['500', '700'],
  variable: '--font-heading',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '1-globe.com - Shopify Performance Apps',
  description: 'Faster Stores. Zero Code Bloat. More Sales. 1-globe.com builds focused Shopify apps that fix your store\'s foundation.',
  icons: {
    icon: '/favicon.ico', // Update based on your public folder
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
