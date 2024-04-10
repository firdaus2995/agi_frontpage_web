'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Karir from './tabs/karir';
import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import WHATSAPP from '@/assets/images/wa.svg';
import ButtonMenu from '@/components/molecules/specifics/avrast/ButtonMenu';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import { MainContent } from '@/components/molecules/specifics/avrast/HubungiKami';
const CallMe = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get('tab') ?? '';

  const breadcrumbsData = [
    { title: 'Beranda', href: '/' },
    {
      title: params.includes('Karir') ? 'Karir' : 'Hubungi Kami',
      href: params.includes('Karir')
        ? '/hubungi-kami?tab=Karir'
        : '/hubungi-kami'
    }
  ];

  return (
    <div className="flex flex-col">
      <Hero
        title={params.includes('Karir') ? 'Karir' : 'Hubungi Kami'}
        breadcrumbsData={breadcrumbsData}
      />
      <Image src={BLANK_IMAGE} alt="image" className="w-full" />
      <ButtonMenu
        buttonList={['Pengaduan Nasabah', 'Karir']}
        path="/hubungi-kami"
      />
      {params.includes('Karir') ? <Karir /> : <MainContent />}
      {params.includes('Pengaduan Nasabah') ? (
        <FooterInformation
          title={
            <p className="text-[48px]">
              Kami ada untuk membantu Anda.{' '}
              <span className="text-purple_dark font-bold">Hubungi Kami</span>
            </p>
          }
          buttonTitle="0811 1960 1000"
          buttonVariant="secondary"
          image={BLANK_IMAGE}
          buttonImage={WHATSAPP}
          customButtonClass="w-full"
          customButtonTextClass="text-4xl"
          subtitle={
            <p>
              <span className="font-bold">Waktu Operasional:</span> Senin -
              Jumat, 08.00 - 17.00 WIB
            </p>
          }
        />
      ) : (
        <FooterInformation
          title={
            <p className="text-[48px]">
              Ada yang bisa{' '}
              <span className="text-purple_dark font-bold">AvGen</span> bantu
              untuk Anda?
            </p>
          }
          image={BLANK_IMAGE}
          buttonTitle="Tanya AvGen"
        />
      )}

      <FooterCards
        bgColor="bg-purple_superlight"
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

export default CallMe;
