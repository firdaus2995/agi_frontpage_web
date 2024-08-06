import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';

import { EmailSubscribeModal } from '../../../Modal';
import { NavbarMenuItem } from '../../types';
import styles from './styles.module.css';
import Icon from '@/components/atoms/Icon';

import { camelToKebabCase, convertToKebabCase } from '@/utils/helpers';

type NavDropdownMenusProps = {
  isVisible: boolean;
  menus: NavbarMenuItem[];
  setVisibility: (newValue: boolean) => void;
};

const NavDropdownMenus: React.FC<NavDropdownMenusProps> = ({
  isVisible,
  menus,
  setVisibility
}) => {
  const [isShowEmailSubs, setIsShowEmailSubs] = useState(false);
  return (
    <div
      className={`
        absolute top-full left-0 right-0 z-50
        flex md:hidden flex-col items-stretchgap-4 
        bg-[white]
        text-white text-sm p-4
        transition-all duration-300 ease-in-out
        max-h-[50vh] overflow-y-auto
        ${isVisible ? styles['show-menu'] : styles['hide-menu']}
      `}
    >
      {menus.map((item, index) => (
        <Disclosure key={index}>
          <div>
            <div className="flex w-full">
              <Disclosure.Button className="top- text-[black] font-medium w-full text-list-menu-header-mobile text-start p-2 transition-all rounded hover:bg-white/20 outline-none focus:bg-white/20">
                {item.title}
              </Disclosure.Button>
              <Disclosure.Button>
                <Transition
                  show={true}
                  enter="transition-all"
                  enterFrom="rotate-0 opacity-100"
                  enterTo="rotate-270 opacity-0"
                  leaveFrom="rotate-0 opacity-100"
                  leaveTo="rotate-270 opacity-0"
                >
                  <div className="px-2">
                    <Icon name="chevronRight" color="purple_dark" />
                  </div>
                </Transition>
              </Disclosure.Button>
            </div>
            <Transition
              enter="transition-all"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="p-2 text-[black] items-stretch gap-4 pl-2">
                {item.content.map((val, idx) => (
                  <div key={idx} className="pt-4">
                    <span className="text-menu-header-title cursor-pointer rounded font-bold outline-none p-2">
                      {val.title}
                    </span>
                    {val.subMenus.map((el, index) => (
                      <div key={index} className="mt-4">
                        <Link
                          // href={{
                          //   pathname: `/${convertToKebabCase(item.title)}/${!item.skipUrl ? camelToKebabCase(val.title) : ''}`,
                          //   query: { tab: el.title }
                          // }}
                          href={{
                            pathname: `${!item.skipUrl ? `/${convertToKebabCase(item.title)}` : ''}/${camelToKebabCase(val.title !== '' ? val.title : item.content[0].title)}`,
                            query: { tab: el.title }
                          }}
                          onClick={() => setVisibility(false)}
                          className="text-menu-header-subtitle cursor-pointer rounded transition-all hover:bg-white/20 outline-none p-2"
                        >
                          {el.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </div>
        </Disclosure>
      ))}
      <div className="grid grid-cols-2 gap-[20px] mt-[17.5px] border-t-2 pt-[2.25rem]">
        <Link
          href={`/tanya-avgen`}
          className="flex flex-row gap-2 cursor-pointer ml-2 ml-2"
          onClick={() => setVisibility(false)}
        >
          <Icon name="helpcircle" color="gray_black" />
          <p className="font-bold text-gray_black text-[16px] leading-[19.6px]">Tanya Avgen</p>
        </Link>
        <Link
          href={'https://shop.avrist.com/'}
          target="blank"
          className="flex flex-row gap-2 cursor-pointer ml-2"
          onClick={() => setVisibility(false)}
        >
          <Icon name="shoppingCart" color="gray_black" />
          <p className="font-bold text-gray_black text-[16px] leading-[19.6px]">Beli Online</p>
        </Link>
        <a
          href={'https://my.avrist.com/welcome'}
          target="_blank"
          className="flex flex-row gap-2 cursor-pointer ml-2"
          onClick={() => setVisibility(false)}
        >
          <Icon name="lightBulb" color="gray_black" />
          <p className="font-bold text-gray_black text-[16px] leading-[19.6px]">Avrist Solution</p>
        </a>
        <div
          className="flex flex-row gap-2 cursor-pointer ml-2"
          onClick={() => {
            setIsShowEmailSubs(true);
            setVisibility(false);
          }}
        >
          <Icon name="mail" color="gray_black" />
          <p className="font-bold text-gray_black text-[16px] leading-[19.6px]">Subscribe</p>
        </div>
      </div>
      <EmailSubscribeModal
        show={isShowEmailSubs}
        onClose={() => setIsShowEmailSubs(false)}
      />
    </div>
  );
};

export default NavDropdownMenus;
