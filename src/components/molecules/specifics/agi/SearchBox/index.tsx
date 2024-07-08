'use client';

import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';

type SearchBoxProps = {
  buttonText?: string;
  onSearch: (target: string) => void;
  placeHolder?: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  buttonText = 'Cari',
  onSearch,
  placeHolder = 'Asuransi'
}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="w-auto flex md:flex-row flex-col items-stretch gap-2 py-3">
      <Input
        customInputClass="grow !bg-gray_bglightgray !border-none px-[16px] text-card-subtitle-desktop"
        placeholder={placeHolder}
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            onSearch(e.target.value);
          }
        }}
      />
      <Button
        title={buttonText}
        onClick={() => onSearch(keyword)}
        customButtonClass="!border-none !bg-purple_dark rounded-lg"
        customTextClass="text-white text-footer-card-subtitle"
      />
    </div>
  );
};

export default SearchBox;
