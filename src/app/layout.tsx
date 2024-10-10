import { Suspense } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next';
import { Open_Sans, Karla } from 'next/font/google';
import './globals.css';
import packageJson from "../../package.json";
import Footer from '@/components/molecules/specifics/agi/Footer';
import Header from '@/components/molecules/specifics/agi/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
});
const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });
const G_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ID ?? "";

const data = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Avrist-asset-management.png',
  title: 'Avrist General Insurance',
  description: 'Avrist General Insurance',
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  icons:  [{ rel: 'icon', url: "next.svg" }],
  openGraph: {
    title: data.title,
    description: data.description,
    images: data.image,
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="next.svg"
        />
        <meta content={packageJson.version} name="version" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Avrist General Insurance</title>
      </head>
      <GoogleTagManager gtmId={G_ID} />
      <GoogleAnalytics gaId={G_ID} />
      <body
        className={`${openSans.variable} ${karla.variable} w-full max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
