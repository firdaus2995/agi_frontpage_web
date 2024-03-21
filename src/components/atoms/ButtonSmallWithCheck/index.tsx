interface IButtonSmallWithCheck {
  name: string;
  title: string;
}

const ButtonSmallWithCheck = ({ name, title }: IButtonSmallWithCheck) => {
  return (
    <button
      type="button"
      className={`flex flex-row items-center whitespace-nowrap gap-[6px] px-[19px] py-[7px] rounded-[6px] accent-purple_dark bg-transparent border border-purple_dark cursor-default`}
    >
      <input
        id={name}
        type="checkbox"
        value=""
        className="w-4 h-4 text-purple_dark border-gray_verylight rounded focus:purple_dark focus:ring-2 cursor-pointer"
      />
      <label
        htmlFor={name}
        className={`font-semibold text-purple_dark cursor-pointer`}
      >
        {title}
      </label>
    </button>
  );
};

export default ButtonSmallWithCheck;
