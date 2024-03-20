import React from 'react';

import Image from 'next/image';
import Icon1 from '@/assets/images/avrast/component/informasi-klaim/bantuan.svg';
import Icon3 from '@/assets/images/avrast/component/panduan-pengajuan/icon-1.svg';
import Icon2 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Email from '@/assets/images/common/email.svg';
import Icon4 from '@/assets/images/common/heart-check.svg';
import Office from '@/assets/images/common/office.svg';
import Phone from '@/assets/images/common/phone.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';

export const generateStaticParams = () => {
  return [{ detail: 'detail' }];
};

const DetailPenghargaan = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <>
      <Hero
        title="Penghargaan"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          {
            title: 'Penghargaan',
            href: '/avrast/tentang-avrist-life/tentang-avrist-life?tab=Penghargaan'
          }
        ]}
        bottomImage={BlankImage}
      />

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-10 w-2/3 p-10">
          <div className="flex flex-col gap-5">
            <p className="text-purple_dark font-semibold">Penghargaan</p>
            <p className="font-semibold text-[48px]">
              Best Insurance 2023: Avrist Cetak Prestasi Gemilang!
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
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
            tortor aliquam sapien ultricies egestas phasellus venenatis
            pulvinar. Consectetur magna dignissim turpis est ut et sapien.
            Commodo morbi iaculis viverra eget elementum rutrum duis. Magna urna
            et ullamcorper neque orci urna. Aenean libero enim in sed. Fusce a
            ipsum ipsum vestibulum metus orci libero aliquam. Augue vitae nam et
            volutpat lectus tempus quam turpis eget.
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
            tortor aliquam sapien ultricies egestas phasellus venenatis
            pulvinar. Consectetur magna dignissim turpis est ut et sapien.
            Commodo morbi iaculis viverra eget elementum rutrum duis. Magna urna
            et ullamcorper neque orci urna. Aenean libero enim in sed. Fusce a
            ipsum ipsum vestibulum metus orci libero aliquam. Augue vitae nam et
            volutpat lectus tempus quam turpis eget.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {[...Array(4)].map((_, index) => (
              <Image
                src={BlankImage}
                key={index}
                alt="img"
                className="w-full"
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 p-5 border border-b-8 border-b-purple_dark rounded-xl">
            <p className="font-semibold text-xl">Berita ini telah terbit di:</p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                Kompas
                <Icon name="externalLink" color="purple_dark" width={10} />
              </div>
              <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                Media Indonesia
                <Icon name="externalLink" color="purple_dark" width={10} />
              </div>
              <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                Tribun
                <Icon name="externalLink" color="purple_dark" width={10} />
              </div>
              <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                Detik
                <Icon name="externalLink" color="purple_dark" width={10} />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
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
                <p className="font-bold">Sekilas Avrist Life Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <RoundedFrameBottom />
        <FooterInformation
          title={
            <div className="flex flex-col gap-4">
              <p className="text-[56px]">Subscribe Informasi Terkini!</p>
              <Button
                title="Avrist Life Insurance"
                customButtonClass="bg-purple_dark rounded-xl"
                customTextClass="text-white font-bold"
              />
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Masukkan email Anda"
                  customInputClass="w-[90%]"
                />
                <Button title="Subscribe" customButtonClass="rounded-xl" />
              </div>
            </div>
          }
          image={BlankImage}
        />
        <RoundedFrameTop />
      </div>
      <div className="w-full h-full bg-purple_superlight pb-20">
        <FooterCards
          cards={[
            {
              title: 'Hubungi Kami',
              icon: Icon1,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Tanya Avrista',
              icon: Icon2,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Panduan Klaim',
              icon: Icon3,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Asuransi Individu',
              icon: Icon4,
              subtitle: 'Lihat Produk'
            }
          ]}
        />
      </div>
    </>
  );
};

export default DetailPenghargaan;
