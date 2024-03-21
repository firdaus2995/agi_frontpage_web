import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MIN from '@/assets/images/avrast/component/panduan-polis/min.svg';
import PLUS from '@/assets/images/avrast/component/panduan-polis/plus.svg';
import CHEVRONRIGHTPURPLE from '@/assets/images/avrast/component/product-section/chevron-right-purple.svg';

type CardMenuLinkProps = {
  desc: string;
  href?: string;
};

export const CardMenuLink = (props: CardMenuLinkProps) => {
  const { desc, href } = props;
  return (
    <Link
      href={href ?? '#'}
      className="w-full p-4 bg-purple_light_bg border-2 rounded-lg flex flex-row justify-between font-black"
    >
      {desc}
      <Image src={CHEVRONRIGHTPURPLE} alt="chevron-right" className="w-4" />
    </Link>
  );
};
type CardMenuDownloadProps = {
  desc: string;
  onDownload?: () => void;
};

export const CardMenuDownload = (props: CardMenuDownloadProps) => {
  const { desc, onDownload } = props;
  return (
    <div
      role="button"
      onClick={() => {}}
      className="w-full p-4 items-center bg-white border-2 rounded-lg flex flex-row justify-between font-black"
    >
      <span>
        {desc}{' '}
        <span className="font-opensans font-semibold text-[14px] text-purple_dark/80 bg-purple_dark/5 rounded-sm px-[8px] py-[4px] ml-[12px]">
          PDF
        </span>
      </span>
      <button
        className="font-opensans font-semibold text-[16px] bg-purple_dark text-white w-[136px] h-[40px] rounded-md"
        onClick={onDownload}
      >
        Unduh
      </button>
    </div>
  );
};

type CardMenuChildrenProps = {
  desc: string;
  children: React.ReactNode;
};

export const CardMenuChildren: React.FC<CardMenuChildrenProps> = (props) => {
  const { desc, children } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full p-4 bg-purple_light_bg border-2 rounded-lg flex flex-col font-black">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {desc}
        <Image src={open ? MIN : PLUS} alt="chevron-right" className="w-4 " />
      </div>
      {open ? children : null}
    </div>
  );
};
