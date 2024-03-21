import Image, { StaticImageData } from 'next/image';

// import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import MediumTag from '@/components/atoms/Tag/MediumTag';

interface IDescriptionCategoryA {
  tags: string[];
  categoryTitle: string;
  productTitle: string;
  categorySymbol: StaticImageData;
}

const DescriptionCategoryA = ({
  tags,
  categoryTitle,
  productTitle,
  categorySymbol
}: IDescriptionCategoryA) => {
  return (
    <div className="flex flex-col gap-[24px] font-karla">
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-row gap-[12px]">
          {/* <Image width={36} height={36} alt="symbol" src={HeartSymbol} /> */}
          <Image width={36} height={36} alt="symbol" src={categorySymbol} />
          <p className="font-bold text-[24px] text-purple_dark">
            {categoryTitle}
          </p>
        </div>
        <p className="font-bold text-[36px] sm:text-[56px]">{productTitle}</p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="text-[24px] sm:text-[36px]">
          <span className="font-bold">Perlindungan maksimal</span> dan{' '}
          <span className="font-bold">investasi optimal</span> untuk jalani
          passion-mu.{' '}
        </p>
        <p className="font-light text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Eget nisl mi leo eu. Risus
          tincidunt in mi augue viverra faucibus. Enim ut sollicitudin et
          scelerisque in aliquet vel. Velit arcu donec sit justo in ultricies
          viverra adipiscing tristique. Cras viverra egestas interdum viverra
          consectetur nibh mollis magna lectus. Lobortis vitae amet nunc aliquam
          hendrerit tristique blandit feugiat. At aliquet tincidunt quis quis et
          ultrices vitae.
        </p>
        <div className="flex flex-row flex-wrap gap-[8px] font-opensans">
          {tags.map((item: string, index: number) => (
            <MediumTag key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCategoryA;
