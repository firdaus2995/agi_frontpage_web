import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

interface CategoryPillsProps {
  buttonTitle: string[];
  selectedCategory?: string;
  buttonActiveClassname?: string;
  buttonInactiveClassname?: string;
  buttonActiveTextClassname?: string;
  buttonInactiveTextClassname?: string;
  links?: Record<string, string>;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({
  buttonTitle,
  selectedCategory,
  buttonActiveClassname,
  buttonInactiveClassname,
  buttonActiveTextClassname,
  buttonInactiveTextClassname,
  links
}) => {
  return (
    <div className="flex flex-nowrap w-full justify-between gap-2 items-stretch">
      {buttonTitle.map((item, index) => {
        const link = links?.[item] || '';
        return link.startsWith('/') ? (
          <div className="w-full min-h-full items-stretch">
            <Link href={link}>
              <button
                key={index}
                className={`${selectedCategory === item ? buttonActiveClassname : buttonInactiveClassname} w-full min-h-full border-1 rounded-lg px-[15px] py-[8px] cursor-pointer`}
              >
                <span
                  className={`${selectedCategory === item ? buttonActiveTextClassname : buttonInactiveTextClassname} font-semibold text-[16px]`}
                >
                  {item}
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full min-h-full items-stretch">
            <ScrollLink
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              <button
                key={index}
                className={`${selectedCategory === item ? buttonActiveClassname : buttonInactiveClassname} w-full h-full border-1 rounded-lg px-[15px] py-[8px] cursor-pointer`}
              >
                <span
                  className={`${selectedCategory === item ? buttonActiveTextClassname : buttonInactiveTextClassname} font-semibold text-[16px]`}
                >
                  {item}
                </span>
              </button>
            </ScrollLink>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPills;
