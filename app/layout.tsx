import { Analytics } from '@vercel/analytics/next';
import { Instrument_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SEO } from '@/lib/constants';

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.title,
    template: '%s | UXFoundery',
  },
  description: SEO.description,
  generator: 'Next.js',
  alternates: { canonical: SEO.url },
  openGraph: {
    type: 'website',
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: 'UXFoundery',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'UXFoundery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: ['/opengraph-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F1F1F1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
