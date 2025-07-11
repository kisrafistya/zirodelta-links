import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZiroDelta - Official Links",
  description: "Official links and resources for ZiroDelta - The Future of Conditional Finance",
  keywords: ["ZiroDelta", "ZDLT", "DeFi", "Conditional Finance", "Links"],
  authors: [{ name: "ZiroDelta" }],
  creator: "ZiroDelta",
  publisher: "ZiroDelta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://links.zirodelta.com'),
  openGraph: {
    title: "ZiroDelta - Official Links",
    description: "Official links and resources for ZiroDelta - The Future of Conditional Finance",
    url: 'https://links.zirodelta.com',
    siteName: 'ZiroDelta Links',
    images: [
      {
        url: '/zirodelta-logo.png',
        width: 512,
        height: 512,
        alt: 'ZiroDelta Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZiroDelta - Official Links',
    description: 'Official links and resources for ZiroDelta - The Future of Conditional Finance',
    images: ['/zirodelta-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 