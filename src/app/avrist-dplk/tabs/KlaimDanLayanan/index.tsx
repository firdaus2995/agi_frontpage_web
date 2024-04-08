import React from 'react';

import YellowContact from '@/assets/images/avrast/dplk/yellow-contact.svg';
import YellowForm from '@/assets/images/avrast/dplk/yellow-form.svg';
import YellowHelpDesk from '@/assets/images/avrast/dplk/yellow-head.svg';
import YellowPaper from '@/assets/images/avrast/dplk/yellow-paper.svg';
import YellowRecipt from '@/assets/images/avrast/dplk/yellow-receipt.svg';

import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';

const KlaimDanLayanan = () => {
  return (
    <div>
      <InformationCard
        heading="Cara Kami menangani klaim Anda"
        subHeading="Kami memberikan pelayanan dengan profesionalisme."
        cards={[
          {
            cardIcon: YellowRecipt,
            cardTitle: 'Pengajuan Klaim',
            cardBody:
              'Perkembangan informasi dan keputusan secara jelas, efektif dan transparansi.',
            cardButtonText: 'Panduan Klaim'
          },
          {
            cardIcon: YellowContact,
            cardTitle: 'Pengkinian Data',
            cardBody:
              'Tim kami menganalisa pengajuan dan membayarkan dengan ketentuan polis.',
            cardButtonText: 'Login Employer'
          },
          {
            cardIcon: YellowContact,
            cardTitle: 'Pengkinian Data',
            cardBody:
              'Lorem ipsum dolor sit amet consectetur. Enim tellus dignissim mauris lectus.',
            cardButtonText: 'Login Employee'
          },
          {
            cardIcon: YellowForm,
            cardTitle: 'Formulir dan Buku Panduan',
            cardBody:
              'Kami memberi kelancaran dengan ketentuan polis yang disepakati bersama.',
            cardButtonText: 'Unduh dan Baca'
          },
          {
            cardIcon: YellowPaper,
            cardTitle: 'Penanganan Pengaduan',
            cardBody:
              'Kami menghargai dan mendengarkan saran dan keluhan dari nasabah Kami.',
            cardButtonText: 'Baca Aturan'
          },
          {
            cardIcon: YellowHelpDesk,
            cardTitle: 'Butuh Bantuan',
            cardBody:
              'Melalui jalur komunikasi yang tersedia, Kami selalu siap untuk membantu Anda.',
            cardButtonText: 'Hubungi Kami'
          }
        ]}
        cardClassname="border-b-dplk_yellow"
        cardButtonClassname="bg-dplk_yellow border-dplk_yellow"
        cardButtonTextClassname="text-white"
      />
    </div>
  );
};

export default KlaimDanLayanan;
