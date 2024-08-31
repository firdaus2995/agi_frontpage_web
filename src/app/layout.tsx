import type { Metadata } from 'next';
import { Open_Sans, Karla } from 'next/font/google';
import './globals.css';
import AGI_LOGO from '@/assets/images/agi-logo.svg';
import Footer from '@/components/molecules/specifics/agi/Footer';
import Header from '@/components/molecules/specifics/agi/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
});
const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export const metadata: Metadata = {
  title: 'Avrist General Insurance',
  description: 'Avrist General Insurance',
  icons: {
    icon: AGI_LOGO
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${karla.variable} w-full max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
