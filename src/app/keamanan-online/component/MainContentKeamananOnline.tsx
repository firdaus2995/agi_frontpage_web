'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import KeamananOnline from '../tabs/keamanan-online';
import Icon from '@/components/atoms/Icon';

interface Props {
  content: any;
}

const MainContentKeamananOnline = ({ content }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('Keamanan Online');
  const [isOpen, setIsOpen] = useState(false);

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

  const tabs = ['Keamanan Online'];
  return (
    <div className=" w-full flex flex-col  relative bottom-[70px]">
      <div className="bg-white w-full min-h-[60px]">
        <div className="lg:px-[136px] xs:px-[36px] lg:py-[100px] xs:pt-[50px] xs:pb-[100px] flex lg:flex-row xs:flex-col">
          {/* start tabs kiri */}
          <div className="lg:block hidden rounded-lg">
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
          </div>
          {/* end tabs kiri */}
          <div className="lg:ml-[48px] flex flex-col xs:mt-[2rem] lg:mt-0">
            {tab === 'Keamanan Online' && <KeamananOnline content={content} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentKeamananOnline;
