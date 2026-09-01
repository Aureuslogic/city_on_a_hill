import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://city-on-a-hill-redesign.sammiedollar.chatgpt.site'),
  title: 'City on the Hill | Christian Business Directory & Network',
  description:
    'Discover trusted Christian-owned businesses, professionals, communities, courses, investors and networking events across a growing international ecosystem.',
  keywords: [
    'Christian business directory',
    'Christian businesses UK',
    'Christian business networking London',
    'faith-driven entrepreneurs',
    'Christian professional community',
    'City on the Hill business network',
    'international Christian business network',
    'Christian businesses USA Canada Africa Australia UAE EU',
    'Christian professional directory',
    'Christian networking events',
    'Christian investor network',
    'Christian entrepreneur community',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'City on the Hill | Find trusted Christian businesses',
    description:
      'City on the Hill is a global Christian ecosystem for buyers, founders, professionals, communities, educators and investors.',
    type: 'website',
    url: '/',
    siteName: 'City on the Hill',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'City on the Hill — Find trusted Christian businesses. Build what matters.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City on the Hill | Find trusted Christian businesses',
    description: 'Discover trusted Christian businesses, professionals, communities, investors and events in one global ecosystem.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

