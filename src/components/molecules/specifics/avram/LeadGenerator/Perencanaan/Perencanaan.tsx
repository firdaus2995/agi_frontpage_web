'use client';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@/components/atoms/Button/Button';

//DUMMY
const data = [
  {
    question: 'Bagaimana perasaan Anda tentang keuangan Anda?',
    buttonList: ['Percaya diri', 'Baik-baik saja', 'Stress', 'Tidak yakin']
  },
  {
    question: 'Bagus! Apakah ada sesuatu yang membuat Anda khawatir?',
    buttonList: [
      'Tagihan bulanan',
      'Menyimpan untuk masa depan',
      'Hutang pinjaman',
      'KPR (Kredit Pemilikan Rumah)',
      'Tabungan darurat',
      'Lainnya'
    ]
  },
  {
    question: 'Bagaimana perasaan Anda tentang keuangan Anda?',
    buttonList: ['Percaya diri', 'Baik-baik saja', 'Stress', 'Tidak yakin']
  },
  {
    question: 'Bagus! Apakah ada sesuatu yang membuat Anda khawatir?',
    buttonList: [
      'Tagihan bulanan',
      'Menyimpan untuk masa depan',
      'Hutang pinjaman',
      'KPR (Kredit Pemilikan Rumah)',
      'Tabungan darurat',
      'Lainnya'
    ]
  },
  {
    question: 'Bagaimana perasaan Anda tentang keuangan Anda?',
    buttonList: ['Percaya diri', 'Baik-baik saja', 'Stress', 'Tidak yakin']
  }
];

const Perencanaan = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [answer, setAnswers] = useState(Array(data.length).fill(''));

  const handleButtonClick = (buttonLabel: string) => {
    const updatedAnswers = [...answer];
    updatedAnswers[activeTab - 1] = buttonLabel;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="md:w-[80%] xs:w-full flex flex-col md:p-20 xs:p-5 flex flex-col justify-center gap-5">
      <div className="flex flex-row items-center justify-center gap-2">
        {data?.map((val, idx) => (
          <div
            key={idx}
            role="button"
            onClick={() => setActiveTab(idx + 1)}
            className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-sm font-bold ${activeTab === idx + 1 || answer[idx] !== '' ? 'text-white bg-bright-purple' : 'text-bright-purple bg-purple_dark/[0.06]'}`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      {data?.map((val, idx) => (
        <div
          key={idx}
          className={`flex flex-col gap-10 items-center justify-center md:p-10 xs:p-0 ${activeTab === idx + 1 ? '' : 'hidden'}`}
        >
          <p className="text-3xl font-bold text-bright-purple text-center">
            {val.question}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {val.buttonList.map((buttonLabel, buttonIdx) => (
              <div
                key={buttonIdx}
                className={`md:w-48 xs:w-32 py-2 border border-bright-purple text-sm rounded-lg flex items-center justify-center hover:text-white hover:bg-bright-purple text-center ${answer[idx] === buttonLabel ? 'text-white bg-bright-purple' : 'text-bright-purple'}`}
                onClick={() => handleButtonClick(buttonLabel)}
              >
                {buttonLabel}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-between md:p-10 xs:p-0">
        <Button
          title="Kembali"
          customButtonClass="rounded-lg"
          disabled={activeTab === 1}
          onClick={() => setActiveTab(activeTab - 1)}
        />
        <Button
          title="Lanjut"
          customButtonClass="rounded-lg"
          disabled={activeTab === data?.length}
          onClick={() => setActiveTab(activeTab + 1)}
        />
      </div>
    </div>
  );
};

export default Perencanaan;
