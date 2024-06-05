'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Content from './Content';
import Detail from './detail';
import Button from '@/components/atoms/Button/Button';

const Agency = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? '';
  const content = searchParams.get('content') ?? '';

  return (
    <div
      className={`flex flex-col gap-4 ${tab.includes('Agency') && content.includes('detail') ? '' : 'px-[2rem] md:px-[8.5rem] pb-[3.25rem]'}`}
    >
      {tab.includes('Agency') && content ? <Detail /> : <Content />}

      <div
        className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-4 ${tab.includes('Agency') && content.includes('detail') ? 'mx-[2rem] md:mx-[8.5rem] mb-[3.25rem]' : ''}`}
      >
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-bold text-xl 2xl:text-2xl text-purple_dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h1>
        </div>
        <div className="xs:w-full md:w-auto">
          <Button
            title="Agency Management System"
            customButtonClass="bg-purple_dark rounded-lg"
            customTextClass="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Agency;
