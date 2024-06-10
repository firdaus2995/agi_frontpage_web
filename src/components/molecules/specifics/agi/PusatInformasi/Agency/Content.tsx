'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Slider from 'react-slick';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CardCategoryB from '@/components/molecules/specifics/agi/Cards/CategoriB';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import SliderInformation from '@/components/molecules/specifics/agi/SliderInformation';

const Content = () => {
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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false
        }
      }
    ]
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, setTab] = useState('');
  const [category, setCategory] = useState('Berita dan Kegiatan');

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

  const onCategoryChange = (value: string) => {
    setCategory(value);
    router.push(pathname + '?' + createQueryStringCategory('category', value), {
      scroll: false
    });
  };

  const createQueryStringCategory = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 mt-10">
      <div className="text-center">
        <h2 className="text-[2.25rem] 2xl:text-[3.5rem] font-medium mb-6 text-purple_dark">
          Berita dan Acara Avrist General Insurance
        </h2>
        <h2 className="text-[1.5rem] md:text-[2rem] mb-6">
          Informasi terkini dari siaran pers hingga aktivitas sosial.
        </h2>
      </div>

      <div className="w-full">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
        >
          {[...Array(5)].map((_, index) => (
            <SliderInformation
              key={index}
              bgColor="purple_superlight"
              title={
                <div className="flex flex-col gap-4 text-left">
                  <p className="text-[14px]">
                    <span className="font-bold text-purple_dark">
                      Tanggung Jawab Sosial
                    </span>{' '}
                    | 2 Januari 2024
                  </p>
                  <p className="text-[36px] font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className="text-[16px] line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur. Et non nulla elit
                    eget. Integer non a varius viverra. Amet proin libero augue
                    amet nunc et. Ultrices habitasse diam quam consequat
                    commodo. Amet tempor nam cras id egestas pulvinar egestas
                    egestas vitae. Etiam tincidunt sit amet ultricies pharetra
                    ultrices nisl nec tincidunt. Tincidunt gravida orci feugiat
                    amet. At ridiculus dolor augue gravida. Risus ut neque leo
                    fringilla tincidunt suspendisse fusce eu arcu. Blandit
                    fermentum faucibus tempus varius quis at. Vulputate elit
                    lorem purus faucibus blandit non ut. Ornare tortor pulvinar
                    eget facilisis mi tortor vulputate.
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
        <div className="flex flex-row justify-between w-full mt-10 md:mb-0">
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
        hiddenCategory
        defaultSelectedCategory={category}
        onCategoryChange={(tab) => onCategoryChange(tab)}
        filterRowLayout={true}
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
        searchPlaceholder="Cari Kegiatan"
        customContent={
          <>
            <div className="grid grid-cols-3 gap-[24px] xs:max-sm:grid-cols-1">
              {[...Array(6)].map((_, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: '/pusat-informasi/pusat-informasi',
                    query: { tab: 'Agency', content: 'detail' }
                  }}
                >
                  <CardCategoryB
                    summary="Lorem ipsum dolor sit amet consectetur."
                    description="2 Januari 2024"
                    lineClamp={3}
                  />
                </Link>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default Content;
