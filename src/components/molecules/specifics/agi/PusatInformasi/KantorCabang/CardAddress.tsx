import { CardPurple } from './Card';
import Icon from '@/components/atoms/Icon';

type Props = {
  title: string;
  address?: string;
  workHour?: string;
  contact?: string;
  withNavigation?: boolean;
};
export const CardAddress = (props: Props) => {
  const { title, address, contact, workHour, withNavigation } = props;
  return (
    <CardPurple>
      <div className="p-[24px] pb-[36px]">
        <div className="flex flex-row justify-between items-center">
          <span className="font-opensanspro font-bold text-[24px]">{title}</span>
          {withNavigation && (
            <Icon
              name="navigation"
              height={24}
              width={24}
              color="purple_verylight"
            />
          )}
        </div>
        {address && (
          <div className="flex flex-row items mt-[24px]">
            <div className="w-[24px] h-[24px] mr-[8px]">
              <Icon
                name="maps"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] font-normal leading-[140%]">
              {address}
            </span>
          </div>
        )}
        {workHour && (
          <div className="flex flex-row items mt-[12px]">
            <div className="w-[24px] h-[24px] mr-[8px]">
              <Icon
                name="clock"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] font-normal leading-[140%]">
              {workHour}
            </span>
          </div>
        )}
        {contact && (
          <div className="flex flex-row items mt-[12px]">
            <div className="w-[24px] h-[24px] mr-[8px]">
              <Icon
                name="phone"
                height={24}
                width={24}
                color="purple_verylight"
              />
            </div>
            <span className="font-opensans text-[18px] font-normal leading-[140%]">
              {contact}
            </span>
          </div>
        )}
      </div>
    </CardPurple>
  );
};
