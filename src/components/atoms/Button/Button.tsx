import React from 'react';

type RootButton = {
  IconButton: React.FC<Omit<IconButtonProps, 'className'>>;
  Radio: React.FC<Omit<RadioButtonProps, 'className'>>;
};

type IconButtonProps = {
  children: React.ReactNode;
  customButtonClass?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type RadioButtonProps = {
  children: React.ReactNode;
  customButtonClass?: string;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IButton {
  title?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  customButtonClass?: string;
  customTextClass?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const BASE_BUTTON_CLASS =
  'inline-block text-sm font-medium border-1 rounded active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer select-none ease-in-out duration-150';
const BASE_DISABLE_BUTTON_CLASS =
  'bg-gray_light text-gray_black rounded cursor-not-allowed';

const Button: RootButton & React.FC<IButton> = ({
  title,
  onClick,
  customButtonClass = '',
  customTextClass = '',
  disabled,
  children
}) => {
  return (
    <button
      className={`${
        disabled
          ? `px-10 py-3 text-sm font-medium ${BASE_DISABLE_BUTTON_CLASS}`
          : `${BASE_BUTTON_CLASS} px-10 py-3 text-purple_dark border-purple_dark hover:bg-purple_dark hover:text-white ${customButtonClass}`
      }`}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {title ? (
        <p className={`${customTextClass}`}>{title}</p>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

const IconButton: React.FC<IconButtonProps> = ({
  children,
  customButtonClass,
  ...rest
}) => {
  return (
    <button className={`p-1 ${customButtonClass ?? ''}`} {...rest}>
      {children}
    </button>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  customButtonClass,
  isActive,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-5 rounded-md ${BASE_BUTTON_CLASS} ${rest.disabled ? BASE_DISABLE_BUTTON_CLASS : isActive ? 'bg-dark-purple text-white' : 'bg-white text-dark-purple border-solid border-dark-purple border'} ${customButtonClass ?? ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.IconButton = IconButton;
Button.Radio = RadioButton;

export default Button;
