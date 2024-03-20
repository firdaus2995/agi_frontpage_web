'use client';

import React, { useRef } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import FOOTER_NASABAH_1 from '@/assets/images/avrast/component/footer-klaim/footer-img-1.svg';
import FOOTER_NASABAH_2 from '@/assets/images/avrast/component/footer-klaim/footer-img-2.svg';
import FOOTER_NASABAH_3 from '@/assets/images/avrast/component/footer-klaim/footer-img-3.svg';
import FOOTER_NASABAH_4 from '@/assets/images/avrast/component/footer-klaim/footer-img-4.svg';
import ARROW_LEFT from '@/assets/images/avrast/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/avrast/component/total-solution/arrow-right.svg';
import ARROW_CIRCLE_RIGHT from '@/assets/images/common/arrow-circle-right.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HEART_CHECK from '@/assets/images/common/heart-check.svg';
import HOME_ADD from '@/assets/images/common/home-add.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import PERSON_HOME_YELLOW from '@/assets/images/common/person-home-yellow.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import UMBRELLA_GREEN from '@/assets/images/common/umbrella-green.svg';

const dataInformasiNasabah = [
  {
    icon: FOOTER_NASABAH_1,
    title: 'Kelola Polis',
    link1: 'Login Akun'
  },
  {
    icon: FOOTER_NASABAH_2,
    title: 'Download Formulir',
    link1: 'Lihat Lainnya'
  },
  {
    icon: FOOTER_NASABAH_3,
    title: 'Avrist Terkini',
    link1: 'Lebih Lanjut'
  },
  {
    icon: FOOTER_NASABAH_4,
    title: 'Prosedur Pengaduan',
    link1: 'Lihat Prosedur'
  }
];

const dataFormulirPendaftaran = [
  {
    icon: ARROW_CIRCLE_RIGHT,
    title: 'Kelola Polis',
    link1: 'Login Akun'
  },
  {
    icon: RECEIPT,
    title: 'Ajukan Klaim',
    link1: 'Lebih Lanjut'
  },
  {
    icon: DOCUMENT_SEARCH,
    title: 'Prosedur Pengaduan',
    link1: 'Lihat Prosedur'
  },
  {
    icon: MESSAGE,
    title: 'Tanya Avrista',
    link1: 'Lebih Lanjut'
  }
];

const dataPerformaInvestasi = [
  {
    icon: HEART_CHECK,
    title: 'Asuransi Jiwa',
    link1: 'Lihat Produk'
  },
  {
    icon: HOME_ADD,
    title: 'Asuransi Korporasi',
    link1: 'Lebih Lanjut'
  },
  {
    icon: UMBRELLA_GREEN,
    title: 'Avrist Syariah',
    link1: 'Lihat Prosedur',
    color: 'text-syariah_green'
  },
  {
    icon: PERSON_HOME_YELLOW,
    title: 'Avrist DPLK',
    link1: 'Lebih Lanjut',
    color: 'text-orange_border'
  }
];

const FooterKlaim = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get('tab') ?? '';

  const data = params.includes('Informasi Nasabah')
    ? dataInformasiNasabah
    : params.includes('Formulir & Buku Panduan')
      ? dataFormulirPendaftaran
      : params.includes('Performa Investasi')
        ? dataPerformaInvestasi
        : dataInformasiNasabah;

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

  const renderCard = (val: {
    icon: StaticImport;
    title: string;
    link1: string;
    color?: string;
  }) => (
    <div
      className={`w-full  flex mb-10 flex-col rounded-xl bg-white items-center justify-center text-center shadow-xl border-2`}
    >
      <div className="flex items-center justify-center w-full pt-5">
        <Image src={val.icon} alt={val.title} className="w-20" />
      </div>
      <div
        className={`w-full md:p-10 xs:p-4 flex h-full flex-col items-center justify gap-2`}
      >
        <p
          className={`md:text-lg xs:text-xs font-bold ${val.color ?? ''} text-center w-full`}
        >
          {val.title}
        </p>
        <div
          role="button"
          className="flex w-full flex-row items-center justify-center gap-4 whitespace-nowrap"
        >
          <p className={`font-semibold md:text-lg xs:text-xs text-purple_dark`}>
            {val.link1}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-24 gap-16 bg-white rounded-t-[65px] relative">
      <div className="w-full absolute z-20 top-2 h-20 bg-white rounded-t-[65px]"></div>
      <div className="w-full flex flex-row absolute z-10 top-0 h-20 rounded-t-[65px]">
        <div className="w-1/4 h-full bg-purple_light rounded-tl-[65px]"></div>
        <div className="w-1/4 h-full bg-green_border"></div>
        <div className="w-1/4 h-full bg-orange_border"></div>
        <div className="w-1/4 h-full bg-agi_grey rounded-tr-[65px]"></div>
      </div>
      <div className="w-full px-20 grid grid-cols-4 md:grid xs:hidden gap-10">
        {data.map((val, idx) => (
          <div key={idx}>{renderCard(val)}</div>
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
            <div key={idx}>{renderCard(val)}</div>
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

export default FooterKlaim;
