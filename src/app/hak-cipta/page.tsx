'use client';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { MainContent } from '@/components/molecules/specifics/agi/KebijakanCookies';

const HakCipta = () => {
  return (
    <div className="flex flex-col bg-white">
      <Hero
        title={'Hak Cipta & Merk Dagang'}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: 'Hak Cipta & Merk Dagang',
            href: '#'
          }
        ]}
      />
      <MainContent />
      <FooterInformation
        title={
          <div
            className={`lg:w-1/2 xs:w-full p-5 flex h-full flex-col lg:items-start xs:items-center justify-center gap-10`}
          >
            <p className="lg:text-4xl xs:text-2xl lg:text-left xs:text-center">
              <span className="font-bold text-purple_dark">Komitmen</span> Kami,
              proses klaim yang{' '}
              <span className="font-bold text-purple_dark">efisien</span> dan{' '}
              <span className="font-bold text-purple_dark">solusi</span>
            </p>
          </div>
        }
        buttonTitle="Panduan Klaim"
        href={'/pusat-informasi/pusat-informasi?tab=Klaim'}
        image={''}
      />
      <div className="w-full h-full lg:bg-cta4_bg">
        <FooterCards
          cards={[
            {
              title: 'Kelola Polis',
              icon: '',
              subtitle: 'Pengkinian Data',
              href: '#'
            },
            {
              title: 'Rumah Sakit Rekanan',
              icon: '',
              subtitle: '',
              href: '#'
            },
            {
              title: 'Tanya Avrista',
              icon: '',
              subtitle: 'Lebih Lanjut',
              href: '#'
            },
            {
              title: 'Prosedur Pengaduan',
              icon: '',
              subtitle: 'PLihat Prosedur',
              href: '#'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default HakCipta;
