import React from 'react';
import Button from '@/components/atoms/Button/Button';

const buttonList = [
  'Informasi Nasabah',
  'Rumah Sakit Rekanan',
  'Formulir & Buku Panduan',
  'Performa Investasi'
];
export const ButtonMenu = () => {
  const [activeButton, setActiveButton] = React.useState(buttonList[0]);
  return (
    <div className="grid gap-[12px] grid-cols-4">
      {buttonList.map((i) => (
        <Button
          key={i}
          title={i}
          onClick={() => setActiveButton(i)}
          customButtonClass={`flex-1 ${activeButton === i ? 'bg-purple_dark' : ''}`}
          customTextClass={`${activeButton === i ? 'text-white' : ''}`}
        />
      ))}
    </div>
  );
};
