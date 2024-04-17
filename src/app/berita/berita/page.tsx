'use client';
import React, { useCallback, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import BeritaAcara from './tabs/berita-acara';
import CSR from './tabs/csr';
import Penghargaan from './tabs/penghargaan';
import Icon1 from '@/assets/images/agi/component/informasi-klaim/bantuan.svg';
import Icon2 from '@/assets/images/agi/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon3 from '@/assets/images/common/email.svg';
import Icon4 from '@/assets/images/common/procedure.svg';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { ParamsProps } from '@/utils/globalTypes';

const Berita: React.FC<ParamsProps> = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (searchParams) {
      const value = searchParams.get('tab');
      const categories = searchParams.get('category');

      if (value !== null) {
        setTab(value);
      }

      if (categories !== null) {
        setCategory(categories);
      }
    }
  }, [searchParams]);

  const handleTabClick = (tabs: string) => {
    setTab(tabs);
    router.push(pathname + '?' + createQueryString('tab', tabs), {
      scroll: false
    });
  };


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      if (value !== 'Avrist Terkini') {
        params.delete('category');
      } else {
        params.set('category', 'Berita dan Kegiatan');
      }

      return params.toString();
    },
    [searchParams]
  );


  const tabs = ['Berita dan Acara', 'Penghargaan', 'CSR'];

  return (
    <div className="flex flex-col items-center justify-center bg-white relative">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab === 'Avrist Terkini' ? category : tab, href: '#' }
        ]}
      />
      <div className="w-full grid grid-cols-3 gap-2 px-[136px] py-20 absolute z-20 top-32 rounded-t-[76px] bg-white">
        {tabs.map((val, idx) => (
          <div
            key={idx}
            role="button"
            onClick={() => handleTabClick(val)}
            className={`p-2 border border-purple_dark rounded-lg text-center ${tab === val ? 'bg-purple_dark text-white' : 'text-purple_dark'} font-semibold`}
          >
            {val}
          </div>
        ))}
      </div>

      {tab === 'Berita dan Acara' && <BeritaAcara />}
      {tab === 'Penghargaan' && <Penghargaan />}
      {tab === 'CSR' && <CSR />}

      <div className="flex flex-col">
        <FooterInformation
          title={
            <div className="flex flex-col gap-4">
              <p className="text-[56px]">Subscribe Informasi Terkini!</p>
              <Button
                title="Avrist General Insurance"
                customButtonClass="bg-agi_grey border-agi_grey rounded-xl"
                customTextClass="text-white font-bold"
              />
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Masukkan email Anda"
                  customInputClass="w-[90%]"
                />
                <Button title="Subscribe" customButtonClass="rounded-xl" />
              </div>
            </div>
          }
          image={BlankImage}
        />
      </div>
      <div className="w-full h-full bg-purple_superlight pb-20">
        <FooterCards
          cards={[
            {
              title: 'Layanan Nasabah',
              icon: Icon1,
              subtitle: '021 5789 8188'
            },
            {
              title: 'Tanya Avrista',
              icon: Icon2,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Tanya Lewat Email',
              icon: Icon3,
              subtitle: 'Kirim Email'
            },
            {
              title: 'Prosedur Pengaduan',
              icon: Icon4,
              subtitle: 'Lihat Prosedur'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Berita;
