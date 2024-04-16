import React from 'react';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import GROUP_PHOTO from '@/assets/images/group-photo.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import SearchForm from '@/components/molecules/specifics/agi/Pencarian/SearchForm';

const breadcrumbsData = [
  { title: 'Beranda', href: '/' },
  { title: 'Pencarian', href: '/pencarian' }
];

const Pencarian = () => {
  return (
    <div className="flex flex-col">
      <Hero title="Pencarian" breadcrumbsData={breadcrumbsData} />
      <SearchForm />
      <RoundedFrameBottom frameColor="bg-white" />
      <FooterInformation
        title={
          <p className="text-[48px]">
            Ada yang bisa <span className="text-purple_dark font-bold">AvGen</span> bantu untuk Anda?
          </p>
        }
        buttonTitle="Tanya AvGen"
        image={GROUP_PHOTO}
      />
      <RoundedFrameTop />
      <FooterCards
        cards={[
          {
            title: 'Layanan Nasabah',
            subtitle: '021 5789 8188',
            icon: CUSTOMER_SERVICE
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            icon: MESSAGE
          },
          {
            title: 'Tanya Lewat Email',
            subtitle: 'Kirim Email',
            icon: EMAIL
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </div>
  );
};

export default Pencarian;
