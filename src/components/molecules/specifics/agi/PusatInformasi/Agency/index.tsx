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
      className={`flex flex-col gap-4 ${tab.includes('Agency') && content.includes('detail') ? '' : 'px-[2rem] md:px-[8.5rem] pb-[3.25rem]'}`}
    >
      {tab.includes('Agency') && content ? (
        <Detail />
      ) : (
        <Content pageData={pageData} />
      )}

      <div
        className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-4 ${tab.includes('Agency') && content.includes('detail') ? 'mx-[2rem] md:mx-[8.5rem] mb-[3.25rem]' : ''}`}
      >
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-bold text-xl 2xl:text-2xl text-purple_dark">
            {contentStringTransformer(pageData['external-link-nama'])}
          </h1>
        </div>
        <div className="xs:w-full md:w-auto">
          <Link
            href={contentStringTransformer(pageData['external-link-button'])}
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
