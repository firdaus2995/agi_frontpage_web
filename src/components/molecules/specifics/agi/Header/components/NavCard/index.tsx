import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavbarMenuItemContent } from '../../types';
import TriangleMarker from '../TriangleMarker';
import NAV1IMAGE1 from '@/assets/images/agi/component/header/nav-1-img-1.svg';
import NAV1IMAGE2 from '@/assets/images/agi/component/header/nav-1-img-2.svg';
import NAV1IMAGE3 from '@/assets/images/agi/component/header/nav-1-img-3.svg';
import NAV2IMAGE1 from '@/assets/images/agi/component/header/nav-2-img-1.svg';
import NAV2IMAGE2 from '@/assets/images/agi/component/header/nav-2-img-2.svg';
import NAV2IMAGE3 from '@/assets/images/agi/component/header/nav-2-img-3.svg';
import NAV2IMAGE4 from '@/assets/images/agi/component/header/nav-2-img-4.svg';
import NAV2IMAGE5 from '@/assets/images/agi/component/header/nav-2-img-5.svg';
import NAV2IMAGE6 from '@/assets/images/agi/component/header/nav-2-img-6.svg';
import NAV2IMAGE7 from '@/assets/images/agi/component/header/nav-2-img-7.svg';
import NAV2IMAGE8 from '@/assets/images/agi/component/header/nav-2-img-8.svg';
import NAV2IMAGE9 from '@/assets/images/agi/component/header/nav-2-img-9.svg';
import NAV3IMAGE1 from '@/assets/images/agi/component/header/nav-3-img-1.svg';
import NAV3IMAGE2 from '@/assets/images/agi/component/header/nav-3-img-2.svg';
import NAV3IMAGE3 from '@/assets/images/agi/component/header/nav-3-img-3.svg';
import NAV3IMAGE4 from '@/assets/images/agi/component/header/nav-3-img-4.svg';
import NAV3IMAGE5 from '@/assets/images/agi/component/header/nav-3-img-5.svg';
import NAV3IMAGE6 from '@/assets/images/agi/component/header/nav-3-img-6.svg';
import NAV4IMAGE1 from '@/assets/images/agi/component/header/nav-4-img-1.svg';
import NAV4IMAGE2 from '@/assets/images/agi/component/header/nav-4-img-2.svg';
import NAV4IMAGE3 from '@/assets/images/agi/component/header/nav-4-img-3.svg';
import NAV5IMAGE1 from '@/assets/images/agi/component/header/nav-5-img-1.svg';
import NAV5IMAGE2 from '@/assets/images/agi/component/header/nav-5-img-2.svg';

import Icon from '@/components/atoms/Icon';
import { camelToKebabCase, convertToKebabCase } from '@/utils/helpers';

type NavCardProps = {
  content: NavbarMenuItemContent[];
  customClass?: string;
  title: string;
  indexData: number;
  skipUrl?: boolean;
  xPosition?: number;
};

const ICON_MAPPING = [
  [NAV1IMAGE1, NAV1IMAGE2, NAV1IMAGE3],
  [
    NAV2IMAGE1,
    NAV2IMAGE2,
    NAV2IMAGE3,
    NAV2IMAGE4,
    NAV2IMAGE5,
    NAV2IMAGE6,
    NAV2IMAGE7,
    NAV2IMAGE8,
    NAV2IMAGE9
  ],
  [NAV3IMAGE1, NAV3IMAGE2, NAV3IMAGE3, NAV3IMAGE4, NAV3IMAGE5, NAV3IMAGE6],
  [NAV4IMAGE1, NAV4IMAGE2, NAV4IMAGE3],
  [NAV5IMAGE1, NAV5IMAGE2]
];

const NavCard: React.FC<NavCardProps> = ({
  content,
  customClass,
  indexData,
  title,
  skipUrl,
  xPosition
}) => {
  // This component has become a client component even when there's not a "use client" withint this file.
  // This is because this component has been imported into a Header component that is a client component.
  // Therefore, the usage of useState in this component is justified
  const [shouldForceHideBanner, setShouldForceHideBanner] = useState(false);
  const [openedMenus, setOpenedMenus] = useState('');

  return (
    <div
      className={`${shouldForceHideBanner ? '!opacity-0 !invisible' : ''} font-karla w-full bg-white rounded-b-[72px] gap-4 shadow-xl text-gray_body ${customClass ?? ''}`}
    >
      <div className="w-full flex flex-row py-[3.125rem] justify-between px-[8.5rem] divide-x-2 m-auto">
        {content.map((val, idx) => (
          <div
            key={idx}
            className={`w-full flex flex-col ${idx === 0 ? 'pr-[2.25rem]' : 'pl-[2.25rem]'}`}
          >
            {xPosition ? (
              <div className="absolute top-[-16px]" style={{ left: xPosition }}>
                <TriangleMarker />
              </div>
            ) : null}

            <div className="flex flex-col gap-6">
              <h2 className="text-menu-header-title-desktop font-bold text-gray_title font-karla">
                {val.title}
              </h2>
              <div
                className={`${val.title === '' && 'mt-10'} flex flex-col justify-between gap-6 w-full cursor-pointer`}
              >
                {val?.subMenus?.map((item, index) =>
                  item?.listMenu ? (
                    <React.Fragment key={index}>
                      <div
                        className={`flex flex-row justify-between`}
                        onClick={() => {
                          if (openedMenus === item.title) {
                            setOpenedMenus('');
                          } else {
                            setOpenedMenus(item.title);
                          }
                        }}
                      >
                        <div className="flex flex-row gap-4 items-center hover:text-purple_dark font-semibold text-menu-header-subtitle font-opensans">
                          <Image
                            className="w-[2.25rem] h-[2.25rem]"
                            src={ICON_MAPPING[indexData][item.icon]}
                            alt={item.title}
                          />
                          {item.title}
                        </div>
                        <span
                          className={`mt-[3px] mr-1 ${openedMenus === item.title && 'rotate-180 '}`}
                        >
                          <Icon
                            name="chevronDown"
                            color="purple_dark"
                            width={12}
                          />
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        {openedMenus === item.title &&
                          item.listMenu.map((value, idx) => (
                            <Link
                              href={{
                                pathname: `${!skipUrl ? `/${convertToKebabCase(title)}` : ''}/${camelToKebabCase(val.title !== '' ? val.title : content[0].title)}`,
                                query: { tab: item.title, category: value }
                              }}
                              key={idx}
                              className={`flex flex-row justify-between`}
                              onClick={() => {
                                setOpenedMenus('');
                                setShouldForceHideBanner(true);
                                setTimeout(() => {
                                  setShouldForceHideBanner(false);
                                }, 700);
                              }}
                            >
                              <div className="flex flex-row gap-2 items-center whitespace-nowrap hover:text-purple_dark font-semibold text-menu-header-subtitle font-opensans">
                                {value}
                              </div>
                            </Link>
                          ))}
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={index}>
                      <Link
                        href={{
                          pathname: `${!skipUrl ? `/${convertToKebabCase(title)}` : ''}/${camelToKebabCase(val.title !== '' ? val.title : content[0].title)}`,
                          query: { tab: item.title }
                        }}
                        target={item.customUrl ? '_blank' : '_self'}
                        className={`flex flex-row justify-between`}
                        onClick={() => {
                          setShouldForceHideBanner(true);
                          setTimeout(() => {
                            setShouldForceHideBanner(false);
                          }, 700);
                        }}
                      >
                        <div className="flex flex-row gap-4 items-center hover:text-purple_dark font-semibold text-menu-header-subtitle font-opensans">
                          <Image
                            className="w-[2.25rem] h-[2.25rem]"
                            src={ICON_MAPPING[indexData][item.icon]}
                            alt={item.title}
                          />
                          {item.title}
                        </div>
                        <span className="mt-[3px]">
                          <Icon name="chevronRight" color="purple_dark" />
                        </span>
                      </Link>
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavCard;
