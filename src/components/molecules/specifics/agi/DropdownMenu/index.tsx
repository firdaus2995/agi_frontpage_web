import React, { useEffect, useState } from 'react';
import Icon from '@/components/atoms/Icon';

interface IDropdownMenu {
  item: {
    title: string;
    color?: string;
    onClick?: () => void;
  }[];
  outerClass?: string;
  selectedData: any;
  setSelectedData: (value: string) => void;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({
  item,
  outerClass,
  selectedData,
  setSelectedData
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (selectedData !== -1) {
      setSelected(selectedData);
    }
  }, [selectedData]);

  return (
    <div className={outerClass}>
      <div className="w-full h-full border border-purple_dark rounded-xl relative">
        <span
          className="flex flex-row justify-between items-center cursor-pointer pr-4"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex flex-row gap-4 items-center">
            <div
              className={`w-[6px] h-[49px] ${isOpen ? 'rounded-tl-xl' : 'rounded-l-xl'}`}
            />
            <p className={`text-md font-semibold text-purple_dark`}>
              {item[selected]?.title}
            </p>
          </div>

          <span className={`h-full ${isOpen ? 'rotate-[180deg]' : ''}`}>
            <Icon
              name="chevronDown"
              color="purple_dark"
              width={12}
              height={12}
            />
          </span>
        </span>

        {isOpen && (
          <div className="absolute bg-white w-full border border-purple_dark rounded-xl">
            {item.map(
              (i, index) =>
                index !== selected && (
                  <span
                    className="flex flex-row justify-between items-center cursor-pointer pr-4"
                    key={index}
                    onClick={() => {
                      i.onClick ? i.onClick() : null;
                      setSelected(index);
                      setIsOpen(false);
                      setSelectedData(i.title);
                    }}
                  >
                    <div className="flex flex-row gap-4 items-center">
                      <div
                        className={`w-[6px] h-[49px] ${index === item.length ? 'rounded-bl-xl' : ''}`}
                      />
                      <p
                        className={`text-md font-semibold ${i.color ? i.color : index === selected ? 'text-purple_dark' : 'text-purple_mediumlight'}`}
                      >
                        {index !== selected && i.title}
                      </p>
                    </div>
                  </span>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
