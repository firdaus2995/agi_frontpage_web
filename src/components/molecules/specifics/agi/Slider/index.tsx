import React, { useCallback, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Button from '@/components/atoms/Button/Button';

type Props = {
  selected: string;
  slideItems: any[];
  onClickItem?: (item: any) => void;
  customLabel?: string;
};
const SliderComponent = ({
  selected,
  slideItems,
  onClickItem,
  customLabel
}: Props) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    centerPadding: '0px'
  };
  const sliderRef = useRef<Slider | null>(null);
  const handleClick = useCallback((item: any) => {
    onClickItem && onClickItem(item);
  }, []);

  useEffect(() => {
    const activeIndex = slideItems.findIndex((item) =>
      typeof item === 'object' && typeof customLabel === 'string'
        ? item[customLabel as string] === selected
        : item === selected
    );
    if (sliderRef.current && activeIndex !== -1) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [selected, slideItems]);

  return (
    <Slider
      ref={(slider) => {
        sliderRef.current = slider;
      }}
      {...sliderSettings}
    >
      {slideItems.map((tab) => {
        const activeTab =
          typeof tab === 'object' && typeof customLabel === 'string'
            ? tab[customLabel as string]
            : tab;
        return (
          <Button
            key={activeTab}
            title={activeTab}
            onClick={() => handleClick(tab)}
            customButtonClass={`w-[95%] whitespace-nowrap p-2 border border-purple_dark rounded-lg text-center ${selected === activeTab ? 'bg-purple_dark text-white' : 'text-purple_dark'} font-semibold`}
            customTextClass="text-[1rem] font-semibold leading-[1.48rem]"
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
