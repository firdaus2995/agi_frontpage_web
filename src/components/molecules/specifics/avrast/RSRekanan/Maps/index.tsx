import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import MAPS from '@/assets/images/maps.svg';
import Icon from '@/components/atoms/Icon';
import MarkerCard from '@/components/molecules/specifics/avrast/RSRekanan/Maps/MarkerCard';
import SearchBox from '@/components/molecules/specifics/avrast/SearchBox';

const hospitalData = [
  {
    name: 'RSIA Bunda Jakarta',
    address: 'Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Pusat',
    phone: '(021) 5789 8188'
  },
  {
    name: 'RSIA Bunda Jakarta',
    address: 'Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Pusat',
    phone: '(021) 5789 8188'
  },
  {
    name: 'RSIA Bunda Jakarta',
    address: 'Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Pusat',
    phone: '(021) 5789 8188'
  },
  {
    name: 'RSIA Bunda Jakarta',
    address: 'Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Barat',
    phone: '(021) 5789 8188'
  }
];

const Maps = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="w-full h-full rounded rounded-xl border border-gray_light flex flex-col pb-6">
      <Image alt="maps" src={MAPS} className="w-full rounded-xl" />
      <div className="px-[5%] -mt-10">
        <SearchBox onSearch={() => {}} />
      </div>
      <div className="flex flex-row justify-between px-3">
        <div className="flex items-center justify-center">
          <div className="p-2 rounded-full border border-purple_dark">
            <Icon name="chevronLeft" color="purple_dark" />
          </div>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
          className="w-full flex flex-row justify-between px-2"
        >
          {hospitalData.map((item, index) => (
            <MarkerCard
              key={index}
              name={item.name}
              address={item.address}
              phone={item.phone}
            />
          ))}
        </Slider>
        <div className=" flex items-center justify-center">
          <div className="p-2 rounded-full border border-purple_dark">
            <Icon name="chevronRight" color="purple_dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
