'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { EmailSubscribeModal } from '../Modal';
import NavCard from './components/NavCard';
import NavDropdownMenus from './components/NavDropdownMenus';

import DUMMY_DATA from './sample-data.json';

import styles from './styles.module.css';
import { NavbarMenuItem } from './types';
import AVRIST_LOGO from '@/assets/images/agi/logo.svg';
import VectorLogo from '@/assets/images/agi/vector-logo.svg';

import BlackOverlay from '@/components/atoms/BlackOverlay';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import SimpleContainer from '@/components/molecules/specifics/agi/Containers/Simple';
import { EXTERNAL_URL } from '@/utils/baseUrl';

const Header = () => {
  const menuRef: any = useRef(null);
  const listRef: any = useRef([]);
  const menus: NavbarMenuItem[] = DUMMY_DATA['menus']['navbar'];
  const [isDropdownHeaderVisible, setIsDropdownHeaderVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isShowEmailSubs, setIsShowEmailSubs] = useState(false);
  const [xPositions, setXPositions] = useState<number[]>([]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownHeaderVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const totalMiddlePositions: any[] | ((prevState: number[]) => number[]) =
      [];
    const windowWidth = window.innerWidth;

    listRef.current.forEach((ref: { getBoundingClientRect: () => any }) => {
      const rect = ref.getBoundingClientRect();
      let leftPosition = rect.x;
      const itemWidth = rect.width / 2.5;

      let adjustment = 0;
      if (windowWidth > 1536) {
        adjustment = (windowWidth - 1536) / 2;
      }

      leftPosition -= adjustment;

      const middlePositions = leftPosition + itemWidth;
      totalMiddlePositions.push(middlePositions);
    });

    setXPositions(totalMiddlePositions);
  }, []);

  return (
    <nav className="isolate sticky z-50 top-0">
      {/* White Section */}
      <SimpleContainer
        className="flex !flex-row justify-between items-center text-gray_black bg-white"
        paddingY="py-[1.25rem]"
      >
        <Menu>
          <div ref={menuRef}>
            <Menu.Button
              className="flex flex-row gap-2 items-center relative cursor-pointer w-auto"
              onClick={() => {
                setIsDropdownHeaderVisible(!isDropdownHeaderVisible);
              }}
            >
              <Image
                className="h-auto w-7"
                src={VectorLogo}
                alt="vector-logo"
              />
              <p className="text-top-heading-group font-bold text-black">Avrist Group</p>
              <span
                className={`transform transition-transform ${
                  isDropdownHeaderVisible ? 'rotate-180' : ''
                }`}
              >
                <Icon width={10} height={10} name="chevronDown" color="black" />
              </span>

              <Menu.Items
                className={`shadow-lg z-[99] rounded-md bg-white flex flex-col p-4 gap-4 w-[150%] h-auto absolute top-full left-0 text-start`}
              >
                <Menu.Item>
                  <Link
                    href={`${EXTERNAL_URL.avrasUrl}/produk/individu?tab=Asuransi+Jiwa`}
                    className="font-karla hover:text-purple_dark hover:font-medium"
                  >
                    Avrist Life Insurance
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/produk?tab=Kendaraan"
                    target="blank"
                    className="font-karla hover:text-purple_dark hover:font-medium"
                  >
                    Avrist General Insurance
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href={EXTERNAL_URL.avramUrl}
                    target="blank"
                    className="font-karla hover:text-purple_dark hover:font-medium"
                  >
                    Avrist Asset Management
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Menu.Button>
          </div>
        </Menu>

        <div className="flex flex-row justify-between gap-4 lg:divide-x-2  justify-center items-center">
          <Link
            href={`/tanya-avgen`}
            className="flex flex-row gap-2 cursor-pointer lg:flex xs:hidden"
          >
            <Icon name="helpcircle" color="gray_black" />
            <p className="font-bold text-top-heading-group">Tanya AvGen</p>
          </Link>
          <div
            className="flex flex-row gap-2 cursor-pointer lg:flex xs:hidden pl-3"
            onClick={() => setIsShowEmailSubs(true)}
          >
            <Icon name="mail" color="gray_black" />
            <p className="font-bold text-top-heading-group">Subscribe</p>
          </div>
          <div className="flex flex-row gap-2 cursor-pointer pl-3">
            <Link href={`/pencarian`}>
              <Icon name="search" />
            </Link>
          </div>
        </div>
      </SimpleContainer>

      {/* Purple Section */}
      <SimpleContainer
        className="bg-gradient-to-b from-purple_dark to-purple_light w-full m-0 text-white relative"
        paddingY="py-[1.25rem]"
      >
        <div className="flex justify-between items-center w-full gap-8">
          <ul className="lg:flex gap-[2.5rem] items-center hidden">
            <Link href={`/`}>
              <Button.IconButton>
                <Icon name="homeIcon" color="white" width={24} isSquare />
              </Button.IconButton>
            </Link>
            {menus.map((item, idx) => {
              return (
                <React.Fragment key={item.title}>
                  <li
                    className={`font-opensans cursor-pointer font-semibold text-list-menu-header-desktop relative ${styles['nav-list-item']}`}
                    ref={(el) => (listRef.current[idx] = el)}
                  >
                    {item.title}{' '}
                  </li>
                  <NavCard
                    customClass={`${styles['nav-card-animation']} absolute cursor-default left-0 duration-300`}
                    content={item.content}
                    title={item.title}
                    skipUrl={item.skipUrl}
                    indexData={idx}
                    xPosition={xPositions[idx]}
                  />
                </React.Fragment>
              );
            })}
          </ul>
          <Button.IconButton
            customButtonClass="inline-block lg:hidden"
            onClick={() => setIsDropdownVisible((prevState) => !prevState)}
          >
            <Icon name="hamburgerMenuIcon" color="white" />
          </Button.IconButton>
          <Link href={`/`}>
            <Image alt="Avrist Logo" src={AVRIST_LOGO} width={94} height={48} />
          </Link>
        </div>
        <NavDropdownMenus
          isVisible={isDropdownVisible}
          menus={menus}
          setVisibility={(newValue: boolean) => setIsDropdownVisible(newValue)}
        />
      </SimpleContainer>

      <BlackOverlay
        isVisible={isDropdownVisible}
        onClick={() => setIsDropdownVisible(false)}
      />
      <EmailSubscribeModal
        show={isShowEmailSubs}
        onClose={() => setIsShowEmailSubs(false)}
      />
    </nav>
  );
};

export default Header;
