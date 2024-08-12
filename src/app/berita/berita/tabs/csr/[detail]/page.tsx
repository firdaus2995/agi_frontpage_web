'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ContentPopover from '@/app/berita/berita/components/popover';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import VideoPlayer from '@/components/molecules/specifics/agi/Klaim/VideoPlayer';
import { SubmittedFormModal } from '@/components/molecules/specifics/agi/Modal/SubmittedFormModal';
import { handleGetContentPage } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentDetailTransformer,
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const initialData = {
  judul: '',
  titleImageUrl: '',
  bannerImageUrl: '',
  titleAltText: '',
  bannerAltText: '',
  footerInfoAltText: '',
  footerInfoImageUrl: '',
  footerText: '',
  footerBtnLabel: '',
  footerBtnUrl: '',
  cta41: {
    icon: '',
    title: '',
    subtitle: '',
    url: ''
  },
  cta42: {
    icon: '',
    title: '',
    subtitle: '',
    url: ''
  },
  cta43: {
    icon: '',
    title: '',
    subtitle: '',
    url: ''
  },
  cta44: {
    icon: '',
    title: '',
    subtitle: '',
    url: ''
  },
  footnote: {
    judul: '',
    nama: '',
    posisi: '',
    icon1: '',
    email: '',
    icon2: '',
    phone: '',
    icon3: '',
    alamat: ''
  }
};

const DetailCSR = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const slug = pathSegments[pathSegments.length - 1];
  const [isOpenPopover, setIsOPenPopover] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [contentData, setContentData] = useState<any>();
  const [data, setData] = useState<typeof initialData>(initialData);
  const [visibleSubscribeModal, setVisibleSubscribeModal] =
    useState<boolean>(false);
  // const [emailContent, setEmailContent] = useState('');

  const fetchData = () => {
    try {
      handleGetContentPage(BASE_SLUG.BERITA.PAGE.CSR).then((res: any) => {
        const { content } = pageTransformer(res);
        const titleImage = singleImageTransformer(content['title-image']);
        const judul = contentStringTransformer(content['title-judul']);
        const bannerImage = singleImageTransformer(content['banner-image']);
        const footerImage = singleImageTransformer(content['cta1-image']);
        const footerText = contentStringTransformer(content['cta1-teks']);
        const footerBtnLabel = contentStringTransformer(
          content['cta1-label-button']
        );
        const footerBtnUrl = contentStringTransformer(
          content['cta1-link-button']
        );

        const cta41 = {
          icon: singleImageTransformer(content['cta4-1-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-1-nama']),
          subtitle: contentStringTransformer(content['cta4-1-label-link']),
          url: contentStringTransformer(content['cta4-1-link'])
        };
        const cta42 = {
          icon: singleImageTransformer(content['cta4-2-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-2-nama']),
          subtitle: contentStringTransformer(content['cta4-2-label-link']),
          url: contentStringTransformer(content['cta4-2-link'])
        };
        const cta43 = {
          icon: singleImageTransformer(content['cta4-3-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-3-nama']),
          subtitle: contentStringTransformer(content['cta4-3-label-link']),
          url: contentStringTransformer(content['cta4-3-link'])
        };
        const cta44 = {
          icon: singleImageTransformer(content['cta4-4-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-4-nama']),
          subtitle: contentStringTransformer(content['cta4-4-label-link']),
          url: contentStringTransformer(content['cta4-4-link'])
        };
        const footnote = {
          judul: content['footnote-artikel-teks1'].value,
          nama: content['footnote-artikel-teks2'].value,
          posisi: content['footnote-artikel-teks3'].value,
          icon1: singleImageTransformer(content['footnote-artikel-icon1'])
            .imageUrl,
          email: content['footnote-artikel-teks4'].value,
          icon2: singleImageTransformer(content['footnote-artikel-icon2'])
            .imageUrl,
          phone: content['footnote-artikel-teks5'].value,
          icon3: singleImageTransformer(content['footnote-artikel-icon3'])
            .imageUrl,
          alamat: content['footnote-artikel-teks6'].value
        };

        setData({
          titleImageUrl: titleImage.imageUrl,
          judul,
          bannerImageUrl: bannerImage.imageUrl,
          titleAltText: titleImage.altText,
          bannerAltText: bannerImage.altText,
          footerInfoAltText: footerImage.altText,
          footerInfoImageUrl: footerImage.imageUrl,
          footerText,
          footerBtnLabel,
          footerBtnUrl,
          cta41,
          cta42,
          cta43,
          cta44,
          footnote
        });
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchDetailData = async () => {
    const response = await fetch(`/api/berita/${slug}`);
    const jsonData = await response.json();

    const { content } = contentDetailTransformer(jsonData);

    const tagline = content['tags'].value;
    const judul = jsonData.data.title;
    const penulis = content['penulis-artikel'].value;
    const bulan = content['bulan'].value;
    const tahun = content['tahun'].value;
    const artikel = content['artikel-looping'].contentData;
    const tanggal = content['tanggal'].value;
    const loopArtikel = artikel.map((item: any, itemIndex: number) => {
      return (
        <React.Fragment key={itemIndex}>
          {item.details.map((detailItem: any, detailIndex: number) => {
            const fieldType = detailItem.fieldType;
            const isNotEmpty =
              detailItem.value !== '<p>-</p>' &&
              detailItem.value !== '["-"]' &&
              detailItem.value !== '-' &&
              detailItem.value !==
                '[{"imageUrl":"no-image","altText":"no-image"}]';
            if (fieldType === 'TEXT_EDITOR' && isNotEmpty) {
              return (
                <span
                  dangerouslySetInnerHTML={{
                    __html: detailItem.value
                  }}
                  key={detailIndex}
                />
              );
            }
            if (fieldType === 'IMAGE' && isNotEmpty) {
              return (
                <div className="bg-gray-200" key={detailIndex}>
                  <Image
                    src={
                      singleImageTransformer(detailItem).imageUrl ?? BlankImage
                    }
                    alt="img"
                    className="w-full"
                    width={238}
                    height={172}
                  />
                </div>
              );
            }
            if (fieldType === 'YOUTUBE_URL' && isNotEmpty) {
              return (
                <div
                  className="w-full xs:h-[250px] md:h-[650px] xs:mb-10 md:mb-0"
                  key={detailIndex}
                >
                  <VideoPlayer
                    thumbnail=""
                    url={detailItem.value ?? ''}
                    color="purple_dark"
                    type="Artikel Video"
                    mute={true}
                  />
                </div>
              );
            }
            return null;
          })}
        </React.Fragment>
      );
    });
    const tags = content['tags'].value;
    const thumbnail = singleImageTransformer(
      content['artikel-thumbnail']
    ).imageUrl;

    const transformedData = {
      tagline,
      judul,
      penulis,
      bulan,
      tahun,
      tags,
      tanggal,
      loopArtikel,
      thumbnail
    };

    setContentData(transformedData);
    setThumbnail(transformedData.thumbnail);
    return transformedData;
  };

  useEffect(() => {
    fetchData();
    fetchDetailData();
  }, []);

  return (
    <>
      <div className="absolute">
        <SubmittedFormModal
          show={visibleSubscribeModal}
          onClose={() => setVisibleSubscribeModal(false)}
        />
      </div>
      <Hero
        title={data?.judul ?? 'CSR'}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: data?.judul ?? 'CSR',
            href: '#'
          }
        ]}
        imageUrl={data?.titleImageUrl}
        bottomImage={thumbnail ?? BlankImage}
      />

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col px-[2rem] pt-[3.125rem] md:px-[20.5rem] md:pt-[5rem] pb-[6.25rem] gap-[3rem]">
          <div className="flex flex-col">
            <p className="text-purple_dark font-bold mb-[0.5rem] font-karla text-[1.5rem]">
              CSR
            </p>
            <p className="font-bold mb-[0.75rem] font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop">
              {contentData?.judul}
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-[0.75rem] font-opensans">
                <p>
                  {contentData?.tanggal !== '-' ? contentData?.tanggal : ''}
                  {contentData?.penulis !== '-'
                    ? ' | ' + contentData?.penulis
                    : ''}
                </p>
                <div className="flex flex-row gap-2">
                  {contentData?.tags
                    .split(/\s*,\s*/)
                    .map((item: string, index: number) => (
                      <MediumTag title={item} key={index} />
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div
                  className="flex items-center"
                  role="button"
                  id="PopoverFocus"
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
                  message={''}
                />
              </div>
            </div>
          </div>

          {/* Loop Artikel */}

          {contentData
            ? contentData?.loopArtikel?.map((item: any) => item)
            : null}
        </div>
      </div>

      <div className="flex flex-col">
        <FooterInformation
          title={
            <p
              className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3 font-karla"
              dangerouslySetInnerHTML={{ __html: data?.footerText ?? '' }}
            />
          }
          buttonTitle={data?.footerBtnLabel}
          image={data?.footerInfoImageUrl}
          href={data?.footerBtnUrl}
        />
      </div>
      <div className="w-full h-full md:bg-cta4_bg">
        <FooterCards
          cards={[
            {
              title: data.cta41?.title,
              icon: data.cta41?.icon,
              subtitle: data.cta41?.subtitle,
              href: data.cta41?.url
            },
            {
              title: data.cta42?.title,
              icon: data.cta42?.icon,
              subtitle: data.cta42?.subtitle,
              href: data.cta42?.url
            },
            {
              title: data.cta43?.title,
              icon: data.cta43?.icon,
              subtitle: data.cta43?.subtitle,
              href: data.cta43?.url
            },
            {
              title: data.cta44?.title,
              icon: data.cta44?.icon,
              subtitle: data.cta44?.subtitle,
              href: data.cta44?.url
            }
          ]}
        />
      </div>
    </>
  );
};

export default DetailCSR;
