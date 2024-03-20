import GreenBinocular from '@/assets/images/avrast/avrist-syariah/green-binocular.svg';
import GreenHead from '@/assets/images/avrast/avrist-syariah/green-head.svg';
import GreenPeople from '@/assets/images/avrast/avrist-syariah/green-people.svg';
import HelpDesk from '@/assets/images/avrast/avrist-syariah/helpdesk.svg';
import HeroSyariah1 from '@/assets/images/avrast/avrist-syariah/hero-syariah-1.svg';
import People1 from '@/assets/images/avrast/people-1.svg';
import People2 from '@/assets/images/avrast/people-2.svg';
import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import AboutHeading from '@/components/molecules/specifics/avrast/AboutHeading';
import HelpCard from '@/components/molecules/specifics/avrast/Cards/HelpCard';
import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';
import PersonCard from '@/components/molecules/specifics/avrast/Cards/PersonCard';
import CategoryPills from '@/components/molecules/specifics/avrast/CategoryPills';
import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';

const AvristSyariah = () => {
  return (
    <div>
      <Hero
        title="Avrist Syariah"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Avrist Syariah', href: '/avrast/avrist-syariah' }
        ]}
        bottomImage={HeroSyariah1}
      />
      <SimpleContainer>
        <CategoryPills
          buttonTitle={[
            'Tentang Avrist Syariah',
            'Dewan Pengawas Syariah',
            'Manfaat Utama',
            'Produk',
            'Klaim & Layanan'
          ]}
          selectedCategory="Tentang Avrist Syariah"
          buttonActiveClassname="bg-syariah_green border-syariah_green"
          buttonInactiveClassname="bg-transparent border-syariah_green"
          buttonActiveTextClassname="text-white"
          buttonInactiveTextClassname="text-syariah_green"
        />
        <AboutHeading
          categoriesName="Sejarah"
          categoriesClassname="text-syariah_green"
          headingText="Lorem Ipsum"
          subHeadingText="Lorem ipsum dolor sit amet consectetur"
          description="PT Avrist Assurance (d/h PT Asuransi AIA Indonesia) memperoleh Izin untuk menjalankan usaha Asuransi berdasarkan Prinsip Syariah (Syariah Unit) pada tanggal 28 September 2005 dari Kementerian Keuangan Republik Indonesia, No. KEP – 326/KM.5/2005"
          tags={['Avrist Syariah', 'Premi Tetap', 'Kecelakaan Diri']}
          tagsClassname="bg-gray_bglightgray"
          tagsTextClassname="text-syariah_green"
        />
        <PersonCard
          heading="Dewan Pengawas Syariah"
          cards={[
            {
              name: 'Lorem Ipsum',
              role: 'Lorem Ipsum',
              image: People1
            },
            {
              name: 'Lorem Ipsum',
              role: 'Lorem Ipsum',
              image: People2
            }
          ]}
          roleClassname="text-syariah_green"
        />
        <InformationCard
          heading="Tugas dan Peran"
          subHeading="DPS PT Avrist Assurance sebagai berikut:"
          cards={[
            {
              cardIcon: GreenBinocular,
              cardBody:
                'Mengawasi, memberi nasihat dan saran kepada Direksi agar kegiatan Perusahaan sesuai dengan prinsip Syariah.'
            },
            {
              cardIcon: GreenHead,
              cardBody:
                'Berupaya menjaga keseimbangan kepentingan semua pihak, khususnya kepentingan Nasabah.'
            },
            {
              cardIcon: GreenPeople,
              cardBody:
                'Menyelenggarakan rapat DPS secara berkala paling sedikit enam kali dalam satu tahun.'
            }
          ]}
          cardClassname="border-b-syariah_green"
        />
      </SimpleContainer>
      <div className="flex bg-gray_bglightgray">
        <InformationCard
          heading="Mengapa Avrist Syariah?"
          cards={[
            {
              cardIcon: GreenBinocular,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: GreenHead,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: GreenPeople,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: GreenBinocular,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: GreenHead,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: GreenPeople,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            }
          ]}
          cardClassname="border-b-syariah_green"
        />
      </div>
      <RoundedFrameBottom bgColor='bg-white' frameColor="bg-gray_bglightgray" />
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

export default AvristSyariah;
