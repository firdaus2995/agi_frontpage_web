import { useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  placeholderClassname?: string;
  searchButtonTitle?: string;
  searchButtonClassname?: string;
  onSearch?: (target: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  placeholderClassname,
  searchButtonTitle,
  searchButtonClassname,
  onSearch
}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch ? onSearch(keyword) : {};
      }}
      className="flex flex-row items-center gap-[12px]"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(ev) => setKeyword(ev.target.value)}
        className={`${placeholderClassname} focus:outline-none px-[16px] py-[12px] rounded-[12px] bg-purple_dark/[.06] grow text-card-subtitle-desktop`}
      />
      <button
        className={`${searchButtonClassname} px-[20px] py-[8px] rounded-[6px] text-card-btn-label`}
        type="submit"
      >
        {searchButtonTitle}
      </button>
    </form>
  );
};

export default SearchBar;
