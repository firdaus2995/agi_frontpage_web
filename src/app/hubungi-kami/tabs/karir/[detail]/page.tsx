'use client';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id as idTime } from 'date-fns/locale';
import Image from 'next/image';
import ApplyJobModal from '../component/modal/modal';
import ContentPopover from '@/app/berita/berita/components/popover';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { SuccessModal } from '@/components/molecules/specifics/agi/Modal';
import {
  handleGetContentDetail,
  handleGetContentPage
} from '@/services/content-page.api';
import {
  contentDetailTransformer,
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const initialData = {
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
  }
};

const DetailKarir = ({ params }: { params: { detail: string } }) => {
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [cta4Data, setCta4Data] = useState<typeof initialData>(initialData);
  const [footerText, setFooterText] = useState('');
  const [footerBtnLabel, setFooterBtnLabel] = useState('');
  const [footerBtnUrl, setFooterBtnUrl] = useState('');
  const [formId, setFormId] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [detailData, setDetailData] = useState<any>({});
  const [isOpenPopover, setIsOPenPopover] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentPage('hal-karir-agi-new');
        const { content } = pageTransformer(data);

        setTitleImage(singleImageTransformer(content['title-image']));
        setFooterImage(singleImageTransformer(content['cta1-image']));
        setFooterText(contentStringTransformer(content['cta1-teks']));
        setFooterBtnLabel(
          contentStringTransformer(content['cta1-label-button'])
        );
        setFooterBtnUrl(contentStringTransformer(content['cta1-link-button']));
        setFormId(contentStringTransformer(content['form-karir']));

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

        setCta4Data({
          cta41,
          cta42,
          cta43,
          cta44
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentDetail(params?.detail);
        const { content } = contentDetailTransformer(data);

        setTitle(data.data.title);
        setDetailData(content);
        const parsedDate = parseISO(data.data.createdAt);
        const infoTambahan3 = formatDistanceToNow(parsedDate, {
          addSuffix: true,
          locale: idTime
        });
        setDate(infoTambahan3);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const renderedDescription = (description: string) => {
    const isOrdered = description.includes('<ol>');
    const isUnordered = description.includes('<ul>');

    if (isOrdered) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /<ol>/g,
              `<ol class="list-decimal pl-6 font-karla">`
            )
          }}
        />
      );
    }
    if (isUnordered) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /<ul>/g,
              `<ul class="list-disc pl-6 font-karla">`
            )
          }}
        />
      );
    }

    return <p dangerouslySetInnerHTML={{ __html: description }}></p>;
  };

  return (
    <>
      <Hero
        title="Karir"
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: 'Karir',
            href: '/hubungi-kami?tab=Karir'
          }
        ]}
        imageUrl={titleImage.imageUrl}
      />

      <div className="flex items-center justify-center w-full px-[2rem] md:px-[8.5rem] xs:pt-[2.5rem] md:pt-0 xs:pb-[5rem] md:pb-[6.25rem]">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-information-title-mobile lg:text-information-title-desktop">
              {title}
            </p>
            <div className="flex flex-col lg:flex-row justify-end lg:justify-between items-end lg:items-center gap-4 lg:gap-10">
              <div className="flex flex-row gap-4 text-nowrap flex-wrap text-md">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={singleImageTransformer(detailData['icon-1']).imageUrl}
                    alt={singleImageTransformer(detailData['icon-1']).altText}
                    width={24}
                    height={24}
                  />
                  <p>
                    {contentStringTransformer(detailData['info-tambahan-1'])}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={singleImageTransformer(detailData['icon-2']).imageUrl}
                    alt={singleImageTransformer(detailData['icon-2']).altText}
                    width={24}
                    height={24}
                  />
                  <p>
                    {contentStringTransformer(detailData['info-tambahan-2'])}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={singleImageTransformer(detailData['icon-3']).imageUrl}
                    alt={singleImageTransformer(detailData['icon-3']).altText}
                    width={24}
                    height={24}
                  />
                  <p className="lg:whitespace-nowrap">{date}</p>
                </div>
              </div>
              <div
                role="button"
                id="PopoverFocus"
                onClick={() => setIsOPenPopover(!isOpenPopover)}
                className="flex flex-row gap-1 items-center"
              >
                <div className="flex items-center">
                  <Icon
                    width={24}
                    height={24}
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
          <div
            className={
              contentStringTransformer(detailData['isi-lowongan-1']) ===
              '<p>-</p>'
                ? 'hidden'
                : 'career-content'
            }
          >
            {renderedDescription(
              contentStringTransformer(detailData['isi-lowongan-1'])
            )}
          </div>
          <div
            className={
              contentStringTransformer(detailData['isi-lowongan-2']) ===
              '<p>-</p>'
                ? 'hidden'
                : 'career-content'
            }
          >
            {renderedDescription(
              contentStringTransformer(detailData['isi-lowongan-2'])
            )}
          </div>
          <div
            className={
              contentStringTransformer(detailData['isi-lowongan-3']) ===
              '<p>-</p>'
                ? 'hidden'
                : 'career-content'
            }
          >
            {renderedDescription(
              contentStringTransformer(detailData['isi-lowongan-3'])
            )}
          </div>
          <div className="">
            <Button onClick={() => setOpenDialog(true)}>
              Apply For This job
            </Button>
          </div>
        </div>
      </div>

      <FooterInformation
        title={
          <p
            className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3 font-karla"
            dangerouslySetInnerHTML={{ __html: footerText ?? '' }}
          />
        }
        buttonTitle={footerBtnLabel}
        image={footerImage.imageUrl}
        href={footerBtnUrl}
      />

      <div className="w-full h-full md:bg-cta4_bg">
        <FooterCards
          cards={[
            {
              title: cta4Data.cta41?.title,
              icon: cta4Data.cta41?.icon,
              subtitle: cta4Data.cta41?.subtitle,
              href: cta4Data.cta41?.url
            },
            {
              title: cta4Data.cta42?.title,
              icon: cta4Data.cta42?.icon,
              subtitle: cta4Data.cta42?.subtitle,
              href: cta4Data.cta42?.url
            },
            {
              title: cta4Data.cta43?.title,
              icon: cta4Data.cta43?.icon,
              subtitle: cta4Data.cta43?.subtitle,
              href: cta4Data.cta43?.url
            },
            {
              title: cta4Data.cta44?.title,
              icon: cta4Data.cta44?.icon,
              subtitle: cta4Data.cta44?.subtitle,
              href: cta4Data.cta44?.url
            }
          ]}
        />
      </div>
      {openDialog && (
        <ApplyJobModal
          isOpen={openDialog}
          formId={formId}
          onClose={() => setOpenDialog(false)}
          setIsSuccess={(e) => setShowSuccess(e)}
        />
      )}
      <div className="absolute">
        <SuccessModal
          show={showSuccess}
          onClose={() => {
            setShowSuccess(false);
            window.location.reload();
          }}
        />
      </div>
    </>
  );
};

export default DetailKarir;
