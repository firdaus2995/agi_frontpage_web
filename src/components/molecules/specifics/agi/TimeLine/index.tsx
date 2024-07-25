import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import TitleContainer from '../Containers/Title';
import NODE_SELECTED from '@/assets/images/node-selected.svg';
import NODE from '@/assets/images/node.svg';

interface IDataHistory {
  year: string;
  data: {
    title: string;
    desc: string;
  }[];
}

interface IFooterInformation {
  data: IDataHistory[];
  title: string;
}

const Timeline = ({ data, title }: IFooterInformation) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const contentData = data.filter((value) => value.year !== '');
    setSelectedItem(contentData[contentData.length - 1].year);
  }, []);

  const settings = {
    initialSlide: data.filter((value) => value.year !== '').length - 1,
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 500
  };

  const settingsMobile = {
    initialSlide: data.filter((value) => value.year !== '').length - 1,
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 500
  };

  return (
    <ol className="items-center flex flex-col">
      <TitleContainer className="my-[5rem]">
        <p className="font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop font-bold text-purple_dark">
          {title}
        </p>
      </TitleContainer>

      <div className="flex flex-row w-full h-full items-center justify-center pb-1">
        <div className="w-full relative overflow-hidden xs:hidden sm:block">
          <div className="w-full absolute bg-purple_verylight h-[2px] mt-[1.375rem]" />
          <Slider {...settings}>
            {data.map(
              (val, idx) =>
                val.year !== '' && (
                  <div
                    key={idx}
                    onFocus={() => handleItemClick(val.year)}
                    className="pb-1"
                  >
                    <span className="flex flex-col items-center justify-center h-full gap-[1.5rem]">
                      <span className="w-[3rem] h-[3rem] flex items-center justify-center">
                        {selectedItem === val.year ? (
                          <Image
                            alt="timeline"
                            src={NODE_SELECTED}
                            width={48}
                            height={48}
                          />
                        ) : (
                          <div
                            onClick={() => handleItemClick(val.year)}
                            className="cursor-pointer"
                          >
                            <Image
                              alt="timeline"
                              src={NODE}
                              width={16}
                              height={16}
                            />
                          </div>
                        )}
                      </span>
                      <button
                        className={`${selectedItem === val.year ? 'bg-purple_dark text-white' : 'bg-white border border-purple_dark text-purple_dark'} xs:p-[0.5rem] md:px-[2.5rem] md:py-[0.75rem] md:text-[1.25rem] rounded-lg`}
                      >
                        {val.year === '' ? '-' : val.year}
                      </button>
                    </span>
                  </div>
                )
            )}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Slider>
        </div>

        <div className="w-full relative overflow-hidden sm:hidden">
          <div className="w-full absolute bg-purple_verylight h-[2px] mt-[1.375rem]" />
          <Slider {...settingsMobile}>
            {data.map(
              (val, idx) =>
                val.year !== '' && (
                  <div
                    key={idx}
                    onFocus={() => handleItemClick(val.year)}
                    className="pb-1"
                  >
                    <span className="flex flex-col items-center justify-center h-full gap-[1.5rem]">
                      <span className="w-[3rem] h-[3rem] flex items-center justify-center">
                        {selectedItem === val.year ? (
                          <Image
                            alt="timeline"
                            src={NODE_SELECTED}
                            width={48}
                            height={48}
                          />
                        ) : (
                          <Image
                            alt="timeline"
                            src={NODE}
                            width={16}
                            height={16}
                          />
                        )}
                      </span>
                      <button
                        className={`${selectedItem === val.year ? 'bg-purple_dark text-white' : 'bg-white border border-purple_dark text-purple_dark'} xs:p-[0.5rem] md:px-[2.5rem] md:py-[0.75rem] md:text-[1.25rem] rounded-lg`}
                      >
                        {val.year === '' ? '-' : val.year}
                      </button>
                    </span>
                  </div>
                )
            )}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Slider>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="mt-3 w-full flex flex-col gap-8 rounded-xl p-5 shadow-xl">
          {data
            .filter((val) => val.year === selectedItem)
            .map((filteredVal) =>
              filteredVal.data.map((val, idx) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <h3 className="text-2xl font-bold text-[#1A141F] text-left font-karla">
                    {val.title}
                  </h3>
                  <p
                    className="text-base font-normal text-[#1A141F] font-opensans"
                    dangerouslySetInnerHTML={{
                      __html: val.desc
                    }}
                  />
                </div>
              ))
            )}
        </div>
      </div>
    </ol>
  );
};

export default Timeline;
