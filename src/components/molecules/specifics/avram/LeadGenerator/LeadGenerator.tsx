'use client';

import { useState } from 'react';

import Keuangan from './Keuangan/Keuangan';
import Perencanaan from './Perencanaan/Perencanaan';
import Profil from './Profil/Profil';

const LeadGenerator = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col">
      <div className="p-10 flex items-center justify-center gap-2 flex-wrap">
        <div
          role="button"
          onClick={() => setActiveTab(1)}
          className={`md:w-48 xs:w-32 py-2 border border-bright-purple text-sm rounded-lg flex items-center justify-center hover:text-white hover:bg-bright-purple ${activeTab === 1 ? 'text-white bg-bright-purple' : 'text-bright-purple'}`}
        >
          Keuangan
        </div>
        <div
          role="button"
          onClick={() => setActiveTab(2)}
          className={`md:w-48 xs:w-32 py-2 border border-bright-purple text-sm rounded-lg flex items-center justify-center hover:text-white hover:bg-bright-purple ${activeTab === 2 ? 'text-white bg-bright-purple' : 'text-bright-purple'}`}
        >
          Perencanaan
        </div>
        <div
          role="button"
          onClick={() => setActiveTab(3)}
          className={`md:w-48 xs:w-32 py-2 border border-bright-purple text-sm rounded-lg flex items-center justify-center hover:text-white hover:bg-bright-purple ${activeTab === 3 ? 'text-white bg-bright-purple' : 'text-bright-purple'}`}
        >
          Profil
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {activeTab === 1 && <Keuangan />}
        {activeTab === 2 && <Perencanaan />}
        {activeTab === 3 && <Profil />}
      </div>
    </div>
  );
};

export default LeadGenerator;
