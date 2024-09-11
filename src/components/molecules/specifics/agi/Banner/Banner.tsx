'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import BlankImage from '@/assets/images/blank-image.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import {
  contentStringTransformer,
  heroContentTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type BannerAvrastPopUp = {
  content: any;
};

const BannerAvrast = (props: BannerAvrastPopUp) => {
  const { content } = props;
  const sliderRef = useRef<Slider | null>(null);
  const dropdownRef = useRef<any>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [bannerData, setBannerData] = useState<any>([]);
  const [dropdownData, setDropdownData] = useState({
    text1: '',
    text2: '',
    item: [
      {
        label: '',
        link: ''
      },
      {
        label: '',
        link: ''
      },
      {
        label: '',
        link: ''
      }
    ]
  });

  useEffect(() => {
    setBannerData(heroContentTransformer(content['hero-looping']));
    const dataDropdown = {
      text1: contentStringTransformer(content['dropdown-text-1']),
      text2: contentStringTransformer(content['dropdown-text-2']),
      item: [
        {
          label: contentStringTransformer(content['dropdown-item-1-label']),
          link: contentStringTransformer(content['dropdown-item-1-link'])
        },
        {
          label: contentStringTransformer(content['dropdown-item-2-label']),
          link: contentStringTransformer(content['dropdown-item-2-link'])
        },
        {
          label: contentStringTransformer(content['dropdown-item-3-label']),
          link: contentStringTransformer(content['dropdown-item-3-link'])
        }
      ]
    };

    setDropdownData(dataDropdown);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: any): void => {
      if (!dropdownRef?.current?.contains(e.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [dropdownVisible]);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: bannerData.length > 1 ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<string | React.JSXElementConstructor<string>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
    ) => (
      <div
        style={{
          position: 'absolute',
          left: window.innerWidth > 480 ? 136 : window.innerWidth * 0.4,
          width: 150,
          bottom: 50
        }}
      >
        <ul style={{ margin: '0px', width: 12, height: 12, display: 'flex' }}>
          {' '}
          {dots}{' '}
        </ul>
      </div>
    )
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
  return (
    <div className="flex w-full overflow-x-hidden bg-white h-auto">
      <div className="w-full">
        <div className="w-full relative flex items-center justify-center">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...sliderSettings}
            className="w-screen max-w-screen-2xl 3xl:max-w-screen-3xl"
          >
            {bannerData.length > 0 &&
              bannerData.map(
                (
                  data: { [x: string]: any },
                  index: React.Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className="flex w-full h-[49rem] lg:h-[40rem] relative"
                  >
                    <div className="lg:hidden relative">
                      <div className="h-[49rem] absolute bg-gradient-to-b from-white from-40% via-white via-10% to-transparent to-60% z-10 w-full"></div>
                      <div className="h-[19rem]" />
                      <Image
                        alt="loop-image"
                        src={
                          singleImageTransformer(data['hero-image']).imageUrl
                            ? singleImageTransformer(data['hero-image'])
                                .imageUrl
                            : BlankImage
                        }
                        width={100}
                        height={100}
                        className="w-full h-[30rem] object-cover object-right-bottom"
                      />
                    </div>
                    <div className="lg:block xs:hidden">
                      <Image
                        alt="loop-image"
                        src={
                          singleImageTransformer(data['hero-image']).imageUrl
                            ? singleImageTransformer(data['hero-image'])
                                .imageUrl
                            : BlankImage
                        }
                        width={100}
                        height={100}
                        className="w-full h-[40rem] object-cover"
                      />
                    </div>
                    <div className="flex flex-col 2xl:w-[50%] lg:px-[9rem] lg:py-10 absolute z-50 top-10 w-full xs:items-center lg:items-start gap-8">
                      <p
                        className={`xs:text-[1.5rem] lg:text-[28px] px-[1rem] lg:px-0 text-purple_dark font-karla font-medium xs:text-center lg:text-left`}
                      >
                        {contentStringTransformer(data['hero-teks1'])}
                      </p>
                      <div
                        className="xs:px-[2rem] lg:px-0 leading-none text-[1.5rem] xl:text-[2.25rem] xs:text-center lg:text-left font-karla lg:font-normal lg:leading-9 tracking-tight text-shadow"
                        dangerouslySetInnerHTML={{
                          __html: contentStringTransformer(data['hero-teks2'])
                        }}
                      />
                      <div className="mt-3 py-[12px]">
                        <Link
                          href={contentStringTransformer(
                            data['hero-linkbutton']
                          )}
                        >
                          <Button
                            title={contentStringTransformer(
                              data['hero-lblbutton']
                            )}
                            customButtonClass={`bg-purple_dark hover:bg-purple_dark text-white border-none text-[1.25rem] xs:py-[12px] xs:px-[40px]`}
                            customTextClass="text-banner-btn-label"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
          </Slider>
          <div className="xs:hidden lg:block absolute top-[50%] w-full">
            <div className="flex flex-row justify-between w-full px-10">
              <div
                className="p-2 border-2 rounded-full border-purple_dark rotate-180"
                role="button"
                onClick={previous}
              >
                <Icon name="chevronRight" color="purple_dark" />
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
        </div>
        <div className="w-full -mt-[6px] flex lg:flex-row xs:flex-col">
          <div className="flex py-10 px-[2rem] lg:px-[8.5rem] lg:pr-0 items-center xs:justify-start text-white lg:text-4xl xs:text-xl text-left w-full lg:max-w-[45%] lg:max-w-[35%] bg-agi_grey">
            <p
              dangerouslySetInnerHTML={{ __html: dropdownData?.text1 }}
              className="font-karla font-light xs:w-full text-banner-footer-1-mobile lg:text-banner-footer-1-desktop"
            />
          </div>
          <div className="flex xs:py-10 xs:px-[32px] lg:pl-[4rem] lg:pr-[8.5rem] flex-row justify-between items-center text-white lg:text-[48px] xs:text-[24px] w-full bg-purple_light relative">
            <p
              dangerouslySetInnerHTML={{ __html: dropdownData?.text2 }}
              className="font-karla font-bold text-banner-footer-2-mobile lg:text-banner-footer-2-desktop"
            />
            <button
              id="drop-down"
              className="text-white font-medium rounded-full text-sm p-2 text-center border-2 xs:w-[2rem] xs:h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem] xs:max-lg:mr-4"
              type="button"
              onClick={toggleDropdown}
            >
              {dropdownVisible ? (
                <>
                  <div className="lg:hidden rotate-[180deg]">
                    <Icon
                      name="chevronDown"
                      color="white"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className="xs:hidden lg:block rotate-[180deg]">
                    <Icon name="chevronDown" color="white" />
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:hidden">
                    <Icon
                      name="chevronDown"
                      color="white"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className="xs:hidden lg:block">
                    <Icon name="chevronDown" color="white" />
                  </div>
                </>
              )}
            </button>
          </div>
          {dropdownVisible && (
            <div
              aria-label="drop-down"
              className={`absolute shadow-xl flex flex-col xs:top-[1200px] md:top-[1150px] lg:top-[950px] xl:top-[920px] 2xl:top-[920px] rounded-md bg-white xs:left-0 lg:left-[10rem] lg:left-[25rem] xl:left-[50rem] 2xl:left-[70rem] 3xl:left-[105rem] w-full lg:w-[31.25rem] z-30 lg:text-[36px]/[43.2px] lg:-tracking-[1.44px] xs:text-[1.5rem] text-[#1A141F]`}
              ref={dropdownRef}
            >
              {dropdownData?.item?.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="font-karla w-full rounded-md border border-purple_dark/[0.4] hover:bg-gray_light hover:border-l-purple_dark border-l-8 text-gray-400 hover:text-purple_dark hover:font-medium py-[24px] pr-[24px] pl-[32px] lg:text-[36px] xs:text-[20px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerAvrast;
