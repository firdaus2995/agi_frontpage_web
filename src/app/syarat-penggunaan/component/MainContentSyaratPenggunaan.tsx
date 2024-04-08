'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Disclaimer from '../tabs/Disclaimer';
import KepemilikanInformasi from '../tabs/KepemilikanInformasi';
import KontenSitus from '../tabs/KontenSitus';
import SyaratPenggunaan from '../tabs/SyaratPenggunaan';

import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom.svg';
import Icon from '@/components/atoms/Icon';

const MainContentSyaratPenggunaan = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('Disclaimer');
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tabs: string) => {
    setTab(tabs);
    router.push(pathname + '?' + createQueryString('tab', tabs), {
      scroll: false
    });
  };

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const tabs = [
    'Disclaimer',
    'Syarat Penggunaan',
    'Konten Situs',
    'Kepemilikan Informasi'
  ];
  return (
    <div className=" w-full flex flex-col  relative bottom-[70px]">
      <div className="bg-white rounded-t-[80px] w-full min-h-[60px]">
        <div className="px-[136px] py-[100px] flex flex-row">
          {/* start tabs kiri */}
          <div className="sm:block hidden rounded-lg">
            <div className="flex flex-col shrink min-w-[210px] bg-purple_light_bg rounded-r-[12px] rounded-l-[4px] overflow-hidden">
              {tabs.map((val, idx) =>
                tab === val ? (
                  <div
                    key={idx}
                    className="border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer text-left"
                  >
                    <span className="font-bold text-purple_dark text-[18px]">
                      {val}
                    </span>
                  </div>
                ) : (
                  <div
                    key={idx}
                    role="button"
                    onClick={() => handleTabClick(val)}
                    className="border-l-4 border-purple_mediumlight px-[15px] py-[10px] cursor-pointer text-left"
                  >
                    <span className="font-bold text-purple_mediumlight text-[18px]">
                      {val}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative sm:hidden block">
            <div
              className="flex justify-between items-center border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer rounded-lg font-bold text-purple_dark bg-purple_light_bg text-[18px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{tab}</span>
              <div
                className={`transform transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <Icon name="chevronDown" color="purple_dark" />
              </div>
            </div>
            {isOpen && (
              <div className="absolute w-full mt-1 rounded-lg bg-purple_light_bg shadow-lg">
                {tabs.map((val, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleTabClick(val)}
                    className={`border-l-4 px-[15px] py-[10px] cursor-pointer font-bold text-[18px] ${
                      tab === val
                        ? 'border-purple_dark text-purple_dark'
                        : 'border-purple_mediumlight text-purple_mediumlight'
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            )}
          </div>{' '}
          {/* end tabs kiri */}
          <div className="ml-[48px]">
            {tab === 'Disclaimer' && <Disclaimer />}
            {tab === 'Syarat Penggunaan' && <SyaratPenggunaan />}
            {tab === 'Konten Situs' && <KontenSitus />}
            {tab === 'Kepemilikan Informasi' && <KepemilikanInformasi />}
          </div>
        </div>
      </div>
      <Image
        alt="border-bottom"
        className="w-full h-auto"
        src={ROUNDED_FRAME_BOTTOM}
        style={{ userSelect: 'none' }}
      />
    </div>
  );
};

export default MainContentSyaratPenggunaan;
