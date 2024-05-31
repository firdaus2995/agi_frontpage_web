interface IButtonSmallWithCheck {
  name: string;
  title: string;
  handleChange?: (selectedChannel: string, isChecked: boolean) => void;
  customColor?: {
    accent?: string;
    border?: string;
    text?: string;
  };
  selected?: string;
}

const ButtonSmallWithCheck = ({
  name,
  title,
  handleChange,
  customColor,
  selected
}: IButtonSmallWithCheck) => {
  const onlickCheckBox = (event: any) => {
    if (handleChange) {
      const isChecked = event.target.checked;
      const text = event.target.value;
      handleChange(text, isChecked);
    }
  };

  return (
    <button
      type="button"
      className={`flex flex-row items-center whitespace-nowrap gap-[6px] px-[12px] py-[8px] rounded-[6px] ${customColor?.accent ?? 'accent-purple_dark'} bg-transparent border ${customColor?.border ?? 'border-purple_dark'} cursor-default`}
    >
      <input
        id={name}
        type="checkbox"
        value={name}
        checked={selected ? selected === title : false}
        className="w-4 h-4 text-purple_dark border-gray_verylight rounded focus:purple_dark focus:ring-2 cursor-pointer"
        onChange={onlickCheckBox}
      />
      <label
        htmlFor={name}
        className={`font-semibold ${customColor?.text ?? 'text-purple_dark'} cursor-pointer`}
      >
        {title}
      </label>
    </button>
  );
};

export default ButtonSmallWithCheck;
