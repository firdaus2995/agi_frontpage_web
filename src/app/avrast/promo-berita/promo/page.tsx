'use client';
import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Slider from 'react-slick';
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
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import SliderInformation from '@/components/molecules/specifics/avrast/SliderInformation';
import { ParamsProps } from '@/utils/globalTypes';

const Promo: React.FC<ParamsProps> = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (searchParams) {
      const value = searchParams.get('tab');
      const categories = searchParams.get('category');

      if (value !== null) {
        setTab(value);
      }

      if (categories !== null) {
        setCategory(categories);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center bg-white relative">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: tab === 'Avrist Terkini' ? category : tab, href: '#' }
        ]}
      />
      <div className="w-full flex flex-col items-center justify-center py-20 text-center relative">
        <div className="-mt-20 absolute z-20 top-2 w-full rounded-t-[76px] bg-white py-20">
          <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
            Avrist Promo Terbaru
          </h2>
          <h2 className="text-[24px] mb-6">
            Ikuti terus kuis menarik di Instagram{' '}
            <span className="font-semibold text-purple_dark">
              @avristsolution{' '}
            </span>
            untuk mendapatkan giveaway gratis dari Avrist Life Insurance
          </h2>
        </div>

        <div className="w-full p-10">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...sliderSettings}
          >
            {[...Array(5)].map((_, index) => (
              <SliderInformation
                key={index}
                title={
                  <div className="flex flex-col gap-4 text-left">
                    <p className="text-[24px] font-bold">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <p className="text-[16px] line-clamp-4">
                      Lorem ipsum dolor sit amet consectetur. Et non nulla elit
                      eget. Integer non a varius viverra. Amet proin libero
                      augue amet nunc et. Ultrices habitasse diam quam consequat
                      commodo. Amet tempor nam cras id egestas pulvinar egestas
                      egestas vitae. Etiam tincidunt sit amet ultricies pharetra
                      ultrices nisl nec tincidunt. Tincidunt gravida orci
                      feugiat amet. At ridiculus dolor augue gravida. Risus ut
                      neque leo fringilla tincidunt suspendisse fusce eu arcu.
                      Blandit fermentum faucibus tempus varius quis at.
                      Vulputate elit lorem purus faucibus blandit non ut. Ornare
                      tortor pulvinar eget facilisis mi tortor vulputate.
                    </p>
                    <div className="flex flex-row flex-wrap gap-[12px]">
                      <MediumTag title="Avrist Life Insurance" />
                      <MediumTag title="Tanggung Jawab Sosial" />
                    </div>
                    <div className="flex flex-row items-center flex-wrap gap-[12px] font-bold text-purple_dark">
                      Selengkapnya
                      <Icon name="chevronRight" color="purple_dark" />
                    </div>
                  </div>
                }
                image={BlankImage}
              />
            ))}
          </Slider>
          <div className="flex flex-row justify-between w-full px-20">
            <div
              className="p-2 border-2 rounded-full border-purple_dark"
              role="button"
              onClick={previous}
            >
              <Icon name="chevronLeft" color="purple_dark" />
            </div>
            <div
              className="p-2 border-2 rounded-full border-purple_dark"
              role="button"
              onClick={next}
            >
              <Icon name="chevronRight" color="purple_dark" />
            </div>
          </div>
        </div>

        <CategoryWithThreeCards
          defaultSelectedCategory={category}
          filterRowLayout={true}
          hiddenCategory
          categoryCard="B"
          categories={['Berita dan Kegiatan', 'AvriStory', 'Avrist Life Guide']}
          tabs={[
            {
              type: 'dropdown',
              label: 'tahun',
              options: [
                { label: 'Pilih Tahun', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
              ]
            },
            {
              type: 'dropdown',
              label: 'Bulan',
              options: [
                { label: 'Pilih Bulan', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
              ]
            }
          ]}
          customContent={
            <div className="grid grid-cols-3 gap-[24px]">
              {[...Array(6)].map((_, index) => (
                <Link
                  key={index}
                  href={
                    'http://localhost:3000/avrast/promo-berita/promo/promo-terbaru'
                  }
                >
                  <div key={index} className="max-w-md">
                    <Image src={BlankImage} className="h-full" alt="blank" />
                  </div>
                </Link>
              ))}
            </div>
          }
        />
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

export default Promo;
