import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';

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
              <Disclosure.Button className="top- text-[black] font-medium w-full text-base text-start p-2 transition-all rounded hover:bg-white/20 outline-none focus:bg-white/20">
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
                    <span className="text-md cursor-pointer rounded font-bold outline-none p-2">
                      {val.title}
                    </span>
                    {val.subMenus.map((el, index) => (
                      <div key={index} className="mt-4">
                        <Link
                          href={{
                            pathname: `/${convertToKebabCase(item.title)}/${!item.skipUrl ? camelToKebabCase(val.title) : ''}`,
                            query: { tab: el.title }
                          }}
                          onClick={() => setVisibility(false)}
                          target={
                            index === 2 || el.icon === 2 ? '_blank' : '_self'
                          }
                          className="text-xs cursor-pointer rounded transition-all hover:bg-white/20 outline-none p-2"
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
    </div>
  );
};

export default NavDropdownMenus;
