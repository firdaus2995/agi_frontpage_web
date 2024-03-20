import React from 'react';

import Footer from '@/components/molecules/specifics/avrast/Footer';
import Header from '@/components/molecules/specifics/avrast/Header';

const Avrist = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans">
      <Header />
      <div className="text-black">{children}</div>
      <Footer />
    </div>
  );
};

export default Avrist;
