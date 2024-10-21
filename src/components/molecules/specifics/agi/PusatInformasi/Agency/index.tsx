'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Content from './Content';
import Detail from './detail';
import Button from '@/components/atoms/Button/Button';
import { contentStringTransformer } from '@/utils/responseTransformer';

type agencyProps = {
  pageData: any;
};

const Agency = (props: agencyProps) => {
  const { pageData } = props;
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? '';
  const content = searchParams.get('content') ?? '';

  return (
    <div
      className={`flex flex-col ${tab.includes('Agency') && content ? '' : 'px-[2rem] lg:px-[8.5rem] pb-[6.25rem]'}`}
    >
      {tab.includes('Agency') && content ? (
        <Detail pageData={pageData} />
      ) : (
        <Content pageData={pageData} />
      )}

      <div
        className={`flex xs:flex-col lg:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-4 ${tab.includes('Agency') && content ? 'mx-[2rem] md:mx-[9.5rem] lg:mx-[8.5rem] mb-[3.25rem]' : ''}`}
      >
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-bold text-xl 2xl:text-2xl text-purple_dark">
            {contentStringTransformer(pageData['external-link-nama'])}
          </h1>
        </div>
        <div className="xs:w-full lg:w-auto flex items-center justify-center">
          <Link
            href={contentStringTransformer(pageData['external-link-button'])}
            target="_blank"
          >
            <Button
              title={contentStringTransformer(
                pageData['external-link-label-button']
              )}
              customButtonClass="bg-purple_dark rounded-lg"
              customTextClass="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Agency;
