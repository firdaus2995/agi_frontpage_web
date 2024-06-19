import Image from 'next/image';
import Link from 'next/link';

import {
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type Props = {
  pageData?: any;
};

export const ContactSupport = (props: Props) => {
  const { pageData } = props;
  return (
    <div className="grid grid-rows-1 md:grid-cols-5 gap-[1.5rem]">
      <div className="md:h-[20.1875rem] col-span-1 md:col-span-2 border bg-white border-b-8 border-b-purple_dark rounded-2xl border-gray_light overflow-hidden flex flex-col xs:items-center md:items-start justify-between">
        <div className="p-[2.25rem] gap-[1.5rem] flex flex-col h-full items-center md:items-start">
          <Image
            src={singleImageTransformer(pageData['informasi-1-icon']).imageUrl}
            alt={singleImageTransformer(pageData['informasi-1-icon']).altText}
            width={100}
            height={100}
          />
          <p className="font-karla font-extrabold text-[1.5rem] md:text-[3rem] leading-10 md:leading-[3.125rem] ">
            {contentStringTransformer(pageData['informasi-1-nama'])}
          </p>
        </div>
      </div>
      <div className="h-auto md:h-[20.1875rem] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <Link
          href={contentStringTransformer(pageData['informasi-2-link'])}
          className="h-full font-opensans font-bold text-[1.5rem] flex flex-col items-center px-[1.5rem] py-[2.25rem] text-center"
        >
          <Image
            src={singleImageTransformer(pageData['informasi-2-icon']).imageUrl}
            alt={singleImageTransformer(pageData['informasi-2-icon']).altText}
            width={100}
            height={100}
          />
          <p className="">
            {contentStringTransformer(pageData['informasi-2-nama'])}
          </p>
          <p className="text-purple_dark">
            {contentStringTransformer(pageData['informasi-2-label-link'])}
          </p>
        </Link>
      </div>
      <div className="h-auto md:h-[20.1875rem] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <Link
          href={contentStringTransformer(pageData['informasi-3-link'])}
          className="h-full font-opensans font-bold text-[1.5rem] flex flex-col items-center px-[1.5rem] py-[2.25rem] text-center"
        >
          <Image
            src={singleImageTransformer(pageData['informasi-3-icon']).imageUrl}
            alt={singleImageTransformer(pageData['informasi-3-icon']).altText}
            width={100}
            height={100}
          />
          <p className="">
            {contentStringTransformer(pageData['informasi-3-nama'])}
          </p>
          <p className="text-purple_dark break-all">
            {contentStringTransformer(pageData['informasi-3-label-link'])}
          </p>
        </Link>
      </div>
      <div className="h-auto md:h-[20.1875rem] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <Link
          href={contentStringTransformer(pageData['informasi-4-link'])}
          className="h-full font-opensans font-bold text-[1.5rem] flex flex-col items-center px-[1.5rem] py-[2.25rem] text-center"
        >
          <Image
            src={singleImageTransformer(pageData['informasi-4-icon']).imageUrl}
            alt={singleImageTransformer(pageData['informasi-4-icon']).altText}
            width={100}
            height={100}
          />
          <p className="">
            {contentStringTransformer(pageData['informasi-4-nama'])}
          </p>
          <p className="text-purple_dark">
            {contentStringTransformer(pageData['informasi-4-label-link'])}
          </p>
        </Link>
      </div>
    </div>
  );
};
