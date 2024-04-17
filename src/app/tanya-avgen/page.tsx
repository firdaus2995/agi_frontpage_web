import React from 'react';

import Image from 'next/image';
import BG_DUMMY from '@/assets/images/agi/search-bg.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_CHART from '@/assets/images/common/document-chart.svg';
import NOTES from '@/assets/images/common/notes.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image-small.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import FAQList from '@/components/molecules/specifics/agi/TanyaAvrista/FAQList';
import SearchTerm from '@/components/molecules/specifics/agi/TanyaAvrista/SearchTerm';
import TopicsCard from '@/components/molecules/specifics/agi/TanyaAvrista/TopicsCard';

const breadcrumbsData = [
  { title: 'Beranda', href: '/' },
  { title: 'Tanya AvGen', href: '#' }
];

// const topics = [
//   { iconKey: 'topik1-icon', textKey: 'topik1-teks' },
//   { iconKey: 'topik2-icon', textKey: 'topik2-teks' },
//   { iconKey: 'topik3-icon', textKey: 'topik3-teks', color: 'bg-green_border' },
//   { iconKey: 'topik4-icon', textKey: 'topik4-teks', color: 'bg-orange_border' },
//   { iconKey: 'topik5-icon', textKey: 'topik5-teks' },
//   { iconKey: 'topik6-icon', textKey: 'topik6-teks' },
//   { iconKey: 'topik7-icon', textKey: 'topik7-teks' },
//   { iconKey: 'topik8-icon', textKey: 'topik8-teks', color: 'bg-[#8C8B89]' }
// ];

// const handleGetContent = async (slug: string) => {
//   try {
//     const data = await getTanyaAvrista(slug);
//     return data;
//   } catch (error) {
//     return notFound();
//   }
// };

const TanyaAvrista = async () => {
  // const data = await handleGetContent('tanya-avrista');
  // const { content } = pageTransformer(data);

  // const titleImage = singleImageTransformer(content['title-image']);
  // const bannerImage = singleImageTransformer(content['banner-image']);
  // const footerInformationImage = singleImageTransformer(content['cta1-image']);

  // const cards = topics.map((topic) => ({
  //   title: contentStringTransformer(content[topic.textKey]),
  //   icon: singleImageTransformer(content[topic.iconKey]).imageUrl,
  //   color: topic.color
  // }));

  const cards = [
    {
      title: 'Produk',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Rekanan',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Pengaduan',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Klaim',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Kantor Cabang',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Travel',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Pembayaran',
      icon: BlankImage,
      color: 'bg-purple_light'
    },
    {
      title: 'Topik Lain',
      icon: BlankImage,
      color: 'bg-purple_light'
    }
  ];

  return (
    <div>
      <Hero title="Tanya AvGen" breadcrumbsData={breadcrumbsData} />
      <SearchTerm bannerImage={BG_DUMMY} />
      <TopicsCard cards={cards} />
      <FAQList />
      <RoundedFrameBottom />
      <FooterInformation
        title={
          <div className="flex flex-col gap-5">
            <p className="font-karla text-[48px]">
              Kami ada untuk membantu Anda.
            </p>
            <p className="font-black text-purple_dark font-karla text-[48px]">
              Hubungi Kami
            </p>
            <div className="rounded-lg border-2 border-purple_dark p-4 flex items-center justify-center gap-2">
              <Image src={WHATSAPP_IMAGE} alt="wa" width={24} />
              <p className="text-xl font-semibold text-purple_dark">
                0811 1960 1000
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p>
                <span className="font-bold">Waktu Operasional:</span> Senin -
                Jumat, 08.00 - 17.00 WIB
              </p>
            </div>
          </div>
        }
        image={BlankImage}
        href="/klaim-layanan/layanan?tab=Informasi+Nasabah"
      />
      <RoundedFrameTop />
      <FooterCards
        bgColor="bg-purple_superlight"
        cards={[
          {
            title: 'Tabel Suku Bunga',
            subtitle: 'Lebih Lanjut',
            icon: DOCUMENT_CHART
          },
          {
            title: 'Pengkinian Data',
            subtitle: 'Lebih Lanjut',
            icon: CONTACTS,
            href: 'https://my.avrist.com/welcome'
          },
          {
            title: 'Pengajuan Klaim',
            subtitle: 'Lebih Lanjut',
            icon: RECEIPT,
            href: '/klaim-layanan/klaim?tab=Panduan+%26+Pengajuan'
          },
          {
            title: 'Panduan Polis',
            subtitle: 'Lebih Lanjut',
            icon: NOTES,
            href: '/klaim-layanan/layanan?tab=Informasi+Nasabah'
          }
        ]}
      />
    </div>
  );
};

export default TanyaAvrista;
