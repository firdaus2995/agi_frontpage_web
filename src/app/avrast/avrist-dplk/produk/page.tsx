import HeroDplk2 from '@/assets/images/avrast/dplk/hero-dplk-2.svg';
import YellowHome from '@/assets/images/avrast/dplk/yellow-dplk-home-sun.svg';
import BlankImage from '@/assets/images/blank-image.svg';

import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import Icon from '@/components/atoms/Icon';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import HelpCard from '@/components/molecules/specifics/avrast/Cards/HelpCard';
import CardProduct from '@/components/molecules/specifics/avrast/Cards/ProductCard';
import CategoryPills from '@/components/molecules/specifics/avrast/CategoryPills';
import CategoryPillsBox from '@/components/molecules/specifics/avrast/CategoryPillsBox';
import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import SearchBar from '@/components/molecules/specifics/avrast/SearchBar';

const ProdukDplk = () => {
  return (
    <div>
      <Hero
        title="Produk DPLK"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Avrist DPLK', href: '/avrast/avrist-dplk' },
          { title: 'Produk DPLK', href: '/avrast/avrist-dplk/produk' }
        ]}
        bottomImage={HeroDplk2}
      />
      <SimpleContainer>
        <CategoryPills
          buttonTitle={[
            'Tentang Avrist DPLK',
            'Dewan Pengawas DPLK',
            'Manfaat Utama',
            'Produk',
            'Klaim & Layanan'
          ]}
          selectedCategory="Produk"
          buttonActiveClassname="bg-dplk_yellow border-dplk_yellow"
          buttonInactiveClassname="bg-transparent border-dplk_yellow"
          buttonActiveTextClassname="text-white"
          buttonInactiveTextClassname="text-black"
        />
        <div className="flex">
          <div className="w-1/2">
            <CategoryPillsBox
              buttonTitle={['Layanan Employer', 'Layanan Employee']}
              buttonClassname="accent-dplk_yellow border-dplk_yellow"
              buttonTextClassname="text-black"
            />
          </div>
          <div className="w-1/2">
            <SearchBar
              placeholder="Cari Produk"
              searchButtonTitle="Cari"
              searchButtonClassname="bg-dplk_yellow text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          {[...Array(6)].map((_, index) => (
            <CardProduct
              key={index}
              symbol={YellowHome}
              title="Avrist DPLK"
              summary="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti."
              tags={['Avrist Syariah', 'Premi Tetap', 'Premi Berkala']}
              cardClassname="bg-white border-b-dplk_yellow"
              cardTitleClassname="text-dplk_yellow"
              cardTagsClassname="bg-dplk_yellow/[.2] text-dplk_yellow"
              cardButtonClassname="bg-dplk_yellow text-white"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <div>
            <p className="text-[20px]">
              Menampilkan{' '}
              <span className="font-bold text-dplk_yellow">1-9</span> dari{' '}
              <span className="font-bold">20</span> hasil
            </p>
          </div>
          <div className="flex flex-row gap-[8px] items-center">
            <p className="text-[20px] text-dplk_yellow font-bold">1</p>
            <p className="text-[20px]">2</p>
            <p className="text-[20px]">3</p>
            <p className="text-[20px]">4</p>
            <Icon name="chevronRight" color="dplk_yellow" />
          </div>
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

export default ProdukDplk;
