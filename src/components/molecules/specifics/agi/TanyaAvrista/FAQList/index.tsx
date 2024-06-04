'use client';

import { useState } from 'react';
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
}

const FAQList = ({ selected, data }: ICardsProps) => {
  const itemsPerPage = 5; // Jumlah item yang ditampilkan per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data ? data.slice(startIndex, endIndex) : [];

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-white flex flex-col sm:gap-[7.5rem] xs:gap-[2.25rem] items-center sm:px-[8.5rem] sm:pt-[3.125rem] xs:pb-[1.625rem] xs:py-[3rem] xs:px-[2.25rem]">
      <h1 className="font-karla sm:text-[3.5rem] xs:text-[2.25rem] text-purple_dark font-extrabold">
        {selected}
      </h1>
      {paginatedData?.length > 0 ? (
        <div className="w-full">
          <div className="w-full flex flex-col gap-[3rem]">
            {paginatedData.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="w-full border border-gray_light rounded-xl px-[0.25rem] py-[0.375rem] sm:px-[0.5rem] sm:py-[0.75rem] flex flex-row justify-between items-center"
              >
                <p className="text-xl font-bold">{item.title}</p>
                <Image alt="chevron" src={CHEVRON_RIGHT_PURPLE} />
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-row justify-between mt-[1rem] mb-[1.25rem]">
            <div className="flex items-center text-[0.625rem]">
              Menampilkan{'\u00A0'}
              <span className="font-bold text-purple_dark">
                {startIndex + 1}-{Math.min(endIndex, data ? data?.length : 0)}
              </span>
              {'\u00A0'}dari{'\u00A0'}
              <span className="font-bold"> {data.length}</span>
              {'\u00A0'}hasil
            </div>
            <div className="flex items-center space-x-[0.125rem]">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => handlePageChange(page)}
                    className={`w-[0.375rem] h-[0.375rem] flex items-center justify-center cursor-pointer ${
                      currentPage === page ? 'text-purple_dark font-bold' : ''
                    }`}
                  >
                    {page}
                  </div>
                )
              )}
              <span
                className="mt-[0.1875rem]"
                role="button"
                onClick={() => handlePageChange(totalPages)}
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
