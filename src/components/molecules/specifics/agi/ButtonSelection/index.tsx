import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js
import ButtonSmall from '@/components/atoms/ButtonSmall';
import ButtonSmallWithCheck from '@/components/atoms/ButtonSmallWithCheck';

export interface ButtonHelperItem {
  type: 'button' | 'button-checkbox';
  href?: string;
  label: string;
  variant?: string;
}

interface ButtonSelectionProps {
  buttonHelper: ButtonHelperItem[];
  channels?: string[];
  onSelectChannels?: (channelValues: any) => void;
  selectedChannels?: any;
  customColor?: {
    accent?: string;
    border?: string;
    text?: string;
  };
}

const ButtonSelection: React.FC<ButtonSelectionProps> = ({
  buttonHelper,
  channels,
  onSelectChannels,
  selectedChannels,
  customColor
}) => {
  let buttonHelperAdditional = buttonHelper;

  if (channels && channels.length !== 0) {
    const checkboxButtons = channels.map((channel) => ({
      type: 'button-checkbox',
      label: channel
    })) as ButtonHelperItem[];

    buttonHelperAdditional = [...buttonHelper, ...checkboxButtons];
  }

  const handleSelectedChannels = (text: string) => {
    if (onSelectChannels) {
      onSelectChannels(text);
    }
  };

  return (
    <div className="flex flex-nowrap overflow-x-scroll sm:overflow-x-hidden py-1">
      <div className="flex flex-row gap-[12px] w-full">
        {buttonHelperAdditional.map((item, index) =>
          item.type === 'button' ? (
            item.href ? (
              <Link href={item.href} key={index} className="w-[200px]">
                <ButtonSmall
                  title={item.label}
                  customClassName="w-[200px]"
                  variant={item.variant}
                />
              </Link>
            ) : (
              <ButtonSmall
                title={item.label}
                customClassName="w-[200px]"
                variant={item.variant}
              />
            )
          ) : item.type === 'button-checkbox' ? (
            <ButtonSmallWithCheck
              key={index}
              name={item.label}
              title={item.label}
              handleChange={handleSelectedChannels}
              customColor={customColor}
              selected={selectedChannels}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ButtonSelection;
