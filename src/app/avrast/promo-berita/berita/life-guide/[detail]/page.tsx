import React from 'react';

import Image from 'next/image';
import Icon1 from '@/assets/images/avrast/component/informasi-klaim/bantuan.svg';
import Icon3 from '@/assets/images/avrast/component/panduan-pengajuan/icon-1.svg';
import Icon2 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon4 from '@/assets/images/common/heart-check.svg';
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
  return [{ detail: 'avrist-life-guide' }];
};

const categories = [
  'Dasar-Dasar Asuransi',
  'Commodo morbi',
  'Quis non est',
  'Augue tortor',
  'Aenean libero'
];

const DetailAvristLifeGuide = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <div className="flex flex-col">
      <Hero
        title="Avrist Terkini"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          {
            title: 'Avrist Life Guide',
            href: 'http://localhost:3000/avrast/promo-berita/berita?tab=Avrist+Terkini&category=Avrist+Life+Guide'
          }
        ]}
        bottomImage={BlankImage}
      />
      <div className="flex flex-row px-[136px] py-[72px] gap-[48px]">
        <div className="flex flex-col gap-10 py-10">
          <p className="font-semibold">Daftar Isi</p>
          <div className="flex flex-col shrink min-w-[210px] bg-purple_light_bg rounded-r-[12px] rounded-l-[4px] overflow-hidden">
            {categories.map((item: string, index: number) =>
              item === 'Dasar-Dasar Asuransi' ? (
                <div
                  key={index}
                  className="border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer text-left"
                >
                  <span className="font-bold text-purple_dark text-[18px]">
                    {item}
                  </span>
                </div>
              ) : (
                <div
                  key={index}
                  role="button"
                  className="border-l-4 border-purple_mediumlight px-[15px] py-[10px] cursor-pointer text-left"
                >
                  <span className="font-bold text-purple_mediumlight text-[18px]">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col grow">
          <div className="flex items-center justify-start w-full">
            <div className="flex flex-col gap-10 w-2/3 py-10">
              <div className="flex flex-col gap-5">
                <p className="text-purple_dark font-semibold">Daily Insight</p>
                <p className="font-semibold text-[48px]">
                  Dasar-Dasar Asuransi yang Perlu Anda Ketahui
                </p>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p>1 Jam yang lalu | Budi Rahman</p>
                    <div className="flex flex-row gap-2">
                      <MediumTag title="Reksa Dana" />
                      <MediumTag title="Investasi" />
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

                    {/* {isVisible && (
                      <div
                        className="absolute right-0 mt-10 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
                        role="menu"
                      >
                        <div className="py-1 flex flex-row gap-5" role="none">
                          <div className="flex flex-col gap-1 items-center">
                            <Image
                              role="button"
                              onClick={() => setIsVisible(!isVisible)}
                              className="h-auto w-5"
                              src={Whatsapp}
                              alt="whatsapp"
                            />
                            <div className="text-xs font-bold">Whatsapp</div>
                          </div>
                          <div className="flex flex-col gap-1 items-center">
                            <Image
                              role="button"
                              onClick={() => setIsVisible(!isVisible)}
                              className="h-auto w-5"
                              src={Email}
                              alt="email"
                            />
                            <div className="text-xs font-bold">Email</div>
                          </div>
                          <div className="flex flex-col gap-1 items-center">
                            <Image
                              role="button"
                              onClick={() => setIsVisible(!isVisible)}
                              className="h-auto w-5"
                              src={LinkedIn}
                              alt="linkedin"
                            />
                            <div className="text-xs font-bold">LinkedIn</div>
                          </div>
                          <div className="flex flex-col gap-1 items-center">
                            <Image
                              role="button"
                              onClick={() => setIsVisible(!isVisible)}
                              className="h-auto w-5"
                              src={Facebook}
                              alt="facebook"
                            />
                            <div className="text-xs font-bold">Facebook</div>
                          </div>
                          <div className="flex flex-col gap-1 items-center">
                            <div
                              role="button"
                              className="items-center"
                              onClick={() => setIsVisible(!isVisible)}
                            >
                              <Icon
                                width={18}
                                height={18}
                                name="copyUrl"
                                color="purple_verylight"
                              />
                            </div>
                            <div className="text-xs font-bold">Copy URL</div>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
              <p className="text-purple_dark font-semibold text-3xl">
                Lorem ipsum dolor sit amet
              </p>
              <p>
                <span className="font-bold italic">
                  Lorem ipsum dolor sit amet consectetur.
                </span>{' '}
                Quis non est egestas urna. Dictum pellentesque iaculis at tellus
                tortor sit dis nunc. Volutpat dictum venenatis non eget et.
                Augue tortor aliquam sapien ultricies egestas phasellus
                venenatis pulvinar. Consectetur magna dignissim turpis est ut et
                sapien. Commodo morbi iaculis viverra eget elementum rutrum
                duis. Magna urna et ullamcorper neque orci urna. Aenean libero
                enim in sed. Fusce a ipsum ipsum vestibulum metus orci libero
                aliquam. Augue vitae nam et volutpat lectus tempus quam turpis
                eget.
              </p>
              <div className="bg-gray-200">
                <Image src={BlankImage} alt="img" className="w-full" />
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
  );
};

export default DetailAvristLifeGuide;
