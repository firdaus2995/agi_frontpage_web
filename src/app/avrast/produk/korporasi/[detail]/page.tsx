import React from 'react';
import Image from 'next/image';

import GambarProdukKorporasiDetail from '@/assets/images/gambar-produk-korporasi-detail.svg';
import PlayVideo from '@/assets/images/play-video.svg';
import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukIndividuImage from '@/assets/images/produk-individu-image.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';
import GiveHeartSymbol from '@/assets/symbols/giveheart-symbol.svg';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import HeartChatSymbol from '@/assets/symbols/heartchat-symbol.svg';
import InfoRedSymbol from '@/assets/symbols/info-red-symbol.svg';
import ShieldSymbol from '@/assets/symbols/shield-symbol.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import CardCategoryA from '@/components/molecules/specifics/avrast/Cards/CategoryA';
import CategorySideBySideSixCards from '@/components/molecules/specifics/avrast/CategorySideBySideSixCards';
import GridContainer from '@/components/molecules/specifics/avrast/Containers/Grid';
import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import CustomForm from '@/components/molecules/specifics/avrast/CustomForm/Index';
import DescriptionCategoryA from '@/components/molecules/specifics/avrast/Descriptions/CategoryA';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import InfoError from '@/components/molecules/specifics/avrast/Info/Error';

export const generateStaticParams = () => {
  return [{ detail: 'avrist-group-health-care-silver' }];
};

const ProdukKorporasiDetail = ({ params }: { params: { detail: string } }) => {
  console.log(params);

  return (
    <div className="flex flex-col">
      <Hero
        title="Produk"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Produk', href: '/avrast/produk/korporasi' },
          {
            title: 'Avrist Pasti',
            href: '/avrast/produk/korporasi/avrist-group-health-care-silver'
          }
        ]}
        bottomImage={GambarProdukKorporasiDetail}
      />
      <SimpleContainer>
        <DescriptionCategoryA
          categorySymbol={GiveHeartSymbol}
          categoryTitle="Asuransi Jiwa Individu"
          productTitle="Avrist Group Health Care Silver"
          tags={['Asuransi Jiwa', 'Premi Tetap', 'Premi Berkala']}
        />
        <Image className="self-center" alt="play_video" src={PlayVideo} />
        <CategorySideBySideSixCards
          leftSide={[
            {
              symbol: ShieldSymbol,
              title: 'Manfaat Produk',
              description:
                'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
            },
            {
              symbol: HeartChatSymbol,
              title: 'Keunggulan Produk',
              description:
                'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
            },
            {
              symbol: GiveHeartSymbol,
              title: 'Periode Perlindungan',
              description:
                'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
            }
          ]}
          rightSide={[
            {
              title: 'Ringkasan Produk',
              description: `1. Kondisi Yang Sudah Ada Sebelumnya (Pre-Existing Conditions)
                2. Pemeriksaan kesehatan rutin atau pemeriksaan yang tidak ada hubungannya dengan Penyakit atau Cidera
                3. Penyakit bawaan, cacat atau kelainan sejak lahir
                
                Untuk selengkapnya, silahkan mengacu kepada ketentuan Polis untuk mengetahui jenis-jenis kondisi yang dikecualikan.`
            },
            {
              title: 'Ringkasan Produk',
              description:
                'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.',
              hasDownloadButton: true
            },
            {
              title: 'Download Brosur',
              description:
                'Informasi lebih lanjut mengenai produk Avrist Pasti dengan mengunduh brosur.',
              hasDownloadButton: true
            }
          ]}
        />
        <InfoError
          symbol={InfoRedSymbol}
          title="Jalur Pemasaran"
          description={`
            <p>1. Tersedia dan dijual di: Tenaga Pemasar dan Bank Partner.</p>
            <p>2. PT Avrist Life Insurance berizin dan diawasi oleh Otoritas Jasa Keuangan, dan tenaga pemasarnya telah memegang lisensi dari Asosiasi Asuransi Jiwa Indonesia.</p>
            <p>3. Produk asuransi yang merupakan hasil kerja sama PT Avrist Life Insurance dengan bank mitra, untuk nasabah setia bank mitra kami.</p>
            <p>4. Bank Partner: BCA, Mandiri, Permata</p>
          `}
        />
      </SimpleContainer>
      <SimpleContainer bgColor="purple_superlight">
        <CustomForm />
      </SimpleContainer>
      <GridContainer
        gridCols={1}
        gridColsSm={3}
        px="32px"
        pxSm="136px"
        py="36px"
        pySm="72px"
        textTitle="Rekomendasi Produk Lainnya"
      >
        {[...Array(3)].map((_, index) => (
          <CardCategoryA
            key={index}
            symbol={HeartSymbol}
            title="Asuransi Jiwa"
            summary="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet"
            tags={['Asuransi Jiwa', 'Premi Tetap', 'Premi Berkala']}
          />
        ))}
      </GridContainer>
      <RoundedFrameBottom frameColor="bg-white" />
      <FooterInformation
        title={
          <p className="text-[56px]">
            <span className="font-bold text-purple_dark">Hello,</span> Ada yang
            bisa <span className="font-bold text-purple_dark">Avrista</span>{' '}
            bantu?
          </p>
        }
        buttonTitle="Tanya Avrista"
        image={ProdukIndividuImage}
      />
      <RoundedFrameTop bgColor='bg-white' />
      <FooterCards
        cards={[
          {
            title: 'Rumah Sakit Rekanan',
            icon: ProdukRumahSakit
          },
          {
            title: 'Klaim & Layanan',
            icon: ProdukClaim,
            subtitle: 'Lebih Lanjut'
          },
          {
            title: 'Kelola Polis',
            icon: ProdukPolis,
            subtitle: 'Login Akun'
          },
          {
            title: 'Testimonial',
            icon: ProdukTestimoni,
            subtitle: 'Lebih Lanjut'
          }
        ]}
      />
    </div>
  );
};

export default ProdukKorporasiDetail;
