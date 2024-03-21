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
import CardCategoryB from '@/components/molecules/specifics/avrast/Cards/CategoriB';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import InterestSection from '@/components/molecules/specifics/avrast/InterestSection';

export const generateStaticParams = () => {
  return [{ detail: 'promo-terbaru' }];
};

const DetailPromoTerbaru = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <>
      <Hero
        title="Promo"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          {
            title: 'Avrist Promo Terbaru',
            href: '/avrast/promo-berita/promo?tab=Promo+Terbaru'
          }
        ]}
        bottomImage={BlankImage}
      />

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-10 w-2/3 p-10">
          <div className="flex flex-col gap-5">
            <p className="text-purple_dark font-semibold">Penawaran</p>
            <p className="font-semibold text-[48px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <p>2 Januari 2024</p>
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
          <div className="bg-gray-200">
            <Image src={BlankImage} alt="img" className="w-full" />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-4">
              <p className="text-sm font-medium">Lihat Promo ini di:</p>
              <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                Apple Watch
                <Icon name="externalLink" color="purple_dark" width={10} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InterestSection />

      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-10 p-10">
          <p className="text-purple_dark font-bold text-[36px]">
            Penawaran Promo Lainnya
          </p>
          <div className="grid grid-cols-3 gap-[24px] p-10">
            {[...Array(3)].map((_, index) => (
              <CardCategoryB
                key={index}
                summary="Lorem ipsum dolor sit amet consectetur."
                description="2 Januari 2024"
              />
            ))}
          </div>
        </div>
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
    </>
  );
};

export default DetailPromoTerbaru;
