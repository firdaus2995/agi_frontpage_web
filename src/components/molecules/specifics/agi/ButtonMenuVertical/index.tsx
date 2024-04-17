import React, { useState } from 'react';
import Icon from '@/components/atoms/Icon';

interface IButtonMenuVertical {
  item: {
    title: string;
    color?: string;
    onClick?: () => void;
  }[];
  outerClass?: string;
}

const ButtonMenuVertical: React.FC<IButtonMenuVertical> = ({
  item,
  outerClass
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div className={outerClass}>
      <div className="xs:hidden md:block w-full bg-purple_light_bg rounded-xl cursor-pointer">
        {item.map((i, index) => (
          <span
            className="flex flex-row gap-4 items-center h-[50px]"
            key={index}
            onClick={() => {
              i.onClick ? i.onClick() : null;
              setSelected(index);
            }}
          >
            <div
              className={`w-[6px] h-full ${index === selected ? 'bg-purple_dark' : 'bg-purple_mediumlight'} ${index === 0 ? 'rounded-tl-xl' : index === item.length - 1 ? 'rounded-bl-xl' : ''}`}
            />
            <p
              className={`w-[70%] text-md 2xl:text-lg font-bold ${i.color ? i.color : selected === index ? 'text-purple_dark' : 'text-purple_mediumlight'}`}
            >
              {i.title}
            </p>
          </span>
        ))}
      </div>

      <div className="md:hidden w-full h-full bg-purple_light_bg rounded-xl">
        <span
          className="flex flex-row justify-between items-center cursor-pointer pr-4"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex flex-row gap-4 items-center">
            <div
              className={`w-[6px] h-[49px] bg-purple_dark ${isOpen ? 'rounded-tl-xl' : 'rounded-l-xl'}`}
            />
            <p className={`text-md 2xl:text-lg font-bold text-purple_dark`}>
              {item[selected].title}
            </p>
          </div>

          <span className={`h-full ${isOpen ? 'rotate-[180deg]' : ''}`}>
            <Icon name="chevronDown" color="black" width={12} height={12} />
          </span>
        </span>
        {isOpen &&
          item.map(
            (i, index) =>
              index !== selected && (
                <span
                  className="flex flex-row justify-between items-center cursor-pointer pr-4"
                  key={index}
                  onClick={() => {
                    i.onClick ? i.onClick() : null;
                    setSelected(index);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex flex-row gap-4 items-center">
                    <div
                      className={`w-[6px] h-[49px] ${index === selected ? 'bg-purple_dark' : 'bg-purple_mediumlight'} ${index === item.length ? 'rounded-bl-xl' : ''}`}
                    />
                    <p
                      className={`text-md 2xl:text-lg font-bold ${i.color ? i.color : index === selected ? 'text-purple_dark' : 'text-purple_mediumlight'}`}
                    >
                      {index !== selected && i.title}
                    </p>
                  </div>
                </span>
              )
          )}
      </div>
    </div>
  );
};

export default ButtonMenuVertical;
