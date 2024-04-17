import React from 'react';
import Image from 'next/image';
import CREDIT_CARD from '@/assets/images/common/credit-card.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HEART_HAND from '@/assets/images/common/heart-hand.svg';

const ServiceCard = () => {
  return (
    <div className="mx-3 p-6 bg-gray_bglightgray rounded-xl grid grid-cols-3 gap-6">
      <Card image={HEART_HAND} title="Klaim & Layanan" onClick={() => {}} />
      <Card
        image={DOCUMENT_SEARCH}
        title="Informasi Polis"
        onClick={() => {}}
      />
      <Card image={CREDIT_CARD} title="Pembayaran Premi" onClick={() => {}} />
    </div>
  );
};

export default ServiceCard;

interface ICard {
  image: string;
  title: string;
  onClick: () => void;
}

const Card: React.FC<ICard> = ({ image, title, onClick }) => {
  return (
    <div className="flex flex-col cursor-pointer" onClick={onClick}>
      <div className="w-auto h-[220px] bg-white rounded-t-xl p-4 grow shrink-0 flex flex-col gap-12 items-center justify-center">
        <Image alt={title} src={image} />
        <p className="font-bold text-lg">{title}</p>
      </div>
      <div className="w-auto h-[10px] bg-purple_dark rounded-b-xl"></div>
    </div>
  );
};
