'use client';

import Image from 'next/image';
import Link from 'next/link';
import CHEVRON_RIGHT_PURPLE from '@/assets/images/common/chevron-right-purple.svg';

const faqData = [
  {
    title: 'Apa yang dimaksud dengan Asuransi Pribadi atau Asuransi Individu?',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  },
  {
    title:
      'Apa yang saya akan peroleh jika polis saya batalkan di kemudian hari?',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  },
  {
    title: 'Siapa yang dapat ditentukan sebagai Pihak Yang Ditunjuk?',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    href: '/tanya-avrista/asuransi-jiwa-individu/'
  }
];

const FAQList = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h1 className="mt-20 font-karla text-[56px] text-purple_dark font-bold">
        Asuransi Jiwa Individu
      </h1>
      <div className="w-full flex flex-col md:px-52 2xl:px-[345px] mt-8 mb-10 gap-4">
        {faqData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="w-full border border-gray_light rounded-xl px-4 py-6 flex flex-row justify-between items-center"
          >
            <p className="text-xl font-bold">{item.title}</p>
            <Image alt="chevron" src={CHEVRON_RIGHT_PURPLE} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FAQList;
