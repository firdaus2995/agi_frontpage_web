interface CategoryPillsProps {
  buttonTitle: string[];
  selectedCategory?: string;
  buttonActiveClassname?: string;
  buttonInactiveClassname?: string;
  buttonActiveTextClassname?: string;
  buttonInactiveTextClassname?: string;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({
  buttonTitle,
  selectedCategory,
  buttonActiveClassname,
  buttonInactiveClassname,
  buttonActiveTextClassname,
  buttonInactiveTextClassname
}) => (
  <div className="flex flex-nowrap w-full justify-between gap-2">
    {buttonTitle.map((item, index) =>
      selectedCategory === item ? (
        <button
          key={index}
          className={`${buttonActiveClassname} w-full border-1 rounded-lg px-[15px] py-[8px] cursor-pointer`}
        >
          <span
            className={`${buttonActiveTextClassname} font-semibold text-[16px]`}
          >
            {item}
          </span>
        </button>
      ) : (
        <button
          key={index}
          className={`${buttonInactiveClassname} w-full border-1 rounded-lg px-[15px] py-[8px] cursor-pointer`}
        >
          <span
            className={`${buttonInactiveTextClassname} font-semibold text-[16px]`}
          >
            {item}
          </span>
        </button>
      )
    )}
  </div>
);

export default CategoryPills;
