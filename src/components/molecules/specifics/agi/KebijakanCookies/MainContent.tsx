'use client';
import React, { useRef, useState } from 'react';

import HakCipta from './tabs/HakCipta';
import MerkDagang from './tabs/MerkDagang';

import Icon from '@/components/atoms/Icon';

interface Props {
  content: any;
}

const MainContent = ({ content }: Props) => {
  const [tab, setTab] = useState('Hak Cipta');
  const [isOpen, setIsOpen] = useState(false);
  const hakCiptaRef = useRef(null);
  const merkDagangRef = useRef(null);

  const handleTabClick = (tabs: string) => {
    setTab(tabs);
    const ref = getRefByTab(tabs);
    handleScrollToRef(ref);
  };

  const getRefByTab = (tab: string) => {
    switch (tab) {
      case 'Hak Cipta':
        return hakCiptaRef;
      case 'Merk Dagang':
        return merkDagangRef;
      default:
        return null;
    }
  };

  const handleScrollToRef = (
    ref: React.MutableRefObject<HTMLElement | null> | null
  ) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref?.current.offsetTop + (window?.innerWidth > 1024 ? 130 : 90),
        behavior: 'smooth'
      });
    }
  };

  const tabs = ['Hak Cipta', 'Merk Dagang'];

  return (
    <div className="w-full flex flex-col relative bottom-[70px]">
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
                    onClick={() => {
                      setIsOpen(false);
                      handleTabClick(val);
                    }}
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
          <div className="lg:ml-[48px] flex flex-col xs:mt-[2rem] lg:mt-0">
            <div ref={hakCiptaRef}>
              <HakCipta content={content} />
            </div>
            <div ref={merkDagangRef}>
              <MerkDagang content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
