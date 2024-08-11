'use client';
import { useState, useEffect, useCallback, Key } from 'react';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Button from '@/components/atoms/Button/Button';
import PersonCard from '@/components/molecules/specifics/agi/Cards/PersonCard';
import {
  handleGetContent,
  handleGetContentPage
} from '@/services/content-page.api';
import { ContentResponse } from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { BASE_URL } from '@/utils/baseUrl';
import {
  singleImageTransformer,
  contentStringTransformer,
  contentTransformer
} from '@/utils/responseTransformer';

interface ManagementComponentProps {
  setPageData: React.Dispatch<
    React.SetStateAction<ContentResponse | undefined>
  >;
  setData: React.Dispatch<React.SetStateAction<PageResponse | undefined>>;
}

const Manajemen: React.FC<ManagementComponentProps> = ({
  setPageData,
  setData
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState<any>({});

  const [contentData, setContentData] = useState<any>();
  const [managementList, setManagementList] = useState<any>();

  useEffect(() => {
    handleGetContentPage(
      BASE_SLUG.TENTANG_AVRIST_LIFE.PAGE.SEKILAS_PERUSAHAAN
    ).then((res: any) => {
      setData(res);
    });

    handleGetContent(BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.MANAJEMEN, {
      includeAttributes: 'true'
    }).then((res) => {
      setPageData(res);
      const { content } = contentTransformer(res);

      const managementList = [];
      for (let i = 0; i < 4; i++) {
        const title = contentStringTransformer(
          content[`nama-section-${i + 1}`]
        );
        const cards = content[`looping-section-${i + 1}`].contentData.map(
          (item: { details: any[] }) => ({
            name:
              item.details.find(
                (detail: { fieldId: string }) =>
                  detail.fieldId === 'manajemen-nama'
              )?.value || '',
            role:
              item.details.find(
                (detail: { fieldId: string }) =>
                  detail.fieldId === 'manajemen-title'
              )?.value || '',
            image: `${BASE_URL.image}/${
              JSON.parse(
                item.details.find(
                  (detail: { fieldId: string }) =>
                    detail.fieldId === 'manajemen-image'
                )?.value || '[{}]'
              )[0].imageUrl || ''
            }`,
            desc:
              item.details.find(
                (detail: { fieldId: string }) =>
                  detail.fieldId === 'manajemen-biografi'
              )?.value || '',
            onClick: handleCardClick
          })
        );
        if (title) {
          managementList.push({
            title: title,
            cards: cards
          });
        }
      }
      setManagementList(managementList);
      setContentData(content);
    });
  }, []);

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value === 'Manajemen') {
      // window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowDetail(false);
    } else {
      window.scrollTo({ top: 200 });
      setShowDetail(true);
    }
  }, [searchParams, showDetail]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleCardClick = (cardData: {
    image: string;
    name: string;
    role: string;
    desc: string;
  }) => {
    setDetailData({
      image: cardData?.image,
      name: cardData?.name,
      role: cardData?.role,
      desc: (
        <div className="flex flex-col gap-7">
          <div dangerouslySetInnerHTML={{ __html: cardData?.desc }} />
        </div>
      )
    });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      {detailData?.name ? (
        <div
          className="xs:px-[2rem] md:px-[8.5rem] xs:my-[2.25rem] sm:my-[5rem]"
          onClick={() => {
            setDetailData({});
            router.push(
              pathname + '?' + createQueryString('tab', 'Manajemen'),
              {
                scroll: false
              }
            );
          }}
        >
          <div className="flex flex-col gap-7 border rounded-xl p-[1.5rem] shadow-lg">
            <div className="flex xs:flex-col md:flex-row gap-[1.5rem] items-center border rounded-xl">
              <div className="xs:w-full xs:h-full sm:w-[213px] sm:h-[213px] rounded-xl">
                <Image
                  alt="blank-image"
                  src={detailData.image}
                  width={213}
                  height={213}
                  className="xs:rounded-t-xl md:rounded-xl xs:w-full xs:h-full sm:w-[213px] sm:h-[213px]"
                />
              </div>
              <div className="flex flex-col gap-2 xs:text-center md:text-start xs:mb-7 sm:mb-0">
                <p className="text-[36px] font-bold -tracking-[1.08px] font-karla">
                  {detailData.name}
                </p>
                <p className="text-[24px] font-semibold text-purple_dark">
                  {detailData.role}
                </p>
              </div>
            </div>
            <p className="font-opensans text-xl text-justify">
              {detailData.desc}
            </p>
          </div>
        </div>
      ) : contentData ? (
        <div className="flex flex-col gap-[3rem] xs:px-[2rem] md:px-[8.5rem] gap-[5rem] pb-[5rem]">
          <div className="mt-[5rem] flex flex-col gap-[3rem]">
            {managementList
              ? managementList?.map(
                  (item: any, index: Key | null | undefined) => (
                    <PersonCard
                      key={index}
                      heading={item.title}
                      cards={item.cards}
                      roleClassname="text-purple_dark"
                    />
                  )
                )
              : null}
          </div>
          <div className="flex flex-col xs:gap-[2.25rem] sm:gap-[5rem] items-center justify-center w-full">
            <div className="flex justify-center items-center">
              <p className="xs:text-[2.25rem] md:text-[3.5rem] font-bold text-purple_dark xs:text-center md:text-start">
                {contentStringTransformer(contentData['nama-section-5']) ?? ''}
              </p>
            </div>
            <div className="w-full flex xs:flex-col md:flex-row justify-between items-center border rounded-xl p-[1.5rem]">
              <p className="font-bold text-2xl xs:text-center md:text-start xs:mb-4 md:mb-0">
                {contentStringTransformer(contentData['teks-section-5']) ?? ''}
              </p>
              <Button
                title={
                  contentStringTransformer(
                    contentData['label-button-section-5']
                  ) ?? ''
                }
                customButtonClass="bg-purple_dark rounded-lg"
                customTextClass="text-white font-bold"
                onClick={() => {
                  singleImageTransformer(contentData['file-section-5'])
                    ? window.open(
                        singleImageTransformer(contentData['file-section-5'])
                          .imageUrl,
                        '_blank'
                      )
                    : null;
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Manajemen;
