import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface PurposeCardProps {
  title: string;
  desc: string;
  icon: StaticImport;
  link: string;
  route: string;
}

const PurposeCard: React.FC<PurposeCardProps> = ({
  title,
  desc,
  icon,
  link,
  route
}) => (
  <div className="flex p-4 flex-col gap-4 items-center justify-center bg-white w-full border border-b-8 border-b-purple_dark rounded-xl text-center">
    <Image src={icon} alt="img" className="w-20" width={20} height={20} />
    <p className="font-karla text-card-title-mobile lg:text-card-title-desktop font-bold">
      {title}
    </p>
    <p
      className="text-card-subtitle-desktop line-clamp-3"
      dangerouslySetInnerHTML={{
        __html: desc
      }}
    />
    <Link
      href={route}
      className="font-semibold text-footer-link font-opensanspro text-purple_dark"
    >
      {link}
    </Link>
  </div>
);

export default PurposeCard;
