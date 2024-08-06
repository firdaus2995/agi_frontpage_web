import { CardPurple } from './Card';
import Icon from '@/components/atoms/Icon';

type Props = {
  title: string;
  address?: string;
  workHour?: string;
  contact?: string;
  lat: number;
  lng: number;
  onChangeCenter: (lat: number, lng: number) => void;
};
export const CardAddress = (props: Props) => {
  const { title, address, contact, workHour, onChangeCenter, lat, lng } = props;
  return (
    <CardPurple>
      <div className="px-[24px] py-[24px]">
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[24px] leading-[30.17px] font-opensanspro">{title}</span>
          <div role='button' onClick={() => onChangeCenter(lat, lng)}>
            <Icon
              name="navigation"
              height={24}
              width={24}
              color="purple_verylight"
            />
          </div>
        </div>
        {address && (
          <div className="flex flex-row items mt-[24px] gap-2">
            <div className="w-[24px] h-[24px]">
              <Icon
                name="maps"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] leading-[25.2px]">{address}</span>
          </div>
        )}
        {workHour && (
          <div className="flex flex-row items mt-[12px] gap-2">
            <div className="w-[24px] h-[24px]">
              <Icon
                name="clock"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] leading-[25.2px]">{workHour}</span>
          </div>
        )}
        {contact && (
          <div className="flex flex-row items mt-[12px] gap-2">
            <div className="w-[24px] h-[24px]">
              <Icon
                name="phone"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] leading-[25.2px]">{contact}</span>
          </div>
        )}
      </div>
    </CardPurple>
  );
};
