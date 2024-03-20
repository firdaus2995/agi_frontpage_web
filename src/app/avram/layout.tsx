import React from 'react';

import Footer from '@/components/molecules/specifics/avram/Footer';
import Header from '@/components/molecules/specifics/avram/Header';

const Avram = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans">
      <Header />
      <div className="text-black">{children}</div>
      <Footer />
    </div>
  );
};

export default Avram;
