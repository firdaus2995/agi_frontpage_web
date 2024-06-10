import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Slider from 'react-slick';

interface IButtonMenu {
  buttonList: string[];
  path?: string;
}

const ButtonMenu: React.FC<IButtonMenu> = ({ buttonList, path }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get('tab') ?? '';
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    const activeIndex = buttonList.findIndex((button) => button === params);
    if (sliderRef.current && activeIndex !== -1) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [params, buttonList]);

  return (
    <div className="xs:px-[2rem] md:px-[8.5rem]">
      <div className="w-full xs:hidden md:block">
        <div className="flex sm:w-full xs:w-[90%] md:flex-row xs:flex-col gap-4 rounded-lg gap-[0.75rem] flex-wrap">
          {buttonList.map((i) => (
            <Link
              href={{
                pathname: path,
                query: { tab: i }
              }}
              scroll={false}
              key={i}
              className={`grow flex p-2 items-center justify-center rounded-lg border border-purple_dark text-[1rem] font-semibold ${params === i ? 'text-white bg-purple_dark' : 'text-purple_dark bg-white'}`}
            >
              {i}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-[100%] md:hidden">
        <div>
          <Slider
            {...sliderSettings}
            ref={(slider) => {
              sliderRef.current = slider;
            }}
          >
            {buttonList.map((i, idx) => (
              <Link
                key={idx}
                href={{
                  pathname: path,
                  query: { tab: i }
                }}
              >
                <div
                  role="button"
                  className={`mx-[10px] p-2 border border-purple_dark rounded-lg text-center ${params === i ? 'bg-purple_dark text-white' : 'text-purple_dark'} font-semibold line-clamp-1`}
                >
                  {i}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;
