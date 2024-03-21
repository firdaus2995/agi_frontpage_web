'use client';

import Image from 'next/image';

interface IFooterCards {
  cards: { title: string; icon: string }[];
}

const FooterCards = ({ cards }: IFooterCards) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center justify-center bg-purple_superlight px-[136px] pb-[72px]">
      {cards.map((item: { title: string; icon: string }, index: number) => (
        <div
          key={index}
          className="h-full flex flex-col items-center justify-center px-[20px] py-[24px] gap-[24px] border border-gray_light rounded-[12px]"
        >
          <Image alt={index.toString()} src={item.icon} />
          <p className="text-center font-bold text-[24px]">
            {item.title}
            <br />
            <span className="text-purple_dark">Lebih Lanjut</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterCards;
