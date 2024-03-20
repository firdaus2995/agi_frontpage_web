'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EmailSubscribeModal } from '../Modal';
import NavCard from './components/NavCard';
import NavDropdownMenus from './components/NavDropdownMenus';
import TriangleMarker from './components/TriangleMarker';

import DUMMY_DATA from './sample-data.json';

import styles from './styles.module.css';
import { NavbarMenuItem } from './types';
import AVRIST_LOGO from '@/assets/images/avrast/logo.svg';
import VectorLogo from '@/assets/images/avrast/vector-logo.svg';

import BlackOverlay from '@/components/atoms/BlackOverlay';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';

const Header = () => {
  const pathname = usePathname();
  const menus: NavbarMenuItem[] = DUMMY_DATA['menus']['navbar'];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isShowEmailSubs, setIsShowEmailSubs] = useState(false);

  return (
    <nav className="isolate sticky z-50 top-0">
      {/* White Section */}
      <div className="flex flex-row justify-between items-center px-4 md:px-16 py-4 text-gray_black bg-white">
        <div className="flex flex-row gap-2 items-center">
          <Image className="h-auto w-7" src={VectorLogo} alt="vector-logo" />
          <p className="text-md font-bold text-black">Avrist Group</p>
          <Icon width={10} height={10} name="chevronDown" color="black" />
        </div>
        <div className="flex flex-row gap-4 flex flex-row gap-4 md:divide-x-2">
          <Link
            href={`/avrast/tanya-avrista`}
            className="flex flex-row gap-2 cursor-pointer md:flex xs:hidden"
          >
            <Icon name="helpcircle" color="gray_black" />
            <p className="font-bold text-sm">Tanya Avrista</p>
          </Link>
          <div className="flex flex-row gap-2 cursor-pointer md:flex xs:hidden pl-2">
            <Icon name="shoppingCart" color="gray_black" />
            <p className="font-bold text-sm">Beli Online</p>
          </div>
          <div className="flex flex-row gap-2 cursor-pointer md:flex xs:hidden pl-2">
            <Icon name="lightBulb" color="gray_black" />
            <p className="font-bold text-sm">Avrist Solution</p>
          </div>
          <div
            className="flex flex-row gap-2 cursor-pointer md:flex xs:hidden pl-2"
            onClick={() => setIsShowEmailSubs(true)}
          >
            <Icon name="mail" color="gray_black" />
            <p className="font-bold text-sm">Subscribe</p>
          </div>
          <div className="flex flex-row gap-2 cursor-pointer pl-2">
            <Link href={`/avrast/pencarian`}>
              <Icon name="search" />
            </Link>
          </div>
        </div>
      </div>

      {/* Purple Section */}

      {pathname !== '/avrast' ? (
        <div className="bg-gradient-to-b  from-purple_dark to-purple_light w-full m-0 text-white py-3 px-4 md:px-8 relative">
          <div className="flex justify-between items-center w-full max-w-[90rem] m-auto gap-8">
            <ul className="md:flex gap-8 items-center hidden">
              <Button.IconButton>
                <Icon name="homeIcon" color="white" width={20} isSquare />
              </Button.IconButton>
              {menus.map((item, idx) => (
                <React.Fragment key={item.title}>
                  <li
                    className={`font-medium cursor-pointer relative ${styles['nav-list-item']}`}
                  >
                    {item.title}
                    <TriangleMarker
                      customClass={`absolute bottom-0 left-1/2 -translate-x-1/2 top-[33px] cursor-default ${styles['nav-transition']}`}
                    />
                  </li>
                  <NavCard
                    customClass={`${styles['nav-card-animation']} absolute cursor-default left-0 duration-300`}
                    content={item.content}
                    title={item.title}
                    indexData={idx}
                  />
                </React.Fragment>
              ))}
            </ul>
            <Button.IconButton
              customButtonClass="inline-block md:hidden"
              onClick={() => setIsDropdownVisible((prevState) => !prevState)}
            >
              <Icon name="hamburgerMenuIcon" color="white" />
            </Button.IconButton>
            <Image alt="Avrist Logo" src={AVRIST_LOGO} />
          </div>
          <NavDropdownMenus
            isVisible={isDropdownVisible}
            menus={menus}
            setVisibility={(newValue: boolean) =>
              setIsDropdownVisible(newValue)
            }
          />
        </div>
      ) : (
        <></>
      )}

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
