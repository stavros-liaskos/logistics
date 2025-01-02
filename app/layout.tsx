import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import content from '@/content/index.json';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'));

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
