interface IButtonSmall {
  title: string;
  variant?: string;
  customClassName?: string;
}

const ButtonSmall = ({
  title,
  variant = 'filled',
  customClassName
}: IButtonSmall) => {
  const variantButtonClassName =
    variant === 'outlined'
      ? 'bg-transparent border border-purple_dark'
      : 'bg-purple_dark border border-purple_dark';
  const variantTextClassName =
    variant === 'outlined' ? 'text-purple_dark' : 'text-white';

  return (
    <button
      type="button"
      className={`px-[19px] py-[7px] rounded-[6px] ${variantButtonClassName} ${customClassName}`}
    >
      <span className={`font-semibold ${variantTextClassName}`}>{title}</span>
    </button>
  );
};

export default ButtonSmall;
