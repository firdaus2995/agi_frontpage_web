import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon2 from '@/assets/images/avrast/about/menagemen.svg';
import Icon3 from '@/assets/images/avrast/about/penghargaan.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon1 from '@/assets/images/common/office.svg';
import Phone from '@/assets/images/common/phone.svg';
import SampleVideo from '@/assets/images/common/sample-video.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import PurposeCard from '@/components/molecules/specifics/avrast/Cards/PurposeCard';
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';

const purposeData = [
  {
    title: 'We do what’s best for Avrist Life Insurance',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Tentang Avrist',
    icon: Icon1
  },
  {
    title: 'We treat people with respect',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Manajemen',
    icon: Icon2
  },
  {
    title: 'We aim high, responsibly',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Penghargaan',
    icon: Icon3
  }
];

const Karir = () => {
  const [category, setCategory] = useState('Karyawan');
  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col items-center justify-center py-2 text-center">
          <h2 className="text-[56px] font-bold mb-6 text-purple_dark">
            Berkembang bersama Avrast Assurance
          </h2>
          <h2 className="text-[36px] mb-6">
            Kami memberi kesempatan yang tak terbatas untuk berkembang.
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <Image src={SampleVideo} alt="video" />
        </div>
        <div className="w-full p-20 bg-purple_superlight flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-[56px] text-center font-semibold text-purple_dark">
              Why Should You
            </h2>
            <h2 className="text-[56px] text-center font-semibold text-purple_dark">
              #FindYourPurpose with Us?
            </h2>
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
        </div>
        <h2 className="text-[56px] text-center font-semibold mb-6 text-purple_dark mt-20">
          Lihat Lowongan di Avrist Life Insurance
        </h2>
        <CategoryWithThreeCards
          hideSearchBar
          defaultSelectedCategory={category}
          onCategoryChange={(tab) => setCategory(tab)}
          filterRowLayout={true}
          categories={['Karyawan', 'Tenaga Pemasar']}
          tabs={[
            {
              type: 'dropdown',
              label: 'tahun',
              options: [
                { label: 'Pilih Tahun', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
              ]
            }
          ]}
          customContent={
            <div className="grid grid-cols-3 gap-[24px]">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col gap-2 items-center p-4 border rounded-xl"
                >
                  <p className="font-bold text-[24px]">
                    Cross Channel Customer Care
                  </p>
                  <div className="flex w-full flex-row items-center gap-2">
                    <Icon
                      name="mapsPin"
                      color="purple_verylight"
                      width={24}
                      isSquare
                    />
                    <p>Jakarta, Indonesia</p>
                  </div>
                  <div className="flex w-full flex-row items-center gap-2">
                    <Icon
                      name="briefcase"
                      color="purple_verylight"
                      width={24}
                      isSquare
                    />
                    <p>Full time</p>
                  </div>
                  <div className="flex w-full flex-row items-center gap-2">
                    <Icon
                      name="clock"
                      color="purple_verylight"
                      width={24}
                      isSquare
                    />
                    <p>6 hari lalu</p>
                  </div>
                  <Link
                    key={index}
                    href={
                      'http://localhost:3000/avrast/tentang-avrist-life/tentang-avrist-life/tabs/karir/detail'
                    }
                  >
                    <Button
                      title="Lihat Detail"
                      customButtonClass="rounded-xl bg-purple_dark w-full mt-5"
                      customTextClass="text-white"
                    />
                  </Link>
                </div>
              ))}
            </div>
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <RoundedFrameBottom />
        <FooterInformation
          bgColor="bg-gray_bglightgray"
          title={
            <div className="flex flex-col items-center justify-center gap-4 bg-gray_bglightgray">
              <p className="text-[56px] font-bold">Hubungi Kami</p>
              <div
                role="button"
                className="p-4 border border-purple_dark rounded-xl w-full flex flex-row items-center justify-center gap-2 text-purple_dark text-2xl font-bold bg-white"
              >
                <Image src={Phone} alt="phone" className="w-10" />
                <p>021 5789 8188</p>
              </div>
              <p>
                <span className="font-bold">Waktu Operasional:</span> Senin -
                Jumat, 08.00 - 17.00 WIB
              </p>
            </div>
          }
          image={BlankImage}
        />
        <RoundedFrameTop />
      </div>
    </div>
  );
};

export default Karir;
