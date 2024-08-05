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
    <div className="flex flex-col gap-[1.5rem] font-karla w-full xs:my-[3.125rem] sm:my-[5rem]">
      {data.map((val, idx) => (
        <div
          key={idx}
          className="p-10 flex flex-col gap-4 border border-b-8 border-b-purple_dark rounded-xl"
        >
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={val.icon}
                className="w-[100px]"
                width={24}
                height={24}
                alt="logo"
              />
              <p className="font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop font-semibold">
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
              className="text-[1.25rem] md:text-[2.25rem] font-light -tracking-[1.08px] font-light lg:text-left text-center"
              dangerouslySetInnerHTML={{
                __html: val.desc
              }}
            />
          ) : !isExpanded ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between gap-10 items-center">
                <p className="font-karla text-[4rem] lg:text-[100px] lg:leading-[120px] lg:-tracking-[0.04em] font-semibold text-purple_dark">
                  1
                </p>
                <p
                  className="text-[1.25rem] md:text-[2.25rem] font-light -tracking-[1.08px] font-light lg:text-left text-center"
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
                <p className="font-semibold text-purple_dark text-history-title">
                  Lihat Lebih Lanjut
                </p>
                <Image src={Chevron} className="w-5 rotate-[90deg]" alt="plus" />
              </div>
            </div>
          ) : (
            val.desc.map((value, index) => (
              <div
                key={index}
                className="px-[1.5rem] pb-[2.25rem] pt-[1rem] flex flex-col gap-4 border border-b-8 border-b-purple_dark rounded-xl"
              >
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[60px] items-center">
                  <p className="font-karla text-[4rem] lg:text-[100px] lg:leading-[120px] lg:-tracking-[0.04em] font-semibold text-purple_dark">
                    {index + 1}
                  </p>
                  <p
                    className="text-[1.25rem] md:text-[2.25rem] font-light -tracking-[1.08px] font-light lg:text-left text-center"
                    dangerouslySetInnerHTML={{
                      __html: value
                    }}
                  />
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
