import Image from 'next/image';

import GambarProdukSyariah2 from '@/assets/images/avrast/avrist-syariah/about.svg';
import GreenHeartChat from '@/assets/images/avrast/avrist-syariah/green-chat-heart.svg';
import GreenShield from '@/assets/images/avrast/avrist-syariah/green-shield.svg';
import HelpDesk from '@/assets/images/avrast/avrist-syariah/helpdesk.svg';
import GambarProdukSyariah from '@/assets/images/avrast/avrist-syariah/hero-syariah-3.svg';
import GreenGiveHeart from '@/assets/images/avrast/avrist-syariah/klaim-layanan.svg';
import PlaceholderVideo from '@/assets/images/avrast/avrist-syariah/videotron-syariah.svg';
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
  return [{ detail: 'investa-optima-pro' }];
};

const ProdukSyariahDetail = ({ params }: { params: { detail: string } }) => {
  console.log(params);

  return (
    <div className="flex flex-col">
      <Hero
        title="Syariah Investa Optima Pro"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Produk', href: '/avrast/produk/syariah' },
          {
            title: 'Syariah Investa Optima Pro',
            href: '/avrast/avrist-syariah/produk/investa-optima-pro'
          }
        ]}
        bottomImage={GambarProdukSyariah}
      />
      <SimpleContainer>
        <AboutHeading
          categoriesIcon={GambarProdukSyariah2}
          categoriesName="Avrist Syariah"
          categoriesClassname="text-syariah_green"
          headingText="Syariah Investa Optima Pro"
          subHeadingText="Lorem ipsum dolor sit amet consectetur"
          description="PT Avrist Assurance (d/h PT Asuransi AIA Indonesia) memperoleh Izin untuk menjalankan usaha Asuransi berdasarkan Prinsip Syariah (Syariah Unit) pada tanggal 28 September 2005 dari Kementerian Keuangan Republik Indonesia, No. KEP – 326/KM.5/2005"
          tags={['Avrist Syariah', 'Premi Tetap', 'Kecelakaan Diri']}
          tagsClassname="bg-gray_bglightgray"
          tagsTextClassname="text-syariah_green"
        />
        <div className="flex justify-center w-full">
          <Image src={PlaceholderVideo} alt="video" />
        </div>
        <div>
          <CategorySideBySideSixCards
            leftSide={[
              {
                symbol: GreenShield,
                title: 'Manfaat Produk',
                description:
                  'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
              },
              {
                symbol: GreenHeartChat,
                title: 'Keunggulan Produk',
                description:
                  'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in.'
              },
              {
                symbol: GreenGiveHeart,
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
            leftTitleClassname="text-syariah_green"
            rightTitleClassname="text-black"
            customLeftSideClassname="border-b-syariah_green"
            customRightSideClassname="border-b-syariah_green"
            buttonClassname="border-syariah_green text-syariah_green"
          />
        </div>
      </SimpleContainer>
      <SimpleContainer bgColor="purple_superlight">
        <CustomForm
          customFormClassname="border-b-syariah_green"
          customFormButtonClassname="bg-syariah_green_informing text-white"
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
              symbol={GambarProdukSyariah2}
              title="Avrist Syariah"
              summary="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti."
              tags={['Avrist Syariah', 'Premi Tetap', 'Premi Berkala']}
              cardClassname="bg-white border-b-syariah_green"
              cardTitleClassname="text-syariah_green"
              cardTagsClassname="bg-syariah_green/[.2] text-syariah_green_informing"
              cardButtonClassname="bg-syariah_green_informing text-white"
            />
          ))}
        </div>
      </SimpleContainer>
      <RoundedFrameBottom bgColor='bg-white' frameColor="bg-white" />
      <SimpleContainer>
        <HelpCard
          title={
            <p className="text-[56px] text-white">
              <span className="font-bold">Hello,</span> Ada yang bisa{' '}
              <span className="font-bold">Avrista</span> bantu?
            </p>
          }
          cardClassname="bg-syariah_green_informing"
          buttonClassname="bg-white border border-white"
          buttonTextClassname="text-syariah_green_informing"
          buttonTitle="Tanya Avrista"
          image={HelpDesk}
        />
      </SimpleContainer>
      <RoundedFrameTop bgColor='bg-white' frameColor="bg-white" />
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
