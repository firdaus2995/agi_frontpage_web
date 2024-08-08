'use client';
import { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id as idTime } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import PurposeCard from '@/components/molecules/specifics/agi/Cards/PurposeCard';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import { handleGetContentCategory } from '@/services/content-page.api';
import {
  contentCategoryTransformer,
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type Props = {
  pageData: any;
};

const Karir = (props: Props) => {
  const { pageData } = props;
  const [category, setCategory] = useState('Karyawan');
  const [purposeData, setPurposeData] = useState<any[]>([]);
  const [listKarir, setListKarir] = useState<any[]>([]);

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItem = listKarir.length;

  const totalPages = Math.ceil(listKarir.length / ITEMS_PER_PAGE);

  const handleChangePage = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedData = listKarir.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (pageData) {
      const cta4: Array<any> = Array.from({ length: 3 }, (_, i) => {
        const index = i + 1;
        const iconData = singleImageTransformer(
          pageData[`informasi-${index}-icon`]
        );
        return {
          title: contentStringTransformer(pageData[`informasi-${index}-nama`]),
          desc: contentStringTransformer(
            pageData[`informasi-${index}-deskripsi`]
          ),
          icon: iconData.imageUrl,
          link: contentStringTransformer(
            pageData[`informasi-${index}-label-link`]
          ),
          route: contentStringTransformer(pageData[`informasi-${index}-link`])
        };
      });
      setPurposeData(cta4);
    }
  }, [pageData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchApi = await handleGetContentCategory('Lowongan-Karir-AGI', {
          includeAttributes: 'true'
        });
        const transformedData = contentCategoryTransformer(fetchApi, '');

        const karirData = [];
        for (let i = 0; i < transformedData.length; i++) {
          const id = transformedData[i].id;
          const title = transformedData[i].title;
          const infoTambahan1 = contentStringTransformer(
            transformedData[i].content['info-tambahan-1']
          );
          const infoTambahan2 = contentStringTransformer(
            transformedData[i].content['info-tambahan-2']
          );
          const parsedDate = parseISO(transformedData[i].createdAt);
          const infoTambahan3 = formatDistanceToNow(parsedDate, {
            addSuffix: true,
            locale: idTime
          });
          const icon1 = singleImageTransformer(
            transformedData[i].content['icon-1']
          );
          const icon2 = singleImageTransformer(
            transformedData[i].content['icon-2']
          );
          const icon3 = singleImageTransformer(
            transformedData[i].content['icon-3']
          );

          karirData.push({
            id,
            title,
            infoTambahan1,
            infoTambahan2,
            infoTambahan3,
            icon1,
            icon2,
            icon3
          });
        }
        setListKarir(karirData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      <div className="flex flex-col">
        <div className="w-full flex flex-col items-center justify-center text-center pt-[5rem] px-[32px] md:px-[136px]">
          <p className="font-karla font-bold text-heading-1-mobile lg:text-heading-1-desktop text-center text-purple_dark flex flex-col">
            {contentStringTransformer(pageData['body-judul'])}
            <span className="text-heading-2-mobile lg:text-heading-2-desktop text-black font-normal">
              {contentStringTransformer(pageData['body-sub-judul'])}
            </span>
          </p>
        </div>
        <div className="px-[2rem] md:px-[8.5rem] py-[5rem] flex flex-col gap-10 items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {purposeData.map((val, idx) => (
              <PurposeCard
                key={idx}
                title={val.title}
                desc={val.desc}
                link={val.link}
                icon={val.icon}
                href={val.route}
              />
            ))}
          </div>
        </div>
        <div className="bg-purple_superlight px-[2rem] md:px-[8.5rem] py-[5rem] md:pt-[5rem] md:pb-[100px]">
          <h2 className="font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop text-center font-semibold pb-[5rem] lg:pb-0">
            Lihat Lowongan di{' '}
            <span className="text-purple_dark">Avrist General Insurance</span>
          </h2>
          <CategoryWithThreeCards
            hideSearchBar
            hidePagination
            defaultSelectedCategory={category}
            onCategoryChange={(tab) => setCategory(tab)}
            filterRowLayout={true}
            hiddenCategory
            categories={['Karyawan', 'Tenaga Pemasar']}
            tabs={[
              {
                type: 'dropdown',
                label: 'tahun',
                options: [
                  { label: 'Pilih Tahun', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]
              }
            ]}
            customContent={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {paginatedData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col gap-2 items-start p-4 border rounded-xl bg-white"
                  >
                    <p className="font-bold text-[24px] font-opensanspro">{item.title}</p>
                    <div className="flex w-full flex-row items-center gap-2">
                      <Image
                        src={item?.icon1.imageUrl}
                        alt={item?.icon1.altText}
                        width={24}
                        height={24}
                      />
                      <p>{item?.infoTambahan1}</p>
                    </div>
                    <div className="flex w-full flex-row items-center gap-2">
                      <Image
                        src={item?.icon2.imageUrl}
                        alt={item?.icon2.altText}
                        width={24}
                        height={24}
                      />
                      <p>{item?.infoTambahan2}</p>
                    </div>
                    <div className="flex w-full flex-row items-center gap-2">
                      <Image
                        src={item?.icon3.imageUrl}
                        alt={item?.icon3.altText}
                        width={24}
                        height={24}
                      />
                      <p>{item?.infoTambahan3}</p>
                    </div>
                    <Link
                      key={index}
                      className="w-full"
                      href={`/hubungi-kami/tabs/karir/${item?.id}`}
                    >
                      <Button
                        title="Lihat Detail"
                        customButtonClass="rounded-xl w-full mt-5"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            }
          />
          <div className="flex flex-row justify-between">
            <p className="text-lg">
              Menampilkan{' '}
              <span className="font-bold">{`${currentPage * ITEMS_PER_PAGE - (ITEMS_PER_PAGE - 1)}-${ITEMS_PER_PAGE * currentPage > totalItem ? totalItem : ITEMS_PER_PAGE * currentPage}`}</span>{' '}
              dari <span className="font-bold">{totalItem}</span> hasil
            </p>
            <div className="flex flex-row gap-[12px] items-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => handleChangePage(page)}
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
                onClick={() => handleChangePage(totalPages)}
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karir;
