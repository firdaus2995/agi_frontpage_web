import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ContentPopover from '../content-popover';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import VideoPlayer from '@/components/molecules/specifics/agi/Klaim/VideoPlayer';
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
    if (content === '-' || content === '<p>-</p>') {
      return '';
    } else {
      return content;
    }
  };

  return (
    <div className="w-full px-[2rem] lg:px-[20.5rem] xs:py-[3.125rem] lg:pb-[6.25rem] lg:pt-0">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <p className="text-purple_dark font-semibold">
            {showContent(contentData.category)}
          </p>
          <p className="font-bold font-karla xs:text-[2.25rem] lg:text-[3.5rem]">
            {showContent(contentData.judulArtikel)}
          </p>
          <div className="flex flex-row justify-between items-center font-opensans">
            <div className="flex flex-col gap-[1rem]">
              <p>
                {showContent(contentData.tanggal)}{' '}
                {showContent(contentData.penulisArtikel) !== ''
                  ? '| ' + showContent(contentData.penulisArtikel)
                  : ''}
              </p>
              <div className="flex flex-row gap-2">
                {contentData.tags[0] !== '' &&
                  contentData.tags.length > 0 &&
                  contentData.tags.map(
                    (value: string, idx: React.Key | null | undefined) => (
                      <MediumTag key={idx} title={value} />
                    )
                  )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div
                className="flex flex-col gap-[2px] items-center"
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
                <div className="text-xs font-bold">Share</div>
              </div>

              <ContentPopover
                isOpenPopover={isOpenPopover}
                setIsOPenPopover={() => setIsOPenPopover(false)}
                message={showContent(contentData.judulArtikel)}
              />
            </div>
          </div>
        </div>
        {contentData.paragraf1 !== '<p>-</p>' && (
          <p
            dangerouslySetInnerHTML={{
              __html: showContent(contentData.paragraf1)
            }}
          />
        )}
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
        {contentData.paragraf2 !== '<p>-</p>' && (
          <p
            className="pt-10 w-full border-t"
            dangerouslySetInnerHTML={{
              __html: showContent(contentData.paragraf2)
            }}
          />
        )}
        {contentData?.artikelVideo !== '' && (
          <div className="mx-auto max-w-[70rem] aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <VideoPlayer
              thumbnail={''}
              url={showContent(contentData.artikelVideo) || ''}
              mute={true}
              color={''}
            />
          </div>
        )}
        {contentData.paragraf3 !== '<p>-</p>' && (
          <div
            className="flex flex-col lg:flex-row"
            dangerouslySetInnerHTML={{
              __html: showContent(contentData.paragraf3)
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Detail;
