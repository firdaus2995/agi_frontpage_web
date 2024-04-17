import { useState } from 'react';
import Link from 'next/link';
import CERTIFICATE from '@/assets/images/common/certificate-gray.svg';
import OFFICE from '@/assets/images/common/office-gray.svg';
import WORKER from '@/assets/images/common/worker-gray.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import PurposeCard from '@/components/molecules/specifics/agi/Cards/PurposeCard';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';

const purposeData = [
  {
    title: 'We do what’s best for Avrist Life Insurance',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Tentang Avrist',
    icon: OFFICE
  },
  {
    title: 'We treat people with respect',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Manajemen',
    icon: WORKER
  },
  {
    title: 'We aim high, responsibly',
    desc: 'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti tincidunt nibh ac purus.',
    link: 'Penghargaan',
    icon: CERTIFICATE
  }
];

const Karir = () => {
  const [category, setCategory] = useState('Karyawan');
  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col items-center justify-center py-2 text-center">
          <p className="font-karla font-bold text-[56px] text-center text-purple_dark flex flex-col mt-3">
            Berkembang bersama Avrist General Insurance
            <span className="text-[36px] text-black font-normal">
              Kami memberi kesempatan yang tak terbatas untuk berkembang.
            </span>
          </p>
        </div>
        <div className="mx-[32px] md:mx-[136px] my-10 flex flex-col gap-10 items-center justify-center">
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
        <div className="bg-purple_superlight">
          <h2 className="text-[56px] text-center font-semibold mb-6 mt-20">
            Lihat Lowongan di{' '}
            <span className="text-purple_dark">Avrist General Insurance</span>
          </h2>
          <CategoryWithThreeCards
            hideSearchBar
            defaultSelectedCategory={category}
            onCategoryChange={(tab) => setCategory(tab)}
            filterRowLayout={true}
            hiddenCategory
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
                    className="w-full flex flex-col gap-2 items-start p-4 border rounded-xl bg-white"
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
                      className="w-full"
                      href={'/hubungi-kami/tabs/karir/detail'}
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
      </div>
    </div>
  );
};

export default Karir;
