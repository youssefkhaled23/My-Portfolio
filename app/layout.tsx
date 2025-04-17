import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youssef-Khaled | Front-End Developer',
  description: 'Experienced Front-End Developer specializing in React, Next.js, and modern web technologies. View my portfolio to see my latest projects and skills.',
  keywords: 'front-end developer, react developer, nextjs developer, web developer, javascript developer, typescript developer',
  authors: [{ name: 'Youssef-Khaled' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Youssef-Khaled Portfolio',
    title: 'Youssef-Khaled | Front-End Developer',
    description: 'Experienced Front-End Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Youssef-Khaled - Front-End Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef-Khaled | Front-End Developer',
    description: 'Experienced Front-End Developer specializing in React, Next.js, and modern web technologies.',
    images: ['https://your-domain.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}