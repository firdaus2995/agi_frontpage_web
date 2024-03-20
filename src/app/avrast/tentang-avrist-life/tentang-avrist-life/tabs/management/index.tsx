'use client';
import { useState } from 'react';
import Image from 'next/image';
import People1 from '@/assets/images/avrast/management-1.svg';
import People2 from '@/assets/images/avrast/management-2.svg';
import People3 from '@/assets/images/avrast/management-3.svg';
import People4 from '@/assets/images/avrast/management-4.svg';
import People5 from '@/assets/images/avrast/management-5.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Button from '@/components/atoms/Button/Button';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import PersonCard from '@/components/molecules/specifics/avrast/Cards/PersonCard';

const Manajemen = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({
    image: BlankImage,
    name: '',
    role: '',
    desc: <p></p>
  });

  const handleCardClick = (cardData: {
    image: string;
    name: string;
    role: string;
  }) => {
    setShowDetail(true);
    const data = {
      image: cardData.image,
      name: cardData.name,
      role: cardData.role,
      desc: (
        <div className="flex flex-col gap-7">
          <p>
            Memperoleh gelar Sarjana Ekonomi dari Universitas Indonesia, Saat
            ini ia menjabat sebagai Direktur Utama di PT Avrist Life Insurance.
            Cholis memiliki pengalaman lebih dari 20 tahun di Lembaga Jasa
            Keuangan Indonesia. Sebelum bergabung dengan PT Avrist Life
            Insurance, Cholis Baidowi menjabat sebagai Chief Investment Officer
            di PT RHB Asset Management. Cholis juga pernah berkerja di PT
            Syailendra Capital sebagai Direktur/Chief Investment Officer,
            bekerja di PT CIMB Principal Asset Management dengan posisi terakhir
            sebagai Direktur/Chief Investment Officer dan di PT Trimegah Asset
            Management sebagai Chief Investment Officer. Cholis Baidowi
            memperoleh izin perorangan sebagai Wakil Manajer Investasi dari
            Otoritas Jasa Keuangan berdasarkan surat keputusan Dewan Komisioner
            Otoritas Jasa Keuangan No.Kep-280/PM.211/PJ-WMI/2022 tanggal 21
            Oktober 2022.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eleifend eget morbi eget
            eget purus commodo at. In vestibulum tristique dictum ultrices
            tempus egestas mi ipsum elit. Sed id vitae enim vel viverra cursus
            fermentum sit.{' '}
          </p>
        </div>
      )
    };
    setDetailData(data);
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      {showDetail ? (
        <div className="px-[32px] py-[50px] sm:px-[136px] sm:py-[72px]">
          <div className='flex flex-col gap-7 border rounded-xl p-4'>
            <div className="flex flex-row gap-5 items-center border rounded-xl">
              <div className="w-[213px] h-[213px] bg-red-200 rounded-xl">
                <Image
                  alt="blank-image"
                  src={detailData.image}
                  className="rounded-xl w-[213px] h-[213px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[36px] font-bold">{detailData.name}</p>
                <p className="text-[24px] font-semibold text-purple_dark">
                  {detailData.role}
                </p>
              </div>
            </div>
            <p>{detailData.desc}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-[32px] py-[50px] sm:px-[136px] sm:py-[72px]">
          <PersonCard
            heading="Presiden Direktur"
            cards={[
              {
                name: 'Simon Imanto',
                role: 'Presiden Direktur',
                image: People1,
                onClick: handleCardClick
              }
            ]}
            roleClassname="text-purple_dark"
          />
          <PersonCard
            heading="Dewan Direksi"
            cards={[
              {
                name: 'Ian F. Natapradja',
                role: 'Direktur',
                image: People2,
                onClick: handleCardClick
              },
              {
                name: 'Jos C. Irawan',
                role: 'Direktur',
                image: People3,
                onClick: handleCardClick
              }
            ]}
            roleClassname="text-purple_dark"
          />
          <PersonCard
            heading="Dewan Komisaris"
            cards={[
              {
                name: 'Jannes H.',
                role: 'Komisaris Independen',
                image: People4,
                onClick: handleCardClick
              },
              {
                name: 'Angela A. Kalim',
                role: 'Komisaris Independen',
                image: People5,
                onClick: handleCardClick
              },
              {
                name: 'Angela A. Kalim',
                role: 'Komisaris Independen',
                image: People5,
                onClick: handleCardClick
              }
            ]}
            roleClassname="text-purple_dark"
          />
          <div className="flex flex-col gap-4 items-center justify-center w-full p-10">
            <div className="flex justify-center items-center p-10">
              <p className="text-[56px] font-bold text-purple_dark">
                Struktur Organisasi
              </p>
            </div>
            <div className="w-full flex flex-row justify-between items-center p-4 border rounded-xl">
              <p className="font-bold">
                Komitmen Kami untuk memberikan solusi investasi berkualitas.
              </p>
              <Button
                title="Lihat"
                customButtonClass="bg-purple_dark rounded-lg"
                customTextClass="text-white font-bold"
              />
            </div>
          </div>
        </div>
      )}
      <RoundedFrameBottom />
    </div>
  );
};

export default Manajemen;
