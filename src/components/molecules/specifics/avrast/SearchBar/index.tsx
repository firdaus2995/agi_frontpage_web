interface SearchBarProps {
  placeholder: string;
  value?: string;
  placeholderClassname?: string;
  searchButtonTitle?: string;
  searchButtonClassname?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  placeholderClassname,
  searchButtonTitle,
  searchButtonClassname
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`${placeholderClassname} focus:outline-none px-[16px] py-[8px] rounded-[12px] bg-purple_dark/[.06] grow`}
      />
      <button
        className={`${searchButtonClassname} px-[19px] py-[7px] rounded-[6px]`}
      >
        {searchButtonTitle}
      </button>
    </div>
  );
};

export default SearchBar;
