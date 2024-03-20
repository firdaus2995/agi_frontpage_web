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
  buttonText = 'Search',
  onSearch,
  placeHolder
}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="w-auto flex md:flex-row flex-col items-stretch gap-2 p-3 bg-purple_dark/10 rounded-xl">
      <Input
        customInputClass="grow"
        placeholder={placeHolder}
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      <Button title={buttonText} onClick={() => onSearch(keyword)} />
    </div>
  );
};

export default SearchBox;
