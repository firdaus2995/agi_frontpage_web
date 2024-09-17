'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconWrapper from './components/IconWrapper';
import AGI_LOGO from '@/assets/images/agi-logo.svg';
import FOOTER_IMAGE from '@/assets/images/footer-image.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image.svg';
import { handleGetContentCategory } from '@/services/content-page.api';
import { getListGlobalConfig } from '@/services/global-config.api';
import {
  contentCategoryTransformer,
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const Footer = () => {
  const [globalConfig, setGlobalConfig] = useState<any>([]);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [contentData, setContentData] = useState<any>({});
  const footerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const globalConfig = await getListGlobalConfig();
      const fetchApi = await handleGetContentCategory('Header-Footer-AGI', {
        includeAttributes: 'true'
      });
      const transformedData = contentCategoryTransformer(fetchApi, '');
      setContentData(transformedData[0]?.content);

      setGlobalConfig(globalConfig.data.configs);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const getLink = (value: string) => {
    if (globalConfig.length === 0) {
      return '';
    }

    const foundItem = globalConfig.filter(
      (item: { variable: string }) => item.variable === value
    )[0];

    if (foundItem) {
      let linkValue = foundItem.value;
      if (linkValue.startsWith('0')) {
        linkValue = '62' + linkValue.slice(1);
      }
      return linkValue?.replace(" ", "");
    }

    return '';
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-purple_soft to-purple_dark text-white relative"
    >
      <div className="lg:p-16 p-8">
        <Image
          alt="Avrist"
          width={0}
          height={0}
          className="h-auto w-[10rem]"
          src={
            singleImageTransformer(contentData['logo-image'])?.imageUrl ??
            AGI_LOGO
          }
        />
        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-[minmax(10rem,_30rem)_minmax(8rem,_1fr)_1fr_1fr] mt-8 lg:gap-16 gap-10 flex flex-col">
          {/* Opening content */}
          <div className="flex flex-col gap-4 lg:gap-10">
            <p className="font-bold font-opensanspro text-footer-title">
              {contentStringTransformer(contentData['kolom-1-teks-1']) !== '-'
                ? contentStringTransformer(contentData['kolom-1-teks-1'])
                : ''}
            </p>
            <p className="text-xs font-extralight whitespace-pre-line">
              {contentStringTransformer(contentData['kolom-1-teks-2']) !== '-'
                ? contentStringTransformer(
                    contentData['kolom-1-teks-2']
                  )?.replace('?', '\n')
                : ''}
            </p>
            <Image
              width={0}
              height={0}
              alt="Avrist"
              className="h-auto min-w-[5rem] max-w-[25rem] w-full"
              src={
                singleImageTransformer(contentData['gambar-1'])?.imageUrl ??
                FOOTER_IMAGE
              }
            />
          </div>

          {/* Communication content */}
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="font-bold font-opensanspro text-footer-title">
              {contentStringTransformer(contentData['kolom-2-teks-1']) !== '-'
                ? contentStringTransformer(contentData['kolom-2-teks-1'])
                : ''}
            </p>
            <div className="text-sm flex flex-col gap-4 justify-between h-full">
              <div>
                <a
                  href={`tel:+${getLink('handphoneAGI')}`}
                  className="font-semibold font-karla text-footer-phone"
                >
                  {globalConfig.filter(
                    (item: { variable: string }) =>
                      item.variable === 'handphoneAGI'
                  )[0]?.value ?? ''}
                </a>
              </div>
              <div>
                <p className="font-semibold font-opensanspro text-footer-subtitle">
                  {contentStringTransformer(contentData['kolom-2-teks-2']) !==
                  '-'
                    ? contentStringTransformer(contentData['kolom-2-teks-2'])
                    : ''}
                </p>
                <a
                  href={`tel:+${getLink('phoneAGI')}`}
                  className="text-footer-list"
                >
                  {globalConfig.filter(
                    (item: { variable: string }) => item.variable === 'phoneAGI'
                  )[0]?.value ?? ''}
                </a>
              </div>
              <div>
                <p className="font-semibold font-opensanspro text-footer-subtitle">
                  {contentStringTransformer(contentData['kolom-2-teks-3']) !==
                  '-'
                    ? contentStringTransformer(contentData['kolom-2-teks-3'])
                    : ''}
                </p>
                <a
                  href={`mailto:${
                    globalConfig.filter(
                      (item: { variable: string }) =>
                        item.variable === 'emailAGI'
                    )[0]?.value ?? ''
                  }`}
                  className="text-footer-list"
                >
                  {globalConfig.filter(
                    (item: { variable: string }) => item.variable === 'emailAGI'
                  )[0]?.value ?? ''}
                </a>
              </div>
              <div>
                <a
                  href="/pusat-informasi/pusat-informasi?tab=Kantor+Cabang"
                  className="font-semibold font-opensanspro text-footer-subtitle whitespace-normal"
                >
                  {contentStringTransformer(contentData['kolom-2-teks-4']) !==
                  '-'
                    ? contentStringTransformer(contentData['kolom-2-teks-4'])
                    : ''}
                </a>
              </div>
            </div>
          </div>

          {/* Product content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold font-opensanspro text-footer-title">
              {contentStringTransformer(contentData['kolom-3-teks-1']) !== '-'
                ? contentStringTransformer(contentData['kolom-3-teks-1'])
                : ''}
            </p>
            <div className="flex flex-col gap-2 h-full text-sm font-light">
              {contentData['kolom-3-teks-2-looping']
                ? contentData['kolom-3-teks-2-looping']?.contentData?.map(
                    (item: any, index: any) => (
                      <Link key={index} href={item?.details[1].value}>
                        <p className="hover:text-purple_light cursor-pointer text-footer-list whitespace-nowrap">
                          {item?.details[0].value}
                        </p>
                      </Link>
                    )
                  )
                : null}
            </div>
          </div>

          {/* Investation content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold font-opensanspro text-footer-title">
              {contentStringTransformer(contentData['kolom-4-teks-1']) !== '-'
                ? contentStringTransformer(contentData['kolom-4-teks-1'])
                : ''}
            </p>
            <div className="flex flex-col gap-2 h-full">
              {contentData['kolom-4-teks-2-looping']
                ? contentData['kolom-4-teks-2-looping']?.contentData?.map(
                    (item: any, index: any) => (
                      <Link key={index} href={item?.details[1].value}>
                        <p className="font-semibold font-opensanspro text-footer-subtitle">
                          {item?.details[0].value}
                        </p>
                      </Link>
                    )
                  )
                : null}
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="border-solid border-purple_separator border-b my-8"></div>
        {/* Bottom content */}
        <div className="flex lg:flex-row flex-col justify-between lg:gap-4 gap-8 flex-wrap">
          {/* Additional information */}
          <div className="flex lg:flex-row flex-col justify-between gap-2 lg:gap-4 lg:items-center items-start lg:divide-x-2 lg:divide-x-0">
            <React.Fragment>
              <Link
                href={
                  contentStringTransformer(contentData['url-teks-1']) !== '-'
                    ? contentStringTransformer(contentData['url-teks-1'])
                    : ''
                }
              >
                <span className="font-bold text-footer-link lg:ml-4">
                  {contentStringTransformer(contentData['teks-1']) !== '-'
                    ? contentStringTransformer(contentData['teks-1'])
                    : ''}
                </span>
              </Link>
            </React.Fragment>
            <React.Fragment>
              <Link
                href={
                  contentStringTransformer(contentData['url-teks-2']) !== '-'
                    ? contentStringTransformer(contentData['url-teks-2'])
                    : ''
                }
              >
                <span className="font-bold text-footer-link lg:ml-4">
                  {contentStringTransformer(contentData['teks-2']) !== '-'
                    ? contentStringTransformer(contentData['teks-2'])
                    : ''}
                </span>
              </Link>
            </React.Fragment>
            <React.Fragment>
              <Link
                href={
                  contentStringTransformer(contentData['url-teks-3']) !== '-'
                    ? contentStringTransformer(contentData['url-teks-3'])
                    : ''
                }
              >
                <span className="font-bold text-footer-link lg:ml-4">
                  {contentStringTransformer(contentData['teks-3']) !== '-'
                    ? contentStringTransformer(contentData['teks-3'])
                    : ''}
                </span>
              </Link>
            </React.Fragment>
          </div>
          {/* Social media */}
          <div className="flex items-center gap-4">
            {contentData['icon-looping']
              ? contentData['icon-looping']?.contentData?.map(
                  (item: any, index: any) => (
                    <IconWrapper key={index}>
                      <Link href={item?.details[1].value} target="_blank">
                        <Image
                          src={
                            singleImageTransformer(item?.details[0])
                              ?.imageUrl ?? ''
                          }
                          alt={
                            singleImageTransformer(item?.details[0])?.altText ??
                            ''
                          }
                          width={20}
                          height={20}
                        />
                      </Link>
                    </IconWrapper>
                  )
                )
              : null}
          </div>
        </div>
      </div>
      <Link
        href={`https://api.whatsapp.com/send?phone=${getLink('handphoneAGI')}`}
        target="_blank"
      >
        <Image
          alt="Whatsapp"
          height={0}
          width={0}
          className={`${
            isAtFooter
              ? 'absolute bottom-full right-[10px] translate-y-1/2'
              : 'fixed right-[10px] 2xl:right-[calc((100vw-1536px)/2+10px)] 3xl:right-[calc((100vw-2000px)/2+10px)] bottom-0 z-[999]'
          } aspect-square w-[84px]`}
          src={WHATSAPP_IMAGE.src}
        />
      </Link>
    </footer>
  );
};

export default Footer;
