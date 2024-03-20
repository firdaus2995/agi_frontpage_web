'use client';
import { useState } from 'react';

const data = ['Info Produk', 'Kinerja', 'Fitur', 'Dokumen', 'Agen Penjual'];

const NavigationBar = () => {
  const [selected, setSelected] = useState('');
  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center md:px-20 xs:px-4">
      <div className="flex flex-row gap-4 rounded-lg gap-2 flex-wrap">
        {data.map((val, idx) => (
          <div
            key={idx}
            role="button"
            onClick={() => setSelected(val)}
            className={`w-40 flex p-2 items-center justify-center rounded-lg border border-purple_dark text-xs font-semibold ${selected === val ? 'text-white bg-purple_dark' : 'text-purple_dark bg-white'}`}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
