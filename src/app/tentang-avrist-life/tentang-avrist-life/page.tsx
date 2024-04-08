'use client';
import React, { useCallback, useEffect, useState } from 'react';

// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Karir from './tabs/karir';
import LaporanPerusahaan from './tabs/laporan-perusahaan';
import Manajemen from './tabs/management';
import Penghargaan from './tabs/penghargaan';
import SekilasPerusahaan from './tabs/sekilas-perusahaan';
import Icon1 from '@/assets/images/avrast/component/informasi-klaim/bantuan.svg';
import Icon2 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon3 from '@/assets/images/common/email.svg';
import Icon4 from '@/assets/images/common/facebook.svg';
import Icon6 from '@/assets/images/common/instagram.svg';
import Icon5 from '@/assets/images/common/linkedIn.svg';
import Icon7 from '@/assets/images/common/procedure.svg';
import Icon from '@/components/atoms/Icon';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import { ParamsProps } from '@/utils/globalTypes';

const TentangAvristLife: React.FC<ParamsProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');

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
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const tabs = [
    'Sekilas Perusahaan',
    'Manajemen',
    'Penghargaan',
    'Laporan Perusahaan',
    'Karir'
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
      />
      <div className="w-full grid grid-cols-5 gap-2 px-[136px] py-20 absolute z-20 top-80 rounded-t-[76px] bg-white ">
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
      <div className="mt-44 w-full">
        {tab === 'Sekilas Perusahaan' && <SekilasPerusahaan />}
        {tab === 'Manajemen' && <Manajemen />}
        {tab === 'Penghargaan' && <Penghargaan />}
        {tab === 'Laporan Perusahaan' && <LaporanPerusahaan />}
        {tab === 'Karir' && <Karir />}
      </div>

      {tab === 'Sekilas Perusahaan' ||
      tab === 'Manajemen' ||
      tab === 'Penghargaan' ? (
        <div className="flex flex-col w-full">
          <FooterInformation
            title={
              <div className="flex flex-col gap-4">
                <p className="text-[56px] font-semibold text-purple_dark">
                  Hubungi Kami
                </p>
                <div
                  role="button"
                  className="p-4 bg-purple_dark rounded-xl w-full flex flex-row items-center justify-center gap-2 text-white font-medium"
                >
                  <p>Subscribe</p>
                  <Icon name="youtubeIcon" color="white" />
                  <p>Youtube</p>
                </div>
              </div>
            }
            image={BlankImage}
          />
          <RoundedFrameTop />
        </div>
      ) : null}
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
              title:
                tab === 'Sekilas Perusahaan'
                  ? 'Facebook'
                  : tab === 'Manajemen'
                    ? 'LinkedIn'
                    : tab === 'Penghargaan'
                      ? 'Instagram'
                      : tab === 'Laporan Perusahaan'
                        ? 'Prosedur Pengaduan'
                        : 'Prosedur Pengaduan',
              icon:
                tab === 'Sekilas Perusahaan'
                  ? Icon4
                  : tab === 'Manajemen'
                    ? Icon5
                    : tab === 'Penghargaan'
                      ? Icon6
                      : tab === 'Laporan Perusahaan'
                        ? Icon7
                        : Icon7,
              subtitle:
                tab === 'Sekilas Perusahaan'
                  ? 'Ikuti Kami'
                  : tab === 'Manajemen'
                    ? 'Ikuti Kami'
                    : tab === 'Penghargaan'
                      ? 'Ikuti Kami'
                      : tab === 'Laporan Perusahaan'
                        ? 'Lihat Prosedur'
                        : 'Lihat Prosedur'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default TentangAvristLife;
