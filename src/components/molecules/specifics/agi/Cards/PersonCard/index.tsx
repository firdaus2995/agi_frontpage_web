'use client';
import Image from 'next/image';
import TitleContainer from '@/components/molecules/specifics/agi/Containers/Title';

interface Card {
  name: string;
  role: string;
  image: string;
  desc?: string;
  onClick?: (cardData: Card) => void;
}

interface PersonCardProps {
  heading: string;
  cards: Card[];
  roleClassname?: string;
  idTags?: string;
  headingClassname?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  heading,
  cards,
  roleClassname,
  idTags,
  headingClassname
}) => {
  const validCards = cards.filter(
    (item) => item.name !== '-' && item.role !== '-'
  );

  return (
    <div className="font-karla" id={idTags}>
      {validCards.length > 0 && (
        <TitleContainer
          className={`font-karla font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop text-center ${headingClassname ?? 'text-purple_dark'}`}
        >
          {heading}
        </TitleContainer>
      )}
      <div className="flex flex-row flex-wrap justify-center items-center gap-[1.5rem] mt-[1rem]">
        {validCards.map((item, index) => (
          <div
            key={index}
            role="button"
            onClick={() => item.onClick && item.onClick(item)}
            className="lg:w-[23.25rem] xs:w-[8.438rem] xs:h-[11.688rem] lg:h-auto border-1 rounded-[12px] shadow-md"
          >
            <Image
              alt="blank-image"
              width={0}
              height={372}
              src={item.image}
              className="rounded-t-[12px] h-[23.25rem] w-full object-cover lg:block xs:hidden"
            />
            <Image
              alt="blank-image"
              width={0}
              height={142}
              src={item.image}
              className="rounded-t-[12px] h-[8.875rem] w-full object-cover block lg:hidden"
            />
            <div className="text-center lg:m-[2rem] font-bold font-karla lg:h-[150px] xs:h-[45px] flex flex-col items-center justify-center lg:justify-between grow">
              <p className="xs:text-[0.813rem] lg:text-[2.25rem] lg:line-clamp-2 xs:line-clamp-1 xs:leading-4 lg:leading-tight">
                {item.name}
              </p>
              <p
                className={`${roleClassname} xs:text-[0.625rem] lg:text-[1.5rem]`}
              >
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonCard;
