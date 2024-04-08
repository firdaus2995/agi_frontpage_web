import Image from 'next/image';
import Icon1 from '@/assets/images/common/heart-check.svg';
import Icon2 from '@/assets/images/common/home-add.svg';
import MisiIcon from '@/assets/images/common/misi.svg';
import Icon6 from '@/assets/images/common/money-hand.svg';
import Icon5 from '@/assets/images/common/money-leaf.svg';
import SampleVideo from '@/assets/images/common/sample-video.svg';
import Icon3 from '@/assets/images/common/store.svg';
import VisiIcon from '@/assets/images/common/visi.svg';
import Icon4 from '@/assets/images/common/wallet.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import PurposeCard from '@/components/molecules/specifics/avrast/Cards/PurposeCard';
import Timeline from '@/components/molecules/specifics/avrast/TimeLine';
import VisiMisi from '@/components/molecules/specifics/avrast/VisiMisi';

// button variants: primary, secondary

const data = {
  title: 'History',
  data: [
    {
      year: '2019',
      title: 'Lorem ipsum dolor sit amet consectetur 1',
      desc: 'Lorem ipsum dolor sit amet consectetur. Et non nulla elit eget. Integer non a varius viverra. Amet proin libero augue amet nunc et. Ultrices habitasse diam quam consequat commodo. Amet tempor nam cras id egestas pulvinar egestas egestas vitae. Etiam tincidunt sit amet ultricies pharetra ultrices nisl nec tincidunt.'
    },
    {
      year: '2020',
      title: 'Lorem ipsum dolor sit amet consectetur 2',
      desc: 'Lorem ipsum dolor sit amet consectetur. Et non nulla elit eget. Integer non a varius viverra. Amet proin libero augue amet nunc et. Ultrices habitasse diam quam consequat commodo. Amet tempor nam cras id egestas pulvinar egestas egestas vitae. Etiam tincidunt sit amet ultricies pharetra ultrices nisl nec tincidunt.'
    },
    {
      year: '2021',
      title: 'Lorem ipsum dolor sit amet consectetur 3',
      desc: 'Lorem ipsum dolor sit amet consectetur. Et non nulla elit eget. Integer non a varius viverra. Amet proin libero augue amet nunc et. Ultrices habitasse diam quam consequat commodo. Amet tempor nam cras id egestas pulvinar egestas egestas vitae. Etiam tincidunt sit amet ultricies pharetra ultrices nisl nec tincidunt.'
    },
    {
      year: '2022',
      title: 'Lorem ipsum dolor sit amet consectetur 4',
      desc: 'Lorem ipsum dolor sit amet consectetur. Et non nulla elit eget. Integer non a varius viverra. Amet proin libero augue amet nunc et. Ultrices habitasse diam quam consequat commodo. Amet tempor nam cras id egestas pulvinar egestas egestas vitae. Etiam tincidunt sit amet ultricies pharetra ultrices nisl nec tincidunt.'
    },
    {
      year: '2023',
      title: 'Lorem ipsum dolor sit amet consectetur 5',
      desc: 'Lorem ipsum dolor sit amet consectetur. Et non nulla elit eget. Integer non a varius viverra. Amet proin libero augue amet nunc et. Ultrices habitasse diam quam consequat commodo. Amet tempor nam cras id egestas pulvinar egestas egestas vitae. Etiam tincidunt sit amet ultricies pharetra ultrices nisl nec tincidunt.'
    }
  ]
};

const visiMisi = [
  {
    title: 'Visi',
    icon: VisiIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.'
  },
  {
    title: 'Misi',
    icon: MisiIcon,
    desc: [
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.',
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti. Tincidunt nibh ac purus viverra urna bibendum fusce nec.'
    ]
  }
];

const purposeData = [
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon1
  },
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon2
  },
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon3
  },
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon4
  },
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon5
  },
  {
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Pelajari Lebih Lanjut',
    icon: Icon6
  }
];

const SekilasPerusahaan = () => {
  return (
    <div className="w-full flex flex-col bg-white justify-center">
      <div className="flex flex-col gap-4 px-[32px] py-[50px] sm:px-[136px] sm:py-[72px]">
        <p className="text-[48px]">
          Avrist Life Insurance bergerak dibidang asuransi selama{' '}
          <span className="font-bold text-purple_dark">
            lebih dari 40 tahun.
          </span>
        </p>
        <p>
          Avrist Life Insurance merupakan perusahaan keuangan yang bergerak di
          bidang pengelolaan investasi di pasar modal. Avram memiliki izin
          sebagai perusahaan Pengelola Aset berdasarkan KEP-07/BL/MI/2012 oleh
          BAPEPAM-LK pada tahun 2012 & Izin Penasihat Investasi oleh OJK pada
          tahun 2017.
        </p>
        <div className="flex justify-center w-full">
          <Image src={SampleVideo} alt="video" />
        </div>
        <p>
          Saat ini Avrist Life Insurance memiliki dana kelolaan lebih dari 3,9
          triliun per Desember 2022 dan terus berkembang hingga saat ini. Avrist
          Life Insurance berusaha memenuhi kebutuhan investasi yang dibutuhkan
          masyarakat Indonesia, baik institusi maupun individu dengan
          menyediakan berbagai produk unggulan Reksa Dana seperti Reksa Dana
          Konvesnsional, Reksa Dana Syariah, maupun Reksa Dana Terproteksi.
        </p>
        <div className="mt-20">
          <Timeline data={data.data} title={data.title} />
        </div>
        <VisiMisi data={visiMisi} />
      </div>

      <div className="flex flex-col gap-4 items-center justify-center bg-purple_superlight w-full p-20">
        <div className="flex justify-center items-center p-10">
          <p className="text-[56px] font-bold text-purple_dark">
            Mengapa Avrist Life Insurance?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {purposeData.map((val, idx) => (
            <PurposeCard
              key={idx}
              title={val.title}
              desc={val.desc}
              link={val.link}
              icon={val.icon}
            />
          ))}
        </div>
        <div className="flex w-full flex-col p-5 gap-4 bg-white border rounded-xl mt-10">
          <p className="text-[36px] font-bold text-purple_dark">
            Izin usaha Avrist dari OJK
          </p>
          <p className="text-[20px]">
            PT Avrist Assurance nomor: KEP-037/KM.11/1986 tertanggal 10 Maret
            1986.
          </p>
        </div>
      </div>
      <RoundedFrameBottom frameColor="bg-purple_superlight" />
    </div>
  );
};

export default SekilasPerusahaan;
