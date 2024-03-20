import Image from 'next/image';

interface Card {
  name: string;
  role: string;
  image: string;
  onClick?: (cardData: Card) => void;
}

interface PersonCardProps {
  heading: string;
  cards: Card[];
  roleClassname?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  heading,
  cards,
  roleClassname
}) => (
  <div className="font-karla mx-[36px] my-[64px]">
    <div className="text-center mb-[24px]">
      <p className="font-bold text-[56px]">{heading}</p>
    </div>
    <div className="flex flex-row justify-center items-center gap-[24px]">
      {cards.map((item, index) => (
        <div
          key={index}
          role="button"
          onClick={() => item.onClick && item.onClick(item)}
          className="max-w-[372px] border-1 rounded-[12px] shadow-md"
        >
          <Image
            alt="blank-image"
            width={0}
            height={372}
            src={item.image}
            className="w-auto rounded-t-[12px]"
          />
          <div className="text-center mx-2 my-[32px]">
            <p className="text-[36px] font-bold">{item.name}</p>
            <p className={`${roleClassname} text-[24px] font-bold`}>
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PersonCard;
