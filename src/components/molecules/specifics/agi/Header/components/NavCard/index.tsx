import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavbarMenuItemContent } from '../../types';
import TriangleMarker from '../TriangleMarker';
import NAV6IMAGE5 from '@/assets/images/agi/about/karir.svg';
import NAV6IMAGE4 from '@/assets/images/agi/about/laporan-penting.svg';
import NAV6IMAGE2 from '@/assets/images/agi/about/menagemen.svg';
import NAV6IMAGE3 from '@/assets/images/agi/about/penghargaan.svg';
import NAV6IMAGE1 from '@/assets/images/agi/about/sekilas-perusahaan.svg';
import NAV4IMAGE1 from '@/assets/images/agi/avrist-syariah/about.svg';

import NAV4IMAGE6 from '@/assets/images/agi/avrist-syariah/faq.svg';
import NAV4IMAGE5 from '@/assets/images/agi/avrist-syariah/klaim-layanan.svg';
import NAV4IMAGE2 from '@/assets/images/agi/avrist-syariah/manfaat-utama.svg';
import NAV4IMAGE3 from '@/assets/images/agi/avrist-syariah/pengawas-syariah.svg';
import NAV4IMAGE4 from '@/assets/images/agi/avrist-syariah/produk.svg';
import NAV5IMAGE1 from '@/assets/images/agi/dplk/about.svg';
import NAV5IMAGE6 from '@/assets/images/agi/dplk/faq.svg';
import NAV5IMAGE5 from '@/assets/images/agi/dplk/klaim-layanan.svg';
import NAV5IMAGE2 from '@/assets/images/agi/dplk/manfaat-utama.svg';
import NAV5IMAGE3 from '@/assets/images/agi/dplk/pengawas-dplk.svg';
import NAV5IMAGE4 from '@/assets/images/agi/dplk/produk.svg';
import NAV2IMAGE6 from '@/assets/images/agi/klaim-layanan/buku-panduan.svg';
import NAV2IMAGE1 from '@/assets/images/agi/klaim-layanan/informasi-klaim.svg';
import NAV2IMAGE4 from '@/assets/images/agi/klaim-layanan/informasi-nasabah.svg';
import NAV2IMAGE3 from '@/assets/images/agi/klaim-layanan/login-polis.svg';
import NAV2IMAGE2 from '@/assets/images/agi/klaim-layanan/panduan-pengajuan.svg';
import NAV2IMAGE7 from '@/assets/images/agi/klaim-layanan/performa-investasi.svg';
import NAV2IMAGE5 from '@/assets/images/agi/klaim-layanan/rumah-sakit-rekanan.svg';
import NAV1IMAGE1 from '@/assets/images/agi/produk/asuransi-jiwa.svg';
import NAV1IMAGE3 from '@/assets/images/agi/produk/asuransi-kecelakaan.svg';
import NAV1IMAGE2 from '@/assets/images/agi/produk/asuransi-kesehatan.svg';
import NAV1IMAGE4 from '@/assets/images/agi/produk/asuransi-tambahan.svg';
import NAV1IMAGE5 from '@/assets/images/agi/produk/employee-benefit.svg';

import NAV3IMAGE2 from '@/assets/images/agi/promo-berita/avrist-terkini.svg';
import NAV3IMAGE4 from '@/assets/images/agi/promo-berita/berita-pers.svg';
import NAV3IMAGE1 from '@/assets/images/agi/promo-berita/promo-terbaru.svg';
import NAV3IMAGE3 from '@/assets/images/agi/promo-berita/testimonial.svg';

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
  [NAV1IMAGE1, NAV1IMAGE2, NAV1IMAGE3, NAV1IMAGE4, NAV1IMAGE5],
  [
    NAV2IMAGE1,
    NAV2IMAGE2,
    NAV2IMAGE3,
    NAV2IMAGE4,
    NAV2IMAGE5,
    NAV2IMAGE6,
    NAV2IMAGE7
  ],
  [NAV3IMAGE1, NAV3IMAGE2, NAV3IMAGE3, NAV3IMAGE4],
  [NAV4IMAGE1, NAV4IMAGE2, NAV4IMAGE3, NAV4IMAGE4, NAV4IMAGE5, NAV4IMAGE6],
  [NAV5IMAGE1, NAV5IMAGE2, NAV5IMAGE3, NAV5IMAGE4, NAV5IMAGE5, NAV5IMAGE6],
  [NAV6IMAGE1, NAV6IMAGE2, NAV6IMAGE3, NAV6IMAGE4, NAV6IMAGE5]
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
              <h2 className="text-[2rem] font-bold text-gray_title font-karla">
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
                        <div className="flex flex-row gap-4 items-center hover:text-purple_dark font-semibold text-[1.25rem] font-opensans">
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
                              <div className="flex flex-row gap-2 items-center whitespace-nowrap hover:text-purple_dark font-semibold text-[1.25rem] font-opensans">
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
                        <div className="flex flex-row gap-4 items-center hover:text-purple_dark font-semibold text-[1.25rem] font-opensans">
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
