import Image from 'next/image';

import HeroDplk3 from '@/assets/images/avrast/dplk/hero-dplk-3.svg';
import YellowHeart from '@/assets/images/avrast/dplk/klaim-layanan.svg';
import VideoDplk from '@/assets/images/avrast/dplk/videotron-dplk.svg';
import YellowChat from '@/assets/images/avrast/dplk/yellow-chat-heart.svg';
import YellowHomeSun from '@/assets/images/avrast/dplk/yellow-dplk-home-sun.svg';
import YellowShield from '@/assets/images/avrast/dplk/yellow-shield.svg';

import BlankImage from '@/assets/images/blank-image.svg';

import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import AboutHeading from '@/components/molecules/specifics/avrast/AboutHeading';
import HelpCard from '@/components/molecules/specifics/avrast/Cards/HelpCard';
import CardProduct from '@/components/molecules/specifics/avrast/Cards/ProductCard';
import CategorySideBySideSixCards from '@/components/molecules/specifics/avrast/CategorySideBySideSixCards';
import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import CustomForm from '@/components/molecules/specifics/avrast/CustomForm/Index';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';

export const generateStaticParams = () => {
  return [{ detail: 'carepack-pro' }];
};

const ProdukSyariahDetail = ({ params }: { params: { detail: string } }) => {
  console.log(params);

  return (
    <div className="flex flex-col">
      <Hero
        title="Klaim dan Layanan"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Produk', href: '/avrast/avrist-dplk' },
          {
            title: 'Klaim dan Layanan',
            href: '/avrast/avrist-dplk/produk/carepack-pro'
          }
        ]}
        bottomImage={HeroDplk3}
      />
      <SimpleContainer>
        <AboutHeading
          categoriesIcon={YellowHomeSun}
          categoriesName="Avrist DPLK"
          categoriesClassname="text-dplk_yellow"
          headingText="Avrist Carepack Pro (Pesangon)"
          subHeadingText="Lorem ipsum dolor sit amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in."
          tags={['Avrist DPLK', 'Premi Tetap', 'Kecelakaan Diri']}
          tagsClassname="bg-gray_bglightgray"
          tagsTextClassname="text-dplk_yellow"
        />
        <div className="flex justify-center w-full">
          <Image src={VideoDplk} alt="video" />
        </div>
        <div>
          <CategorySideBySideSixCards
            leftSide={[
              {
                symbol: YellowShield,
                title: 'Manfaat Produk',
                description:
                  'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
              },
              {
                symbol: YellowChat,
                title: 'Keunggulan Produk',
                description:
                  'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
              },
              {
                symbol: YellowHeart,
                title: 'Periode Perlindungan',
                description:
                  'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
              }
            ]}
            rightSide={[
              {
                title: 'Informasi Penting',
                description: `1. Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo.
                2. Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo.`
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
            leftTitleClassname="text-dplk_yellow"
            rightTitleClassname="text-black"
            customLeftSideClassname="border-b-dplk_yellow"
            customRightSideClassname="border-b-dplk_yellow"
            buttonClassname="border-dplk_yellow text-dplk_yellow"
          />
        </div>
      </SimpleContainer>
      <SimpleContainer bgColor="purple_superlight">
        <CustomForm
          customFormClassname="border-b-dplk_yellow"
          customFormButtonClassname="bg-dplk_yellow text-white"
        />
      </SimpleContainer>
      <SimpleContainer>
        <div className="mx-32px text-center">
          <p className="font-karla font-bold text-[56px]">
            Rekomendasi Produk Lainnya
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          {[...Array(3)].map((_, index) => (
            <CardProduct
              key={index}
              symbol={YellowHomeSun}
              title="Avrist DPLK"
              summary="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti."
              tags={['Avrist DPLK', 'Premi Tetap', 'Premi Berkala']}
              cardClassname="bg-white border-b-dplk_yellow"
              cardTitleClassname="text-dplk_yellow"
              cardTagsClassname="bg-dplk_yellow/[.2] text-dplk_yellow"
              cardButtonClassname="bg-dplk_yellow text-white"
            />
          ))}
        </div>
      </SimpleContainer>
      <RoundedFrameBottom bgColor="bg-white" frameColor="bg-white" />
      <SimpleContainer>
        <HelpCard
          title={
            <p className="text-[56px] text-black">
              <span className="font-bold">Hello,</span> Ada yang bisa{' '}
              <span className="font-bold">Avrista</span> bantu?
            </p>
          }
          cardClassname="bg-dplk_yellow"
          buttonClassname="bg-white border border-white"
          buttonTextClassname="text-dplk_yellow"
          buttonTitle="Tanya Avrista"
          image={BlankImage}
        />
      </SimpleContainer>
      <RoundedFrameTop bgColor="bg-white" frameColor="bg-white" />
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

export default ProdukSyariahDetail;
