'use client';
import HeroDplk1 from '@/assets/images/avrast/dplk/hero-dplk-1.svg';
import YellowBinocular from '@/assets/images/avrast/dplk/yellow-binocular.svg';
import YellowHead from '@/assets/images/avrast/dplk/yellow-head.svg';
import YellowPeople from '@/assets/images/avrast/dplk/yellow-people.svg';
import People1 from '@/assets/images/avrast/people-1.svg';
import People2 from '@/assets/images/avrast/people-2.svg';
import BlankImage from '@/assets/images/blank-image.svg';
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

const AvristDplk = () => {
  return (
    <div>
      <Hero
        title="Avrist DPLK"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Avrist DPLK', href: '/avrast/avrist-dplk' }
        ]}
        bottomImage={HeroDplk1}
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
          selectedCategory="Tentang Avrist DPLK"
          buttonActiveClassname="bg-dplk_yellow border-dplk_yellow"
          buttonInactiveClassname="bg-transparent border-dplk_yellow"
          buttonActiveTextClassname="text-white"
          buttonInactiveTextClassname="text-black"
        />
        <AboutHeading
          categoriesName="Sejarah"
          categoriesClassname="text-dplk_yellow"
          headingText="Lorem Ipsum"
          subHeadingText="Lorem ipsum dolor sit amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in."
          tags={['Avrist Syariah', 'Premi Tetap', 'Kecelakaan Diri']}
          tagsClassname="bg-gray_bglightgray"
          tagsTextClassname="text-dplk_yellow"
        />
        <PersonCard
          heading="Dewan Pengawas DPLK"
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
          roleClassname="text-dplk_yellow"
        />
        <PersonCard
          heading="Dewan Pengurus DPLK"
          cards={[
            {
              name: 'Lorem Ipsum',
              role: 'Lorem Ipsum',
              image: People1
            }
          ]}
          roleClassname="text-dplk_yellow"
        />
        <InformationCard
          heading="Tugas dan Peran"
          subHeading="DPS PT Avrist Assurance sebagai berikut:"
          cards={[
            {
              cardIcon: YellowBinocular,
              cardBody:
                'Mengawasi, memberi nasihat dan saran kepada Direksi agar kegiatan Perusahaan sesuai dengan prinsip Syariah.'
            },
            {
              cardIcon: YellowHead,
              cardBody:
                'Berupaya menjaga keseimbangan kepentingan semua pihak, khususnya kepentingan Nasabah.'
            },
            {
              cardIcon: YellowPeople,
              cardBody:
                'Menyelenggarakan rapat DPS secara berkala paling sedikit enam kali dalam satu tahun.'
            }
          ]}
          cardClassname="border-b-dplk_yellow"
        />
      </SimpleContainer>
      <div className="flex bg-gray_bglightgray">
        <InformationCard
          heading="Mengapa Avrist Syariah?"
          cards={[
            {
              cardIcon: YellowBinocular,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: YellowHead,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: YellowPeople,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: YellowBinocular,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: YellowHead,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            },
            {
              cardIcon: YellowPeople,
              cardTitle: 'Lorem Ipsum',
              cardBody:
                'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.'
            }
          ]}
          cardClassname="border-b-dplk_yellow"
        />
      </div>
      <RoundedFrameBottom bgColor="bg-white" frameColor="bg-gray_bglightgray" />
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

export default AvristDplk;
