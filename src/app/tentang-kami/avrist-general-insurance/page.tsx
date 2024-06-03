'use client';
import React, { useCallback, useEffect, useState } from 'react';

// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LaporanPerusahaan from './tabs/laporan-perusahaan';
import Manajemen from './tabs/management';
import SekilasPerusahaan from './tabs/sekilas-perusahaan';
import Icon1 from '@/assets/images/agi/component/informasi-klaim/bantuan.svg';
import Icon2 from '@/assets/images/agi/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon3 from '@/assets/images/common/email.svg';
import Icon4 from '@/assets/images/common/facebook.svg';
import Icon6 from '@/assets/images/common/instagram.svg';
import Icon5 from '@/assets/images/common/linkedIn.svg';
import Icon7 from '@/assets/images/common/procedure.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image-small.svg';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
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

  const tabs = ['Sekilas Perusahaan', 'Manajemen', 'Laporan Perusahaan'];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
        bottomImage={tab === 'Sekilas Perusahaan' && BlankImage}
      />
      <div className="w-full grid grid-cols-3 gap-2 px-[136px] py-20 bg-white ">
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
      <div className="w-full">
        {tab === 'Sekilas Perusahaan' && <SekilasPerusahaan />}
        {tab === 'Manajemen' && <Manajemen />}
        {tab === 'Laporan Perusahaan' && <LaporanPerusahaan />}
      </div>

      {tab === 'Sekilas Perusahaan' ||
      tab === 'Manajemen' ||
      tab === 'Penghargaan' ? (
        <div className="flex flex-col w-full">
          <FooterInformation
            title={
              <div className="flex flex-col gap-5">
                <p className="font-karla text-[48px]">
                  Kami ada untuk membantu Anda.
                </p>
                <p className="font-black text-purple_dark font-karla text-[48px]">
                  Hubungi Kami
                </p>
                <div className="rounded-lg border-2 border-purple_dark p-4 flex items-center justify-center gap-2">
                  <Image src={WHATSAPP_IMAGE} alt="wa" width={24} />
                  <p className="text-xl font-semibold text-purple_dark">
                    0811 1960 1000
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p>
                    <span className="font-bold">Waktu Operasional:</span> Senin
                    - Jumat, 08.00 - 17.00 WIB
                  </p>
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
