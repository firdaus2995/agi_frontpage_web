import React, { useState } from 'react';
import Image from 'next/image';
import EXPAND from '@/assets/images/common/+.svg';
import SUBTRACT from '@/assets/images/common/-.svg';

interface IAccordion {
  bgColor?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

interface IAccordionItem {
  children?: React.ReactNode;
  bgColor?: string;
}

const Accordion: React.FC<IAccordion> & {
  Item: React.FC<IAccordionItem>;
} = ({ title, description, children, bgColor }) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div
      className={`rounded-xl border border-gray_light p-4 ${bgColor ?? 'bg-white'} flex flex-col gap-4 shadow-sm`}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl 2xl:text-2xl font-bold">{title}</h1>
        <Image
          alt="toggle"
          src={!expand ? EXPAND : SUBTRACT}
          onClick={() => {
            setExpand(!expand);
          }}
          className="cursor-pointer w-[24px] h-[24px]"
        />
      </div>

      {expand && (
        <>
          {description && <p className="text-md 2xl:text-xl">{description}</p>}
          {children}
        </>
      )}
    </div>
  );
};

const AccordionItem: React.FC<IAccordionItem> = ({ children, bgColor }) => {
  return <div className={`flex flex-col gap-2 ${bgColor}`}>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;
