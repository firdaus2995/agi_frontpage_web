import React from 'react';

import GreenBinocular from '@/assets/images/avrast/avrist-syariah/green-binocular.svg';
import GreenHead from '@/assets/images/avrast/avrist-syariah/green-head.svg';
import GreenPeople from '@/assets/images/avrast/avrist-syariah/green-people.svg';
import People1 from '@/assets/images/avrast/people-1.svg';
import People2 from '@/assets/images/avrast/people-2.svg';

import AboutHeading from '@/components/molecules/specifics/avrast/AboutHeading';
import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';
import PersonCard from '@/components/molecules/specifics/avrast/Cards/PersonCard';

const ManfaatUtama = () => {
  return (
    <div>
      <AboutHeading
        categoriesName="Sejarah"
        categoriesClassname="text-syariah_green"
        headingText="Lorem Ipsum"
        subHeadingText="Lorem ipsum dolor sit amet consectetur"
        description="PT Avrist Assurance (d/h PT Asuransi AIA Indonesia) memperoleh Izin untuk menjalankan usaha Asuransi berdasarkan Prinsip Syariah (Syariah Unit) pada tanggal 28 September 2005 dari Kementerian Keuangan Republik Indonesia, No. KEP – 326/KM.5/2005"
        tags={['Avrist Syariah', 'Premi Tetap', 'Kecelakaan Diri']}
        tagsClassname="bg-gray_bglightgray"
        tagsTextClassname="text-syariah_green"
        idTags="#TentangAvristSyariah"
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
        idTags="#DewanPengawasSyariah"
      />
      <InformationCard
        heading="Tugas dan Peran"
        subHeading="DPS PT Avrist Assurance sebagai berikut:"
        cards={[
          {
            cardIcon: GreenBinocular,
            cardBody:
              '<strong>Mengawasi,</strong> memberi nasihat dan saran kepada Direksi agar kegiatan Perusahaan sesuai dengan prinsip Syariah.'
          },
          {
            cardIcon: GreenHead,
            cardBody:
              'Berupaya menjaga keseimbangan kepentingan semua pihak, khususnya <strong>kepentingan Nasabah.</strong>'
          },
          {
            cardIcon: GreenPeople,
            cardBody:
              'Menyelenggarakan <strong>rapat DPS</strong> secara berkala paling sedikit enam kali dalam satu tahun.'
          }
        ]}
        cardClassname="border-b-syariah_green"
      />
      <div className="flex mx-[-32px] mb-[-50px] sm:mx-[-136px] sm:mb-[-72px] px-[32px] sm:px-[136px] bg-gray_bglightgray">
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
          idTags="#ManfaatUtama"
        />
      </div>
    </div>
  );
};

export default ManfaatUtama;
