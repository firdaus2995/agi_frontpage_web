import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

import { NavbarMenuItem } from '../../types';
import styles from './styles.module.css';

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
        bg-gradient-to-b from-purple_light to-purple_dark
        text-white text-sm p-4
        transition-all duration-300 ease-in-out
        ${isVisible ? styles['show-menu'] : styles['hide-menu']}
      `}
    >
      {menus.map((item, index) => (
        <Disclosure key={index}>
          <div>
            <Disclosure.Button className="top- font-medium w-full text-base text-start p-2 transition-all rounded hover:bg-white/20 outline-none focus:bg-white/20">
              {item.title}
            </Disclosure.Button>
            <Transition
              enter="transition-all"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="p-2 flex flex-row items-stretch gap-4 pl-2">
                {item.content.map((val, idx) => (
                  <div key={idx}>
                    <span
                      className="text-md cursor-pointer rounded font-bold outline-none p-2"
                    >
                      {val.title}
                    </span>
                    {val.subMenus.map((item, index) => (
                      <div key={index} className='mt-4'>
                        <span
                          onClick={() => setVisibility(false)}
                          className="text-xs cursor-pointer rounded transition-all hover:bg-white/20 outline-none p-2"
                        >
                          {item.title}
                        </span>
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
