import FooterCards from '../FooterCards';
import love from '@/assets/images/common/heart-check.svg';
import home from '@/assets/images/common/home-add.svg';
import hospital from '@/assets/images/common/hospital.svg';
import homeYellow from '@/assets/images/common/person-home-yellow.svg';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';

const cards = [
  {
    icon: love,
    title: 'Asuransi Individu',
    subtitle: 'Lihat Produk',
    href: '/produk/individu?tab=Asuransi+Jiwa'
  },
  {
    icon: home,
    title: 'Asuransi Korporasi',
    subtitle: 'Lihat Produk',
    href: '/produk/korporasi'
  },
  {
    icon: homeYellow,
    title: 'AVRIST DPLK',
    subtitle: 'Lihat Produk',
    href: '/avrist-dplk?tab=Produk',
    textColor: 'text-dplk_yellow'
  },
  {
    icon: hospital,
    title: 'Rumah Sakit',
    subtitle: 'Rekanan',
    href: '/klaim-layanan/layanan?tab=Rumah+Sakit+Rekanan'
  }
];

export const InformationProductFooter = () => {
  return (
    <div className="flex flex-col self-stretch items-center justify-center py-24 gap-16 bg-purple_superlight relative">
      <RoundedFrameTop />
      <div className="w-full h-full">
        <FooterCards cards={cards} />
      </div>
    </div>
  );
};
