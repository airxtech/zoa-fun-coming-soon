import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZOA.fun - Zero-to-One Accelerator',
  description: 'Where Memes Meet Meaning. The first Build-to-Earn Launchpad. Spark your token, forge its future, and play to build real value.',
  keywords: ['crypto', 'meme coins', 'launchpad', 'blockchain', 'Web3', 'incubator', 'token'],
  authors: [{ name: 'ZOA.fun Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoa.fun',
    title: 'ZOA.fun - Zero-to-One Accelerator',
    description: 'Where Memes Meet Meaning. The first Build-to-Earn Launchpad.',
    siteName: 'ZOA.fun',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZOA.fun - Zero-to-One Accelerator',
    description: 'Where Memes Meet Meaning. The first Build-to-Earn Launchpad.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
