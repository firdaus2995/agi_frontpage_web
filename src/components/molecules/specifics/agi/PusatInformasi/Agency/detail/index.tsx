import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ContentPopover from '../content-popover';
import BlankImage from '@/assets/images/blank-image.svg';
import Email from '@/assets/images/common/email.svg';
import Office from '@/assets/images/common/office.svg';
import Phone from '@/assets/images/common/phone.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import VideoPlayer from '@/components/molecules/specifics/avram/VideoPlayer';
import { handleGetContentDetail } from '@/services/content-page.api';
import {
  contentDetailTransformer,
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type agencyDetailProps = {
  pageData: any;
};

const Detail = (props: agencyDetailProps) => {
  const { pageData } = props;
  const searchParams = useSearchParams();
  const id = searchParams.get('content') ?? '';
  const [isOpenPopover, setIsOPenPopover] = useState<boolean>(false);
  const [contentData, setContentData] = useState<any>({
    category: '',
    judulArtikel: '',
    tanggal: '',
    tags: [],
    penulisArtikel: '',
    paragraf1: '',
    artikelImg: { imageUrl: '', altText: '' },
    paragraf2: '',
    artikelVideo: '',
    paragraf3: '',
    footnoteLabel1: '',
    footnoteLabel2: '',
    footnoteLabel3: '',
    footnoteLabel4: '',
    footnoteLabel5: '',
    footnoteLabel6: '',
    footnoteIcon1: { imageUrl: '', altText: '' },
    footnoteIcon2: { imageUrl: '', altText: '' },
    footnoteIcon3: { imageUrl: '', altText: '' },
    externalLinkLabel: '',
    externalLinkLabelBtn: '',
    externalLinkUrl: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentDetail(id);
        const { content } = contentDetailTransformer(data);
        const loopingItem = content['artikel-looping'].contentData[0].details;
        const category = data.data.categoryName;
        const judulArtikel = data.data.title;
        const tanggal = contentStringTransformer(content['tanggal']);
        const tags = contentStringTransformer(content['tags'])
          .split(',')
          .map((tag: string) => tag.trim());
        const penulisArtikel = contentStringTransformer(
          content['penulis-artikel']
        );
        const paragraf1 = contentStringTransformer(
          loopingItem.find(
            (item: { fieldId: string }) => item.fieldId === 'paragraf-satu'
          )
        );
        const artikelImg = singleImageTransformer(
          loopingItem.find(
            (item: { fieldId: string }) => item.fieldId === 'artikel-image'
          )
        );
        const paragraf2 = contentStringTransformer(
          loopingItem.find(
            (item: { fieldId: string }) => item.fieldId === 'paragraf-dua'
          )
        );
        const artikelVideo = contentStringTransformer(
          loopingItem.find(
            (item: { fieldId: string }) => item.fieldId === 'artikel-video'
          )
        );
        const paragraf3 = contentStringTransformer(
          loopingItem.find(
            (item: { fieldId: string }) => item.fieldId === 'paragraf-tiga'
          )
        );
        const footnoteLabel1 = contentStringTransformer(
          pageData['footnote-artikel-teks1']
        );
        const footnoteLabel2 = contentStringTransformer(
          pageData['footnote-artikel-teks2']
        );
        const footnoteLabel3 = contentStringTransformer(
          pageData['footnote-artikel-teks3']
        );
        const footnoteLabel4 = contentStringTransformer(
          pageData['footnote-artikel-teks4']
        );
        const footnoteLabel5 = contentStringTransformer(
          pageData['footnote-artikel-teks5']
        );
        const footnoteLabel6 = contentStringTransformer(
          pageData['footnote-artikel-teks6']
        );
        const footnoteIcon1 = singleImageTransformer(
          pageData['footnote-artikel-icon1']
        );
        const footnoteIcon2 = singleImageTransformer(
          pageData['footnote-artikel-icon2']
        );
        const footnoteIcon3 = singleImageTransformer(
          pageData['footnote-artikel-icon3']
        );
        const externalLinkLabel = contentStringTransformer(
          pageData['external-link-nama']
        );
        const externalLinkLabelBtn = contentStringTransformer(
          pageData['external-link-label-button']
        );
        const externalLinkUrl = contentStringTransformer(
          pageData['external-link-button']
        );

        const transformedData = {
          category,
          judulArtikel,
          tanggal,
          tags,
          penulisArtikel,
          paragraf1,
          artikelImg,
          paragraf2,
          artikelVideo,
          paragraf3,
          footnoteLabel1,
          footnoteLabel2,
          footnoteLabel3,
          footnoteLabel4,
          footnoteLabel5,
          footnoteLabel6,
          footnoteIcon1,
          footnoteIcon2,
          footnoteIcon3,
          externalLinkLabel,
          externalLinkLabelBtn,
          externalLinkUrl
        };

        console.log(transformedData);
        setContentData(transformedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [pageData]);

  const showContent = (content: string) => {
    if (content === '-') {
      return '';
    } else {
      return content;
    }
  };

  return (
    <div className="w-full px-[2rem] md:px-[23.281rem] xs:py-[3.125rem] md:pb-[1rem]">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <p className="text-purple_dark font-semibold">
            {showContent(contentData.category)}
          </p>
          <p className="font-bold font-karla xs:text-[2.25rem] md:text-[3.5rem]">
            {showContent(contentData.judulArtikel)}
          </p>
          <div className="flex flex-row justify-between items-center font-opensans">
            <div className="flex flex-col gap-[1rem]">
              <p>
                {showContent(contentData.tanggal)} |{' '}
                {showContent(contentData.penulisArtikel)}
              </p>
              <div className="flex flex-row gap-2">
                {contentData.tags.length > 0 &&
                  contentData.tags.map(
                    (value: string, idx: React.Key | null | undefined) => (
                      <MediumTag key={idx} title={value} />
                    )
                  )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div
                className="flex items-center"
                id="PopoverFocus"
                role="button"
                onClick={() => setIsOPenPopover(!isOpenPopover)}
              >
                <Icon
                  width={16}
                  height={16}
                  name="share"
                  color="purple_verylight"
                />
              </div>

              <div className="text-xs font-bold">Share</div>
              <ContentPopover
                isOpenPopover={isOpenPopover}
                setIsOPenPopover={() => setIsOPenPopover(false)}
                message={showContent(contentData.judulArtikel)}
              />
            </div>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: showContent(contentData.paragraf1)
          }}
        />
        {!contentData?.artikelImg?.imageUrl?.includes('no-image') && (
          <div className="bg-gray-200">
            <Image
              src={showContent(contentData.artikelImg.imageUrl) ?? BlankImage}
              alt="img"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        )}
        <p
          className="pt-10 w-full border-t"
          dangerouslySetInnerHTML={{
            __html: showContent(contentData.paragraf2)
          }}
        />
        {contentData?.artikelVideo !== '' && (
          <div className="mx-auto max-w-[70rem] aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <VideoPlayer
              thumbnail={''}
              url={showContent(contentData.artikelVideo) || ''}
            />
          </div>
        )}
        <div
          className="flex flex-col md:flex-row"
          dangerouslySetInnerHTML={{
            __html: showContent(contentData.paragraf3)
          }}
        />

        <div className="flex flex-col gap-5 p-5 border border-b-8 border-b-purple_dark rounded-xl">
          <p className="font-semibold text-xl">
            {showContent(contentData.footnoteLabel1)}
          </p>
          <div>
            <p className="font-semibold text-xl">
              {showContent(contentData.footnoteLabel2)}
            </p>
            <p className="text-xl">{showContent(contentData.footnoteLabel3)}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt={'email'}
                className="w-6"
                width={24}
                height={24}
                src={showContent(contentData.footnoteIcon1.imageUrl) ?? Email}
              />
              <p className="font-bold">
                {showContent(contentData.footnoteLabel4)}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt={'phone'}
                className="w-6"
                width={24}
                height={24}
                src={showContent(contentData.footnoteIcon2.imageUrl) ?? Phone}
              />
              <p className="font-bold">
                {showContent(contentData.footnoteLabel5)}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt={'office'}
                className="w-6"
                width={24}
                height={24}
                src={showContent(contentData.footnoteIcon3.imageUrl) ?? Office}
              />
              <p className="font-bold">
                {showContent(contentData.footnoteLabel6)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
