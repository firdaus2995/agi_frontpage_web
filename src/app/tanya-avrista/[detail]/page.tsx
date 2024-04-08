import React from 'react';

import { notFound } from 'next/navigation';
import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HOSPITAL from '@/assets/images/common/hospital.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import ArtikelTanyaAvrista from '@/components/molecules/specifics/avrast/TanyaAvrista/Artikel';
import { getDetailTanyaAvrista } from '@/services/detail-tanya-avrista.api';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const handleGetDetail = async (slug: string) => {
  try {
    const data = await getDetailTanyaAvrista(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

const DetailTanyaAvrista = async ({
  params
}: {
  params: { detail: string };
}) => {
  const data = await handleGetDetail(params.detail);
  const { title, content } = pageTransformer(data);

  const artikel = contentStringTransformer(content['body-jawaban']);
  const bannerImage = singleImageTransformer(content['title-image']);
  const footerImage = singleImageTransformer(content['cta1-image']);

  if (data.status !== 'OK') return notFound();

  return (
    <>
      <Hero
        title={title}
        imageUrl={bannerImage.imageUrl}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: 'Tanya Avrista', href: '/tanya-avrista' },
          {
            title: title,
            href: '#'
          },
          {
            title: 'Detail',
            href: '#'
          }
        ]}
      />
      <ArtikelTanyaAvrista title={title} content={artikel as string} />
      <RoundedFrameBottom />
      <FooterInformation
        title={
          <p className="font-karla text-[56px]">
            <span className="font-bold text-purple_dark">Komitmen</span> Kami,
            proses klaim yang{' '}
            <span className="font-bold text-purple_dark">efisien</span> dan{' '}
            <span className="font-bold text-purple_dark">solusi</span>
          </p>
        }
        buttonTitle="Panduan Klaim"
        href="/under-construction"
        image={footerImage.imageUrl}
      />
      <RoundedFrameTop />
      <FooterCards
        cards={[
          {
            title: 'Kelola Polis',
            subtitle: 'Pengkinian Data',
            href: 'https://my.avrist.com/welcome',
            icon: CONTACTS
          },
          {
            title: 'Rumah Sakit \n \n Rekanan',
            href: '/under-construction',
            icon: HOSPITAL
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            href: '/tanya-avrista',
            icon: MESSAGE
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            href: 'avrast/klaim-layanan/layanan/penanganan-pengaduan/aturan-asuransi',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </>
  );
};

export default DetailTanyaAvrista;
