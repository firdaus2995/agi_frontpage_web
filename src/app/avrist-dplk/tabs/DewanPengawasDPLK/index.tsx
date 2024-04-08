import React from 'react';

import YellowBinocular from '@/assets/images/avrast/dplk/yellow-binocular.svg';
import YellowHead from '@/assets/images/avrast/dplk/yellow-head.svg';
import YellowPeople from '@/assets/images/avrast/dplk/yellow-people.svg';
import People1 from '@/assets/images/avrast/people-1.svg';
import People2 from '@/assets/images/avrast/people-2.svg';

import AboutHeading from '@/components/molecules/specifics/avrast/AboutHeading';
import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';
import PersonCard from '@/components/molecules/specifics/avrast/Cards/PersonCard';

const DewanPengawasDPLK = () => {
  return (
    <div>
      <AboutHeading
        categoriesName="Sejarah"
        categoriesClassname="text-dplk_yellow"
        headingText="Lorem Ipsum"
        subHeadingText="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus hendrerit nisi pulvinar. Ut adipiscing dolor ac mattis. Sit dignissim quam eros non maecenas porta justo. Quis metus et tristique at odio in."
        tags={['Avrist DPLK', 'Premi Tetap', 'Kecelakaan Diri']}
        tagsClassname="bg-gray_bglightgray"
        tagsTextClassname="text-dplk_yellow"
        idTags="#TentangAvristDPLK"
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
        idTags="#DewanPengawasDPLK"
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
              'Mengawasi, memberi nasihat dan saran kepada Direksi agar kegiatan Perusahaan sesuai dengan prinsip DPLK.'
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
      <div className="flex mx-[-32px] mb-[-50px] sm:mx-[-136px] sm:mb-[-72px] px-[32px] sm:px-[136px] bg-gray_bglightgray">
        <InformationCard
          heading="Mengapa Avrist DPLK ?"
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
          idTags="#ManfaatUtama"
        />
      </div>
    </div>
  );
};

export default DewanPengawasDPLK;
