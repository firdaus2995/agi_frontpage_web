'use client';

import React, { useCallback, useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';
const _enterKey = 'Enter';

type SearchBoxProps = {
  buttonText?: string;
  onSearch: (target: string) => void;
  placeHolder?: string;
  value?: string;
  customButton?: string;
  customClassName?: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  buttonText = 'Cari',
  onSearch,
  placeHolder = 'Asuransi',
  value,
  customButton,
  customClassName
}) => {
  const [keyword, setKeyword] = useState(value || '');

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      console.log('handle key down event trigger');
      if (event.key === _enterKey) onSearch(keyword);
    },
    [keyword, onSearch]
  );

  return (
    <div
      className={`w-full flex flex-row items-stretch gap-[12px] py-3 font-opensans text-[16px] font-normal leading-[22.4px] ${customClassName}`}
    >
      <Input
        customInputClass="font-karla focus:outline-none w-full px-[16px] py-[12px] rounded-[12px] bg-gray_title/[0.06]"
        placeholder={placeHolder}
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        title={buttonText}
        onClick={() => onSearch(keyword)}
        customButtonClass={`!border-none !bg-purple_dark px-[2.5rem] py-[0.75rem] ${customButton}`}
        customTextClass="text-white text-[20px] font-semibold leading-7"
      />
    </div>
  );
};

export default SearchBox;
