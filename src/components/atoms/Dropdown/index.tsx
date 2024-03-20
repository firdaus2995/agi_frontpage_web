'use client';

import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import Button from '../Button/Button';
import Icon from '../Icon';

export type DropdownProps = {
  value: unknown;
};

const Dropdown: React.FC<DropdownProps> = () => {
  console.log();
  return <div>Dropdown</div>;
};

type MultipleDropdownPillProps = {
  title: string;
  onDelete: (title: string) => void;
};

const MultipleDropdownPill: React.FC<MultipleDropdownPillProps> = ({
  title,
  onDelete
}) => {
  return (
    <span
      className="text-sm flex justify-between border border-solid border-light-grey p-3 items-center gap-2 rounded-lg cursor-pointer whitespace-nowrap"
      onClick={(ev) => {
        ev.stopPropagation();
        onDelete(title);
      }}
    >
      {title} <Icon name="roundedX" color="gray_border" width={20} isSquare />
    </span>
  );
};

export type MultipleDropdownProps<T> = {
  values: T[];
  onChange: (target: T[]) => void;
  options: T[];
  onDelete: (target: T) => void;
  wrapperClassname?: string;
  displayPlaceholder?: string;
};

export const MultipleDropdown = <T,>({
  onChange,
  values,
  options,
  onDelete,
  wrapperClassname,
  displayPlaceholder = '-'
}: MultipleDropdownProps<T>) => {
  const [isOnInputMode, setIsOnInputMode] = useState(false);
  const [keyword, setKeyword] = useState('');

  const filteredOptions = options.filter((item) => {
    const isAlreadySelected = values.includes(item);
    if (typeof item === 'string' && keyword) {
      return !isAlreadySelected && item.toLowerCase().includes(keyword);
    }
    return !isAlreadySelected;
  });

  return (
    <div className={`relative ${wrapperClassname ?? ''}`}>
      <Combobox value={values} onChange={onChange} multiple>
        <div
          className="flex flex-start items-center gap-2 min-w-[10rem]
          bg-white px-4 py-3 rounded-lg overflow-auto tab-header-container"
        >
          <Button.IconButton
            onClick={() => setIsOnInputMode((prevState) => !prevState)}
          >
            <Icon name="roundedPlus" color="gray_title" width={24} isSquare />
          </Button.IconButton>
          {isOnInputMode ? (
            <Combobox.Input
              onChange={(ev) => setKeyword(ev.target.value)}
              className="w-full p-2 text-sm outline-none"
              placeholder="Search"
            />
          ) : (
            <div className="flex gap-2">
              {values.length === 0 ? (
                <span className="text-sm whitespace-nowrap">
                  {displayPlaceholder}
                </span>
              ) : (
                values.map((item, index) => (
                  <MultipleDropdownPill
                    key={index}
                    title={item as string}
                    onDelete={(target) => onDelete(target as T)}
                  />
                ))
              )}
            </div>
          )}
        </div>
        <Combobox.Options className="flex flex-col mt-2 p-2 z-50 rounded-lg absolute w-full bg-white shadow-lg">
          {filteredOptions
            .filter((item) => !values.includes(item))
            .map((item, index) => (
              <Combobox.Option
                className="cursor-pointer hover:bg-purple_verylight transition-all p-2"
                key={index}
                value={item}
              >
                {item as React.ReactNode}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Dropdown;
