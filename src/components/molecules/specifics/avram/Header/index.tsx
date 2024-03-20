'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import NavCard from './components/NavCard';
import NavDropdownMenus from './components/NavDropdownMenus';
import TriangleMarker from './components/TriangleMarker';

import DUMMY_DATA from './sample-data.json';

import styles from './styles.module.css';
import { NavbarMenuItem } from './types';

import AVRIST_LOGO from '@/assets/images/avrist-logo.svg';
import BlackOverlay from '@/components/atoms/BlackOverlay';
import Button from '@/components/atoms/Button/Button';
import HorizontalDivider from '@/components/atoms/Divider/HorizontalDivider';
import Icon from '@/components/atoms/Icon';

const Header = () => {
  const menus: NavbarMenuItem[] = DUMMY_DATA['menus']['navbar'];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <nav className="isolate sticky z-50 top-0">
      {/* White Section */}
      <div className="flex flex-row gap-2 justify-end items-center px-4 md:px-16 py-4 text-gray_black bg-white">
        <div className="flex flex-row gap-2 cursor-pointer">
          <Icon name="helpcircle" color="gray_black" />
          <p className="font-bold text-sm">Tanya Avram</p>
        </div>
        <HorizontalDivider color="text-gray_black" />
        <div className="flex flex-row gap-2 cursor-pointer">
          <Icon name="mail" color="gray_black" />
          <p className="font-bold text-sm">Subscribe</p>
        </div>
        <HorizontalDivider color="text-gray_black" />
        <div className="flex flex-row gap-2 cursor-pointer">
          <Icon name="search" />
        </div>
      </div>
      {/* Purple Section */}
      <div className="bg-gradient-to-b  from-purple_dark to-purple_light w-full m-0 text-white py-3 px-4 md:px-8 relative">
        <div className="flex justify-between items-center w-full max-w-[90rem] m-auto gap-8">
          <ul className="md:flex gap-8 items-center hidden">
            <Button.IconButton>
              <Icon name="homeIcon" color="white" width={20} isSquare />
            </Button.IconButton>
            {menus.map((item) => (
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
          <Image
            alt="Avrist Logo"
            src={AVRIST_LOGO}
          />
        </div>
        <NavDropdownMenus
          isVisible={isDropdownVisible}
          menus={menus}
          setVisibility={(newValue: boolean) => setIsDropdownVisible(newValue)}
        />
      </div>
      <BlackOverlay
        isVisible={isDropdownVisible}
        onClick={() => setIsDropdownVisible(false)}
      />
    </nav>
  );
};

export default Header;
