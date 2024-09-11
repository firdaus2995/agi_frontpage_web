import React from 'react';

import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';

import GiveHeartSymbol from '@/assets/symbols/giveheart-symbol-gray.svg';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import HeartChatSymbol from '@/assets/symbols/heartchat-symbol-gray.svg';
import InfoRedSymbol from '@/assets/symbols/info-red-symbol.svg';
import ShieldSymbol from '@/assets/symbols/shield-symbol-gray.svg';

import CardCategoryA from '@/components/molecules/specifics/agi/Cards/CategoryA';
import CategorySideBySideSixCards from '@/components/molecules/specifics/agi/CategorySideBySideSixCards';
import GridContainer from '@/components/molecules/specifics/agi/Containers/Grid';
import SimpleContainer from '@/components/molecules/specifics/agi/Containers/Simple';
import CustomForm from '@/components/molecules/specifics/agi/CustomForm/Index';
import DescriptionCategoryA from '@/components/molecules/specifics/agi/Descriptions/CategoryA';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import InfoError from '@/components/molecules/specifics/agi/Info/Error';

const ProdukIndividuDetail = ({ params }: { params: { detail: string } }) => {
  console.log(params);

  return (
    <div className="flex flex-col">
      <Hero
        title="Produk"
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: 'Produk', href: '/produk/individu' },
          {
            title: 'Asuransi Penyimpanan Uang',
            href: '/produk/individu/asuransi-penyimpanan-uang'
          }
        ]}
        bottomImage={BLANK_IMAGE}
      />
      <SimpleContainer>
        <DescriptionCategoryA
          categoryTitle="Asuransi Aneka"
          productTitle="Asuransi Penyimpanan Uang"
          tags={['Asuransi Jiwa', 'Premi Tetap']}
        />
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
                'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at swipeswipeswipe in.'
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
      <FooterInformation
        title={
          <p className="text-[36px] lg:text-[56px] text-center lg:text-left">
            Ada yang bisa{' '}
            <span className="font-bold text-purple_dark">AvGen</span> bantu
            untuk Anda?
          </p>
        }
        buttonTitle="Tanya AvGen"
        image={BLANK_IMAGE}
      />
      <FooterCards
        bgColor="bg-cta4_bg"
        cards={[
          {
            title: 'Layanan Nasabah',
            subtitle: '021 5789 8188',
            icon: CUSTOMER_SERVICE
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            icon: MESSAGE
          },
          {
            title: 'Tanya Lewat Email',
            subtitle: 'Kirim Email',
            icon: EMAIL
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </div>
  );
};

export default ProdukIndividuDetail;
