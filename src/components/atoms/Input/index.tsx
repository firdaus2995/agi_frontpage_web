import React, { InputHTMLAttributes } from 'react';

type RootInput = {
  Icon: React.FC<IconInputProps>;
};

type InputProps = Omit<
  {
    customInputClass?: string;
  } & InputHTMLAttributes<HTMLInputElement>,
  'className'
>;

type IconInputProps = {
  customWrapperClass?: string;
  iconRenderer: () => React.ReactNode;
} & InputProps;

const BASE_COSMETIC_INPUT_CLASS =
  'text-sm flex items-center rounded-lg bg-white border-solid border-1 border-gray_spacerlight';

const Input: RootInput & React.FC<InputProps> = ({
  customInputClass,
  placeholder = 'Search',
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      className={`transition-all p-3 ${BASE_COSMETIC_INPUT_CLASS} ${customInputClass ?? ''}`}
      {...rest}
    />
  );
};

const IconInput: React.FC<IconInputProps> = ({
  customInputClass,
  customWrapperClass,
  iconRenderer,
  ...rest
}) => {
  return (
    <div
      className={`pl-3 p-3 gap-2 ${BASE_COSMETIC_INPUT_CLASS} ${customWrapperClass ?? ''}`}
    >
      {iconRenderer()}
      <input
        className={`outline-none h-full flex-grow ${customInputClass ?? ''}`}
        placeholder={rest.placeholder ?? 'Search'}
        {...rest}
      />
    </div>
  );
};

Input.Icon = IconInput;

export default Input;
