import Image from 'next/image';

interface Card {
  cardIcon: string;
  cardTitle?: string;
  cardBody: string;
  cardButtonText?: string;
}

interface InformationCardProps {
  heading: string;
  subHeading?: string;
  cards: Card[];
  cardClassname?: string;
  cardButtonClassname?: string;
  cardButtonTextClassname?: string;
}

const InformationCard: React.FC<InformationCardProps> = ({
  heading,
  subHeading,
  cards,
  cardClassname,
  cardButtonClassname,
  cardButtonTextClassname
}) => (
  <div className="font-karla my-[64px] mx-auto">
    <div className="text-center mb-[24px]">
      <p className="font-bold text-[56px]">{heading}</p>
      {subHeading && <p className="text-[36px]">{subHeading}</p>}
    </div>
    <div className="grid grid-cols-3 justify-center items-center gap-[24px]">
      {cards.map((item, index) => (
        <div
          key={index}
          className={`${cardClassname} flex flex-col justify-between max-w-[370px] min-h-[270px] h-full border-1 rounded-[12px] border-b-[8px] rounded-b-[12px] bg-white`}
        >
          <div className="flex w-full justify-center mt-[24px]">
            <Image
              alt="blank-image"
              width={0}
              height={100}
              src={item.cardIcon}
              className="w-auto"
            />
          </div>
          <div className="text-center mx-[12px] my-[32px]">
            {item.cardTitle && (
              <p className="text-[32px] font-bold font-karla">
                {item.cardTitle}
              </p>
            )}
            <p className="text-[16px]">{item.cardBody}</p>
          </div>
          <div className="text-center">
            {item.cardButtonText && (
              <div className="h-full mb-[24px]">
                <button
                  className={`${cardButtonClassname} rounded-[8px] px-[20px] py-[8px] w-3/4`}
                >
                  <p
                    className={`${cardButtonTextClassname} font-semibold text-[16px]`}
                  >
                    {item.cardButtonText}
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default InformationCard;
