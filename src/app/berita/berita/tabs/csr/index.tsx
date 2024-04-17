import { useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CardCategoryC from '@/components/molecules/specifics/agi/Cards/CategoryC';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import SliderInformation from '@/components/molecules/specifics/agi/SliderInformation';

const CSR = () => {
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
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 text-center mt-44">
      <h2 className="text-[56px] font-bold mb-6 text-purple_dark">
        CSR Avrist General Insurance
      </h2>
      <h2 className="text-[36px] mb-6">
        Informasi terkini dari siaran pers hingga aktivitas sosial.
      </h2>

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
                  <div className="text-[14px] flex flex-row gap-2">
                    <MediumTag title="Avrist Life Insurance" />
                    <MediumTag title="Tanggung Jawab Sosial" />
                  </div>
                  <p className="cursor-pointer font-bold text-purple_dark flex gap-2 items-center">
                    Selengkapnya{' '}
                    <span className="mt-[3px]">
                      <Icon name="chevronRight" color="purple_dark" />
                    </span>
                  </p>
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
        defaultSelectedCategory={'Berita dan Kegiatan'}
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
                href={'/berita/berita/tabs/csr/detail'}
              >
                <CardCategoryC
                  summary="Lorem ipsum dolor sit amet consectetur."
                  name=""
                  position="2 Januari 2024"
                />
              </Link>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default CSR;
