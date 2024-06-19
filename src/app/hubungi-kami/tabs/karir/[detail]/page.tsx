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

const DetailKarir = ({ params }: { params: { detail: string } }) => {
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [listBanner, setListBanner] = useState<any[]>([]);
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

        const cta4Data = [];
        for (let i = 0; i < 4; i++) {
          const icon = singleImageTransformer(content[`cta4-${i + 1}-icon`]);
          const title = contentStringTransformer(content[`cta4-${i + 1}-nama`]);
          const subtitle = contentStringTransformer(
            content[`cta4-${i + 1}-label-link`]
          );
          const href = contentStringTransformer(content[`cta4-${i + 1}-link`]);

          if (icon && title && subtitle) {
            cta4Data.push({
              icon: icon.imageUrl,
              title: title,
              subtitle: subtitle,
              href: href
            });
          }
        }

        setListBanner(cta4Data);
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
        console.log(content);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

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

      <div className="flex items-center justify-center w-full px-[2rem] md:px-[8.5rem] xs:pt-[2.5rem] md:pt-[5rem] xs:pb-[3.125rem] md:[6.25rem]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-semibold xs:text-[2.5rem] md:text-[5rem]">
              {title}
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 text-nowrap text-md">
                <div className="flex w-full flex-row items-center gap-2">
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
                <div className="flex w-full flex-row items-center gap-2">
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
                <div className="flex w-full flex-row items-center gap-2">
                  <Image
                    src={singleImageTransformer(detailData['icon-3']).imageUrl}
                    alt={singleImageTransformer(detailData['icon-3']).altText}
                    width={24}
                    height={24}
                  />
                  <p>{date}</p>
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
          <p
            className="career-content"
            dangerouslySetInnerHTML={{
              __html:
                contentStringTransformer(detailData['isi-lowongan-1']) ?? ''
            }}
          />
          <div
            className="career-content"
            dangerouslySetInnerHTML={{
              __html:
                contentStringTransformer(detailData['isi-lowongan-2']) ?? ''
            }}
          />
          <div
            className="career-content"
            dangerouslySetInnerHTML={{
              __html:
                contentStringTransformer(detailData['isi-lowongan-3']) ?? ''
            }}
          />
          <div className="p-4">
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

      <FooterCards bgColor="md:bg-purple_superlight" cards={listBanner} />
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
