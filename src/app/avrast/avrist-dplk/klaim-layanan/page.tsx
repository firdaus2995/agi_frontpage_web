import ProdukEmail from '@/assets/images/avrast/component/proses-klaim/step-4-icon-1.svg';
import ProdukNasabah from '@/assets/images/avrast/component/proses-klaim/step-4-icon-3.svg';
import ProdukTanya from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';

import HeroDplk4 from '@/assets/images/avrast/dplk/hero-dplk-4.svg';
import YellowContact from '@/assets/images/avrast/dplk/yellow-contact.svg';
import YellowForm from '@/assets/images/avrast/dplk/yellow-form.svg';
import YellowHelpDesk from '@/assets/images/avrast/dplk/yellow-head.svg';
import YellowPaper from '@/assets/images/avrast/dplk/yellow-paper.svg';
import YellowRecipt from '@/assets/images/avrast/dplk/yellow-receipt.svg';
import BlankImage from '@/assets/images/blank-image.svg';

import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import HelpCard from '@/components/molecules/specifics/avrast/Cards/HelpCard';
import InformationCard from '@/components/molecules/specifics/avrast/Cards/InformationCard';
import CategoryPills from '@/components/molecules/specifics/avrast/CategoryPills';
import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';

const KlaimLayanan = () => {
  return (
    <div>
      <Hero
        title="Klaim dan Layanan"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Avrist DPLK', href: '/avrast/avrist-dplk/' },
          {
            title: 'Klaim & Layanan',
            href: '/avrast/avrist-dplk/klaim-layanan'
          }
        ]}
        bottomImage={HeroDplk4}
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
          selectedCategory="Klaim & Layanan"
          buttonActiveClassname="bg-dplk_yellow border-dplk_yellow"
          buttonInactiveClassname="bg-transparent border-dplk_yellow"
          buttonActiveTextClassname="text-white"
          buttonInactiveTextClassname="text-black"
        />

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
      </SimpleContainer>
      <RoundedFrameBottom bgColor="bg-white" frameColor="bg-white" />
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
            title: 'Layanan Nasabah',
            icon: ProdukNasabah,
            subtitle: '021 5789 8188'
          },
          {
            title: 'Tanya Avrista',
            icon: ProdukTanya,
            subtitle: 'Lebih Lanjut'
          },
          {
            title: 'Tanya Lewat Email',
            icon: ProdukEmail,
            subtitle: 'Kirim Email'
          },
          {
            title: 'Prosedur Pengaduan',
            icon: ProdukTestimoni,
            subtitle: 'Lihat Prosedur'
          }
        ]}
      />
    </div>
  );
};

export default KlaimLayanan;
