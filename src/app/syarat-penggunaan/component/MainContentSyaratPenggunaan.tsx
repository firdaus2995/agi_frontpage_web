'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Disclaimer from '../tabs/Disclaimer';
import KepemilikanInformasi from '../tabs/KepemilikanInformasi';
import KontenSitus from '../tabs/KontenSitus';
import SyaratPenggunaan from '../tabs/SyaratPenggunaan';

import Icon from '@/components/atoms/Icon';
interface Props {
  content: any;
}

const MainContentSyaratPenggunaan = ({content}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('Disclaimer');
  const [isOpen, setIsOpen] = useState(false);
  const disclaimerRef = useRef(null);
  const syaratRef = useRef(null);
  const kontenRef = useRef(null);
  const kepemilikanRef = useRef(null);

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

  const getRefByTab = (tab: string) => {
    switch (tab) {
      case 'Disclaimer':
        return disclaimerRef;
      case 'Syarat Penggunaan':
        return syaratRef;
      case 'Konten Situs':
        return kontenRef;
      case 'Kepemilikan Informasi':
        return kepemilikanRef;
      default:
        return null;
    }
  };

  const handleScrollToRef = (ref: React.MutableRefObject<null> | null) => {
    if (ref?.current) {
      (ref.current! as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start'
      });
    }
  };

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
      handleScrollToRef(getRefByTab(value));
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
      <div className="bg-white w-full min-h-[60px]">
        <div className="lg:px-[136px] xs:px-[36px] lg:py-[100px] xs:pt-[50px] xs:pb-[100px] flex lg:flex-row xs:flex-col">
          {/* start tabs kiri */}
          <div className="sm:block hidden rounded-lg">
            <div className="flex flex-col shrink min-w-[210px] bg-purple_light_bg rounded-r-[12px] rounded-l-[4px] overflow-hidden">
              {tabs.map((val, idx) =>
                tab === val ? (
                  <div
                    key={idx}
                    className="border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer text-left"
                  >
                    <span className="font-bold text-purple_dark text-footer-subtitle font-opensanspro">
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
                    <span className="font-bold text-purple_mediumlight text-footer-subtitle font-opensanspro">
                      {val}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative lg:hidden block">
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
                    className={`border-l-4 px-[15px] py-[10px] cursor-pointer font-bold text-footer-subtitle font-opensanspro ${
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
          <div className="sm:ml-[48px] flex flex-col xs:mt-[2rem] sm:mt-0">
            <div ref={disclaimerRef}>
              <Disclaimer content={content} />
            </div>
            <div ref={syaratRef}>
              <SyaratPenggunaan content={content} />
            </div>
            <div ref={kontenRef}>
              <KontenSitus content={content} />
            </div>
            <div ref={kepemilikanRef}>
              <KepemilikanInformasi content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSyaratPenggunaan;
