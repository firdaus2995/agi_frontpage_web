'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import BantuanIcon from '@/assets/images/avrast/component/informasi-klaim/bantuan.svg';
import KelolaPolisIcon from '@/assets/images/avrast/component/informasi-klaim/kelola-polis.svg';
import KetepatanWaktuIcon from '@/assets/images/avrast/component/informasi-klaim/ketepatan-waktu.svg';
import PelayananKlaimIcon from '@/assets/images/avrast/component/informasi-klaim/pelayanan-klaim.svg';
import PengajuanKlaimIcon from '@/assets/images/avrast/component/informasi-klaim/pengajuan-klaim.svg';
import RsRekananIcon from '@/assets/images/avrast/component/informasi-klaim/rs-rekanan.svg';
import ARROW_LEFT from '@/assets/images/avrast/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/avrast/component/total-solution/arrow-right.svg';

const data = [
  {
    title: 'Ketepatan Waktu',
    desc: 'Kami memberi kelancaran dengan ketentuan polis yang disepakati bersama.',
    icon: KetepatanWaktuIcon,
    btnText: 'Panduan Layanan Nasabah'
  },
  {
    title: 'Pelayanan Klaim',
    desc: 'Perkembangan informasi dan keputusan secara jelas, efektif dan transparansi.',
    icon: PelayananKlaimIcon,
    btnText: 'Standar Pelayanan'
  },
  {
    title: 'Kelola Polis',
    desc: 'Kami menjamin kelancaran proses klaim dengan ketentuan polis yang ada.',
    icon: KelolaPolisIcon,
    btnText: 'Informasi Nasabah'
  },
  {
    title: 'Pengajuan Klaim',
    desc: 'Tim kami menganalisa pengajuan dan membayarkan dengan ketentuan polis.',
    icon: PengajuanKlaimIcon,
    btnText: 'Panduan Klaim'
  },
  {
    title: 'Rumah Sakit Rekanan',
    desc: 'Temukan lebih dari 1000 rumah sakit rekanan di seluruh Indonesia.',
    icon: RsRekananIcon,
    btnText: 'Cari Lokasi'
  },
  {
    title: 'Butuh Bantuan',
    desc: 'Melalui jalur komunikasi yang tersedia, Kami selalu siap untuk membantu Anda.',
    icon: BantuanIcon,
    btnText: 'Hubungi Kami'
  }
];

const InfoKlaimTab = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex flex-col self-stretch items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center py-2 text-center">
        <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
          Komitmen Kami menangani klaim Anda
        </h2>
        <h2 className="text-[20px] mb-6">
          Kami memberikan pelayanan dengan{' '}
          <span className="font-bold">efisien.</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 xs:hidden md:grid">
        {data.map((val, idx) => (
          <div
            key={idx}
            className="max-w-sm flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-8 border-b-purple_dark"
          >
            <Image src={val.icon} alt={val.title} className="w-20" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5 text-center">
                {val.title}
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3 text-center">
                {val.desc}
              </p>
              <div
                role="button"
                className="w-[80%] p-2 bg-purple_dark mx-10 flex items-center justify-center text-white font-medium rounded-xl"
              >
                {val.btnText}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:hidden gap-4">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
        >
          {data.map((val, idx) => (
            <div
              key={idx}
              className="max-w-sm flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-8 border-b-purple_dark"
            >
              <div className="flex w-full items-center justify-center">
                <Image src={val.icon} alt={val.title} className="w-20" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5 text-center">
                  {val.title}
                </h5>
                <p className="mb-3 font-normal text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3 text-center">
                  {val.desc}
                </p>
                <div
                  role="button"
                  className="w-[80%] p-3 bg-purple_dark mx-10 flex items-center justify-center text-white font-medium rounded-xl text-xs text-center"
                >
                  {val.btnText}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex flex-row justify-between mx-5">
          <Image alt="prev" src={ARROW_LEFT} role="button" onClick={previous} />
          <Image alt="next" src={ARROW_RIGHT} role="button" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default InfoKlaimTab;
