import React from 'react';

import GreenContact from '@/assets/images/avrast/avrist-syariah/green-contact.svg';
import GreenForm from '@/assets/images/avrast/avrist-syariah/green-form.svg';
import GreenHelpDesk from '@/assets/images/avrast/avrist-syariah/green-helpdesk.svg';
import GreenHospital from '@/assets/images/avrast/avrist-syariah/green-hospital.svg';
import GreenPaper from '@/assets/images/avrast/avrist-syariah/green-paper.svg';
import GreenReceipt from '@/assets/images/avrast/avrist-syariah/green-receipt.svg';

import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';

const KlaimDanLayanan = () => {
  return (
    <div>
      <InformationCard
        heading="Cara Kami menangani klaim Anda"
        subHeading="Kami memberikan pelayanan dengan profesionalisme."
        cards={[
          {
            cardIcon: GreenReceipt,
            cardTitle: 'Pengajuan Klaim',
            cardBody:
              'Perkembangan informasi dan keputusan secara jelas, efektif dan transparansi.',
            cardButtonText: 'Panduan Klaim'
          },
          {
            cardIcon: GreenContact,
            cardTitle: 'Kelola Polis',
            cardBody:
              'Tim kami menganalisa pengajuan dan membayarkan dengan ketentuan polis.',
            cardButtonText: 'Informasi Nasabah'
          },
          {
            cardIcon: GreenHospital,
            cardTitle: 'Rumah Sakit Rekanan',
            cardBody:
              'Kami menjamin kelancaran proses klaim dengan ketentuan polis yang ada.',
            cardButtonText: 'Cari Lokasi'
          },
          {
            cardIcon: GreenForm,
            cardTitle: 'Formulir dan Buku Panduan',
            cardBody:
              'Kami memberi kelancaran dengan ketentuan polis yang disepakati bersama.',
            cardButtonText: 'Unduh dan Baca'
          },
          {
            cardIcon: GreenPaper,
            cardTitle: 'Penanganan Pengaduan',
            cardBody:
              'Kami menghargai dan mendengarkan saran dan keluhan dari nasabah Kami.',
            cardButtonText: 'Baca Aturan'
          },
          {
            cardIcon: GreenHelpDesk,
            cardTitle: 'Butuh Bantuan',
            cardBody:
              'Melalui jalur komunikasi yang tersedia, Kami selalu siap untuk membantu Anda.',
            cardButtonText: 'Hubungi Kami'
          }
        ]}
        cardClassname="border-b-syariah_green"
        cardButtonClassname="bg-syariah_green border-syariah_green"
        cardButtonTextClassname="text-white"
      />
    </div>
  );
};

export default KlaimDanLayanan;
