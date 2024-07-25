import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EXPAND from '@/assets/images/common/+.svg';
// import SUBTRACT from '@/assets/images/common/-.svg';
import CHEVRONRIGHTPURPLE from '@/assets/images/common/chevron-right-purple.svg';
import { isContentNotEmpty } from '@/utils/helpers';

interface IAccordion {
  bgColor?: string;
  title?: string;
  description?: string;
  htmlDescription?: string;
  children?: React.ReactNode;
  isUrl?: boolean;
  url?: string;
}

interface IAccordionItem {
  children?: React.ReactNode;
  bgColor?: string;
}

const Accordion: React.FC<IAccordion> & {
  Item: React.FC<IAccordionItem>;
} = ({
  title,
  description,
  children,
  bgColor,
  isUrl,
  url,
  htmlDescription
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div
      className={`rounded-xl border border-gray_light p-[1.5rem] ${bgColor ?? 'bg-white'} flex flex-col gap-[12px] shadow-sm`}
    >
      <div className="flex flex-row justify-between items-center gap-[12px]">
        <h1 className="text-2xl font-bold font-opensanspro">{title}</h1>
        {isUrl ? (
          <Link href={url ?? ''} target="blank">
            <Image
              alt="toggle"
              src={EXPAND}
              className="cursor-pointer w-[1.5rem] h-[1.5rem]"
            />
          </Link>
        ) : (
          <Image
            alt="toggle"
            src={!expand ? CHEVRONRIGHTPURPLE : CHEVRONRIGHTPURPLE}
            onClick={() => {
              setExpand(!expand);
            }}
            className={`cursor-pointer w-[1.5rem] h-[1.5rem] ${!expand ? 'rotate-90' : '-rotate-90'}`}
          />
        )}
      </div>

      {expand && (
        <>
          {isContentNotEmpty(description ?? '-') && (
            <p className="text-md 2xl:text-[20px] sm:leading-[32px] font-normal font-opensans">
              {description}
            </p>
          )}
          {htmlDescription && isContentNotEmpty(htmlDescription ?? '-') && (
            <p
              className="text-xl list-disc"
              dangerouslySetInnerHTML={{
                __html: htmlDescription.replaceAll(
                  '<ul>',
                  "<ul class='list-disc list-inside font-opensans'>"
                )
              }}
            />
          )}
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
