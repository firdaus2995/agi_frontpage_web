'use client';

import Image from 'next/image';
import Link from 'next/link';
import CHEVRON_RIGHT_PURPLE from '@/assets/images/common/chevron-right-purple.svg';
import Search from '@/assets/images/common/search.svg';
import Icon from '@/components/atoms/Icon';

export interface IListFaq {
  title: any;
  href: string;
  tags: string | undefined;
}
interface ICardsProps {
  selected: string;
  data: IListFaq[];
  allData: IListFaq[];
  itemsPerPage?: number;
  pageCount: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
  handlePageClick: (e: any) => void;
}

const FAQList = ({
  selected,
  data,
  allData,
  pageCount,
  currentPage,
  startIndex,
  endIndex,
  handlePageClick
}: ICardsProps) => {
  return (
    <div className="w-full bg-white flex flex-col gap-[5rem] items-center sm:px-[8.5rem] xs:pb-[1.5rem] sm:pb-[3rem] xs:px-[2rem]">
      <h1 className="font-karla sm:text-[3.5rem] xs:text-[2.25rem] text-purple_dark font-extrabold text-center sm:leading-[67.2px] -tracking-[0.04em] xs:leading-[43.2px]">
        {selected}
      </h1>
      {data?.length > 0 ? (
        <div className="w-full">
          <div className="w-full flex flex-col gap-[12px]">
            {data.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="w-full border border-gray_light rounded-xl p-[1.5rem] flex flex-row justify-between items-center shadow-[0_13px_20px_0px_purple_dark/[0/03]]"
              >
                <p className="text-2xl font-semibold leading-[30.17px] font-opensanspro">
                  {item.title}
                </p>
                <Image alt="chevron" src={CHEVRON_RIGHT_PURPLE} />
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between py-8 gap-4">
            <div>
              <p className="text-[20px]">
                Menampilkan{' '}
                <span className="font-bold text-purple_dark">
                  {allData?.length === 0 ? 0 : startIndex + 1}-
                  {Math.min(endIndex, allData ? allData.length : 0)}
                </span>{' '}
                dari <span className="font-bold">{allData?.length}</span> hasil
              </p>
            </div>
            <div className="flex flex-row gap-[12px] items-center">
              <span
                className="mt-[3px] rotate-180"
                role="button"
                onClick={() =>
                  handlePageClick(currentPage > 1 ? currentPage - 1 : 1)
                }
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => handlePageClick(page)}
                    className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                      currentPage === page ? 'text-purple_dark font-bold' : ''
                    }`}
                  >
                    {page}
                  </div>
                )
              )}
              <span
                className="mt-[3px]"
                role="button"
                onClick={() =>
                  handlePageClick(
                    currentPage === pageCount ? currentPage : currentPage + 1
                  )
                }
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-[1rem] items-center justify-center">
          <Image src={Search} alt="search" />
          <div className="flex flex-col gap-[2.25rem]">
            <div className="w-[20.25rem] text-center">
              <p className="font-karla font-bold text-[1.5rem]">
                Jawaban tidak ditemukan
              </p>
              <p className="font-opensans text-[1rem] mt-[0.75rem]">
                Coba sesuaikan pencarian Anda untuk menemukan apa yang Anda
                cari.
              </p>
            </div>
            <Link
              href="/hubungi-kami"
              className="bg-purple_dark text-white font-opensans font-semibold text-[1.25rem] rounded-lg py-[0.75rem] px-[2.5rem] mt-[1.5rem] text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQList;
