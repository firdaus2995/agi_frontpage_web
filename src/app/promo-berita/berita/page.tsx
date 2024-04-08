'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
import CardCategoryB from '@/components/molecules/specifics/avrast/Cards/CategoriB';
import CardCategoryC from '@/components/molecules/specifics/avrast/Cards/CategoryC';
import CardCategoryD from '@/components/molecules/specifics/avrast/Cards/CategoryD';
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import SliderInformation from '@/components/molecules/specifics/avrast/SliderInformation';
import { ParamsProps } from '@/utils/globalTypes';

const Berita: React.FC<ParamsProps> = () => {
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

  const router = useRouter();
  const pathname = usePathname();
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

  const handleTabClick = (tabs: string) => {
    setTab(tabs);
    router.push(pathname + '?' + createQueryString('tab', tabs), {
      scroll: false
    });
  };

  const onCategoryChange = (value: string) => {
    setCategory(value);
    router.push(pathname + '?' + createQueryStringCategory('category', value), {
      scroll: false
    });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      if (value !== 'Avrist Terkini') {
        params.delete('category');
      } else {
        params.set('category', 'Berita dan Kegiatan');
      }

      return params.toString();
    },
    [searchParams]
  );

  const createQueryStringCategory = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const tabs = ['Avrist Terkini', 'Testimonial', 'Kumpulan Berita Pers'];

  return (
    <div className="flex flex-col items-center justify-center bg-white relative">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab === 'Avrist Terkini' ? category : tab, href: '#' }
        ]}
      />
      <div className="w-full grid grid-cols-3 gap-2 px-[136px] py-20 absolute z-20 top-32 rounded-t-[76px] bg-white">
        {tabs.map((val, idx) => (
          <div
            key={idx}
            role="button"
            onClick={() => handleTabClick(val)}
            className={`p-2 border border-purple_dark rounded-lg text-center ${tab === val ? 'bg-purple_dark text-white' : 'text-purple_dark'} font-semibold`}
          >
            {val}
          </div>
        ))}
      </div>

      {tab === 'Avrist Terkini' && (
        <div className="w-full flex flex-col items-center justify-center py-2 text-center mt-44">
          <h2 className="text-[32px] font-medium mb-6 text-purple_dark">
            {category === 'Berita dan Kegiatan' &&
              'Berita dan Kegiatan Avrist Life Insurance'}
            {category === 'AvriStory' && (
              <p>
                <span className="font-black">AvriStory:</span> E-Bulletin hadir
                setiap 3 bulan sekali
              </p>
            )}
            {category === 'Avrist Life Guide' && 'Avrist Life Guide'}
          </h2>
          <h2 className="text-[20px] mb-6">
            {category === 'Berita dan Kegiatan' &&
              'Informasi terkini dari siaran pers hingga aktivitas sosial.'}
            {category === 'AvriStory' && (
              <p>
                Informasi terbaru mengenai{' '}
                <span className="font-black">Avrist Life Insurance</span>
              </p>
            )}
            {category === 'Avrist Life Guide' && (
              <p>
                Kumpulan artikel mengenai{' '}
                <span className="font-bold text-purple_dark">asuransi</span> dan{' '}
                <span className="font-bold text-purple_dark">gaya hidup.</span>
              </p>
            )}
          </h2>

          {category === 'Berita dan Kegiatan' && (
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
                          Lorem ipsum dolor sit amet consectetur. Et non nulla
                          elit eget. Integer non a varius viverra. Amet proin
                          libero augue amet nunc et. Ultrices habitasse diam
                          quam consequat commodo. Amet tempor nam cras id
                          egestas pulvinar egestas egestas vitae. Etiam
                          tincidunt sit amet ultricies pharetra ultrices nisl
                          nec tincidunt. Tincidunt gravida orci feugiat amet. At
                          ridiculus dolor augue gravida. Risus ut neque leo
                          fringilla tincidunt suspendisse fusce eu arcu. Blandit
                          fermentum faucibus tempus varius quis at. Vulputate
                          elit lorem purus faucibus blandit non ut. Ornare
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
          )}

          <CategoryWithThreeCards
            defaultSelectedCategory={category}
            onCategoryChange={(tab) => onCategoryChange(tab)}
            filterRowLayout={true}
            categoryCard="B"
            categories={[
              'Berita dan Kegiatan',
              'AvriStory',
              'Avrist Life Guide'
            ]}
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
              category === 'Berita dan Kegiatan' ? (
                <div className="grid grid-cols-3 gap-[24px]">
                  {[...Array(6)].map((_, index) => (
                    <Link
                      key={index}
                      href={
                        '/promo-berita/berita/berita-dan-kegiatan'
                      }
                    >
                      <CardCategoryB
                        summary="Lorem ipsum dolor sit amet consectetur."
                        description="2 Januari 2024"
                      />
                    </Link>
                  ))}
                </div>
              ) : category === 'AvriStory' ? (
                <div className="grid grid-cols-1 gap-[24px] w-full">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between items-center p-4 border rounded-xl"
                    >
                      <div className="flex flex-row gap-2 items-center">
                        <p className="font-bold">
                          AVRISTORY_E-Bulletin_Q1_2024
                        </p>
                        <MediumTag title="PDF" />
                      </div>
                      <Button
                        title="Unduh"
                        customButtonClass="rounded-xl bg-purple_dark"
                        customTextClass="text-white"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-[24px]">
                  {[...Array(3)].map((_, index) => (
                    <Link
                      key={index}
                      href={
                        '/promo-berita/berita/life-guide/avrist-life-guide'
                      }
                    >
                      <CardCategoryD
                        type="row"
                        title="Lorem ipsum dolor sit amet consectetur."
                        summary="Dalam dunia keuangan yang dinamis, aset manajemen menjadi kompas penting bagi investor yang mencari peluang pertumbuhan dan keberlanjutan. Artikel ini akan mengulas panduan praktis dari perusahaan aset manajemen terkemuka, membantu Anda memahami strategi pintar dan memaksimalkan potensi investasi Anda."
                        category="Daily Insight"
                        time=" | 15 Menit yang lalu"
                        tags={['Asuransi Jiwa Individual', 'Daily Insight']}
                      />
                    </Link>
                  ))}
                </div>
              )
            }
            customLeftContent={
              category === 'Avrist Life Guide' ? (
                <div className="flex flex-col gap-4 mt-5 h-full">
                  <div className="border rounded-xl p-4 flex flex-col gap-4 text-left grow">
                    <p className="font-semibold pb-2 border-b">
                      Kategori Artikel
                    </p>
                    <div className="flex flex-col mt-5 gap-4">
                      <div className="flex flex-row items-start gap-1 text-left">
                        <p className="text-purple_dark font-bold text-sm cursor-pointer text-left">
                          Lifestyle
                        </p>
                        <Icon
                          width={16}
                          height={16}
                          name="chevronRight"
                          color="purple_dark"
                        />
                      </div>
                      <div className="flex flex-row items-start gap-1 text-left">
                        <p className="text-purple_dark font-bold text-sm cursor-pointer text-left">
                          Financial
                        </p>
                        <Icon
                          width={16}
                          height={16}
                          name="chevronRight"
                          color="purple_dark"
                        />
                      </div>
                      <div className="flex flex-row items-start gap-1 text-left">
                        <p className="text-purple_dark font-bold text-sm cursor-pointer text-left">
                          Hobby
                        </p>
                        <Icon
                          width={16}
                          height={16}
                          name="chevronRight"
                          color="purple_dark"
                        />
                      </div>
                      <div className="flex flex-row items-start gap-1 text-left">
                        <p className="text-purple_dark font-bold text-sm cursor-pointer text-left">
                          Tips and Tricks
                        </p>
                        <Icon
                          width={16}
                          height={16}
                          name="chevronRight"
                          color="purple_dark"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-xl p-4 flex flex-col gap-4 text-left bg-purple_verylight">
                    <p className="font-bold text-[24px] text-purple_dark">
                      Subscribe!
                    </p>
                    <p className="text-[14px]">
                      Informasi terkini mengenai Avrist Life Insurance
                    </p>
                    <Input placeholder="Masukkan email Anda" />
                    <Button
                      title="Subscribe"
                      customButtonClass="bg-purple_dark rounded-xl"
                      customTextClass="text-white font-bold"
                    />
                  </div>
                  <div className="border rounded-xl p-4 flex flex-col gap-4 text-left">
                    <p className="font-bold text-[16px]">Ikuti Kami</p>
                    <div className="flex flex-row gap-2">
                      <div className="p-2 rounded-xl bg-purple_dark/[0.06]">
                        <Icon name="youtubeIcon" color="purple_dark" />
                      </div>
                      <div className="p-2 rounded-xl bg-purple_dark/[0.06]">
                        <Icon name="linkedInIcon" color="purple_dark" />
                      </div>
                      <div className="p-2 rounded-xl bg-purple_dark/[0.06]">
                        <Icon name="instaIcon" color="purple_dark" />
                      </div>
                      <div className="p-2 rounded-xl bg-purple_dark/[0.06]">
                        <Icon name="facebookIcon" color="purple_dark" />
                      </div>
                      <div className="p-2 rounded-xl bg-purple_dark/[0.06]">
                        <Icon name="tiktokIcon" color="purple_dark" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            }
            customRightContent={
              category === 'Avrist Life Guide' ? (
                <div className="flex flex-col gap-4 mt-5 h-full">
                  <p className="font-semibold pb-2 text-left text-[24px]">
                    Terbaru
                  </p>
                  <div className="grid grid-cols-2 gap-[24px]">
                    {[...Array(4)].map((_, index) => (
                      <Link
                        key={index}
                        href={
                          '/promo-berita/berita/life-guide/avrist-life-guide'
                        }
                      >
                        <CardCategoryD
                          key={index}
                          title="Lorem ipsum dolor sit amet consectetur."
                          summary="Dalam dunia keuangan yang dinamis, aset manajemen menjadi kompas penting bagi investor yang mencari peluang pertumbuhan dan keberlanjutan. Artikel ini akan mengulas panduan praktis dari perusahaan aset manajemen terkemuka, membantu Anda memahami strategi pintar dan memaksimalkan potensi investasi Anda."
                          category="Daily Insight"
                          time=" | 15 Menit yang lalu"
                          tags={['Asuransi Jiwa Individual', 'Daily Insight']}
                        />
                      </Link>
                    ))}
                  </div>
                  <p className="font-semibold pb-2 text-left text-[24px] mt-10">
                    Artikel Lainnya
                  </p>
                </div>
              ) : null
            }
          />
        </div>
      )}

      {tab === 'Testimonial' && (
        <div className="w-full flex flex-col items-center justify-center py-2 text-center mt-44">
          <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
            Dari Anda untuk Kami
          </h2>
          <h2 className="text-[20px] mb-6">
            Inilah Cerita Pengalaman Nasabah Avrist Assurance bersama Kami
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
                  isVideo
                  bgColor="purple_superlight"
                  title={
                    <div className="flex flex-col gap-4 text-left">
                      <p className="text-[36px] font-bold">
                        Simak lebih lanjut tentang kisah Vicky
                      </p>
                      <p className="text-[16px] line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur. Et non nulla
                        elit eget. Integer non a varius viverra. Amet proin
                        libero augue amet nunc et. Ultrices habitasse diam quam
                        consequat commodo. Amet tempor nam cras id egestas
                        pulvinar egestas egestas vitae. Etiam tincidunt sit amet
                        ultricies pharetra ultrices nisl nec tincidunt.
                        Tincidunt gravida orci feugiat amet. At ridiculus dolor
                        augue gravida. Risus ut neque leo fringilla tincidunt
                        suspendisse fusce eu arcu. Blandit fermentum faucibus
                        tempus varius quis at. Vulputate elit lorem purus
                        faucibus blandit non ut. Ornare tortor pulvinar eget
                        facilisis mi tortor vulputate.
                      </p>
                      <p className="text-[14px]">
                        <span className="font-bold text-purple_dark">
                          Francis Glover
                        </span>{' '}
                        | Human Accounts Agent
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
            defaultSelectedCategory={category}
            filterRowLayout={true}
            hiddenCategory
            categoryCard="B"
            categories={[
              'Berita dan Kegiatan',
              'AvriStory',
              'Avrist Life Guide'
            ]}
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
                {[...Array(3)].map((_, index) => (
                  <CardCategoryC
                    key={index}
                    summary="Lorem ipsum dolor sit amet consectetur."
                    name="Bruce Emmerich"
                    position=" | Senior Quality Facilitator"
                  />
                ))}
              </div>
            }
          />
        </div>
      )}

      {tab === 'Kumpulan Berita Pers' && (
        <div className="w-full flex flex-col items-center justify-center py-2 text-center mt-44">
          <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
            Kumpulan Berita Pers
          </h2>
          <h2 className="text-[20px] mb-6">
            Berbagai <span className="font-bold">Informasi</span> mengenai{' '}
            <span className="font-bold">kegiatan, produk</span> dan{' '}
            <span className="font-bold">layanan</span> dari Avrist Life
            Insurance. Melangkah bersama Kami!
          </h2>

          <CategoryWithThreeCards
            defaultSelectedCategory={category}
            filterRowLayout={true}
            hiddenCategory
            categoryCard="B"
            categories={[
              'Berita dan Kegiatan',
              'AvriStory',
              'Avrist Life Guide'
            ]}
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
              <div className="grid grid-cols-1 gap-[24px] w-full">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="w-full p-4 border rounded-xl">
                    <p className="font-bold text-left">
                      Gelar Inspirative Talk, Avrist Hadirkan Penulis Novel
                      Layangan Putus dan Co-Founder Kopi Soe Artikel ini telah
                      tayang di Kompas.com dengan judul
                    </p>
                    <div className="flex flex-row gap-4 mt-5">
                      <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                        Kompas
                        <Icon
                          name="externalLink"
                          color="purple_dark"
                          width={10}
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                        Media Indonesia
                        <Icon
                          name="externalLink"
                          color="purple_dark"
                          width={10}
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                        Tribun
                        <Icon
                          name="externalLink"
                          color="purple_dark"
                          width={10}
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-center text-xs font-medium text-purple_dark">
                        Detik
                        <Icon
                          name="externalLink"
                          color="purple_dark"
                          width={10}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      )}

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
    </div>
  );
};

export default Berita;
