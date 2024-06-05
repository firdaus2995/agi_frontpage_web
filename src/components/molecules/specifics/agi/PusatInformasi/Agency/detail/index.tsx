import React from 'react';
import Image from 'next/image';
import BlankImage from '@/assets/images/blank-image.svg';
import Email from '@/assets/images/common/email.svg';
import Office from '@/assets/images/common/office.svg';
import Phone from '@/assets/images/common/phone.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';

const Detail = () => {
  return (
    <div className="w-full px-[2rem] md:px-[23.281rem] xs:py-[3.125rem] md:pb-[1rem]">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <p className="text-purple_dark font-semibold">Pusat Informasi</p>
          <p className="font-bold font-karla xs:text-[2.25rem] md:text-[3.5rem]">
            Avrist Assurance: Edukasi Keuangan pada Komunitas
          </p>
          <div className="flex flex-row justify-between items-center font-opensans">
            <div className="flex flex-col gap-[1rem]">
              <p>23 Februari 2024 | Budi Rahman</p>
              <div className="flex flex-row gap-2">
                <MediumTag title="Asuransi" />
                <MediumTag title="Edukasi" />
                <MediumTag title="Artikel" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="flex items-center" role="button">
                <Icon
                  width={16}
                  height={16}
                  name="share"
                  color="purple_verylight"
                />
              </div>

              <div className="text-xs font-bold">Share</div>
            </div>
          </div>
        </div>
        <p>
          <span className="font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </span>{' '}
          Quis non est egestas urna. Dictum pellentesque iaculis at tellus
          tortor sit dis nunc. Volutpat dictum venenatis non eget et. Augue
          tortor aliquam sapien ultricies egestas phasellus venenatis pulvinar.
          Consectetur magna dignissim turpis est ut et sapien. Commodo morbi
          iaculis viverra eget elementum rutrum duis. Magna urna et ullamcorper
          neque orci urna. Aenean libero enim in sed. Fusce a ipsum ipsum
          vestibulum metus orci libero aliquam. Augue vitae nam et volutpat
          lectus tempus quam turpis eget.
        </p>
        <p className="text-[24px]">
          Commodo morbi iaculis viverra eget elementum rutrum duis. Magna urna
          et ullamcorper neque orci urna. Aenean libero enim in sed.
        </p>
        <div className="bg-gray-200">
          <Image src={BlankImage} alt="img" className="w-full" />
        </div>
        <p className="text-[32px] font-bold text-purple_dark pt-10 w-full border-t">
          Lorem ipsum dolor sit amet
        </p>
        <p>
          <span className="font-bold italic">
            Lorem ipsum dolor sit amet consectetur.
          </span>{' '}
          Quis non est egestas urna. Dictum pellentesque iaculis at tellus
          tortor sit dis nunc. Volutpat dictum venenatis non eget et. Augue
          tortor aliquam sapien ultricies egestas phasellus venenatis pulvinar.
          Consectetur magna dignissim turpis est ut et sapien. Commodo morbi
          iaculis viverra eget elementum rutrum duis. Magna urna et ullamcorper
          neque orci urna. Aenean libero enim in sed. Fusce a ipsum ipsum
          vestibulum metus orci libero aliquam. Augue vitae nam et volutpat
          lectus tempus quam turpis eget.
        </p>
        <div className="grid grid-cols-2 gap-5">
          {[...Array(4)].map((_, index) => (
            <Image src={BlankImage} key={index} alt="img" className="w-full" />
          ))}
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="font-semibold">Artikel ini telah di liput di: </p>
          <div className="flex flex-col md:flex-row gap-4 pl-2">
            <div className="flex flex-row gap-2 items-center font-medium text-purple_dark">
              Kompas
              <Icon name="externalLink" color="purple_dark" width={10} />
            </div>
            <div className="flex flex-row gap-2 items-center font-medium text-purple_dark">
              Media Indonesia
              <Icon name="externalLink" color="purple_dark" width={10} />
            </div>
            <div className="flex flex-row gap-2 items-center font-medium text-purple_dark">
              Tribun
              <Icon name="externalLink" color="purple_dark" width={10} />
            </div>
            <div className="flex flex-row gap-2 items-center font-medium text-purple_dark">
              Detik
              <Icon name="externalLink" color="purple_dark" width={10} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-5 border border-b-8 border-b-purple_dark rounded-xl">
          <p className="font-semibold text-xl">
            Informasi lebih lanjut, hubungi:
          </p>
          <div>
            <p className="font-semibold text-xl">Lika Shalia</p>
            <p className="text-xl">
              Head of Corporate & Marketing Communications
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
            <div className="flex flex-row gap-2 items-center">
              <Image alt={'email'} className="w-6" src={Email} />
              <p className="font-bold">corcom@avrist.com</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image alt={'phone'} className="w-6" src={Phone} />
              <p className="font-bold">+62 21 5789 8188</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image alt={'office'} className="w-6" src={Office} />
              <p className="font-bold">Sekilas Avrist General Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
