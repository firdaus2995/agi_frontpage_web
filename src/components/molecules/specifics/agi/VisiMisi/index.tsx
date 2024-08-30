import React, { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Chevron from '@/assets/images/common/chevron-right-purple.svg';

interface IDataArray {
  title: string;
  icon: StaticImport;
  desc: string | string[];
}

interface IVisiMisi {
  data: IDataArray[];
}

const VisiMisi = ({ data }: IVisiMisi) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-[1.5rem] px-[2rem] lg:px-[8.5rem] font-karla w-full xs:my-[3.125rem] lg:my-[5rem]">
      {data.map((val, idx) => (
        <div
          key={idx}
          className="p-10 flex flex-col gap-4 border border-b-8 border-b-purple_dark rounded-xl"
        >
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={val.icon}
                className="xs:w-[2.25rem] lg:w-[5rem]"
                width={24}
                height={24}
                alt="logo"
              />
              <p className="font-karla text-[30px] lg:text-tanya-avgen-detail-title-desktop font-semibold">
                {val.title}
              </p>
            </div>
            {Array.isArray(val.desc) && isExpanded ? (
              <Image
                role="button"
                onClick={() => setIsExpanded(false)}
                src={Chevron}
                className="w-5 -rotate-[90deg]"
                alt="minus"
              />
            ) : null}
          </div>
          {!Array.isArray(val.desc) ? (
            <p
              className="xs:text-[20px] lg:text-[1.5rem] font-light -tracking-[1.08px]"
              dangerouslySetInnerHTML={{
                __html: val.desc
              }}
            />
          ) : !isExpanded ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row xs:gap-[2rem] lg:gap-[3.75rem] items-center">
                <p className="xs:text-[4rem] lg:text-[5rem] font-bold text-purple_dark font-karla">
                  1
                </p>
                <p
                  className="xs:text-[20px] lg:text-[1.5rem] font-light -tracking-[1.08px]"
                  dangerouslySetInnerHTML={{
                    __html: val.desc[0]
                  }}
                />
              </div>
              <div
                role="button"
                onClick={() => setIsExpanded(true)}
                className="w-full flex flex-row gap-2 items-center justify-end"
              >
                <p className="text-[24px] font-semibold text-purple_dark font-karla">
                  Lihat Lebih Lanjut
                </p>
                <Image
                  src={Chevron}
                  className="w-5 rotate-[90deg]"
                  alt="plus"
                />
              </div>
            </div>
          ) : (
            val.desc.map((value, index) => (
              <div
                key={index}
                className="px-[1.5rem] pb-[2.25rem] pt-[1rem] flex flex-col gap-4 border border-b-8 border-b-purple_dark rounded-xl"
              >
                <div className="flex xs:flex-col lg:flex-row items-center w-full xs:text-center lg:text-start">
                  <span className="w-[7rem]">
                    <p
                      className={`xs:text-[4rem] lg:text-[5rem] font-bold text-purple_dark font-karla ${index + 1 === 1 ? 'lg:pl-4' : ''}`}
                    >
                      {index + 1}
                    </p>
                  </span>

                  <span className="w-full">
                    <p
                      className="xs:text-xl lg:text-[1.5rem] font-light -tracking-[1.08px]"
                      dangerouslySetInnerHTML={{
                        __html: value
                      }}
                    />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default VisiMisi;
