import React from 'react';

interface IOption {
  label: string;
  value: string;
}

interface IDropdownInput {
  label?: string;
  onChange?: (event: React.SyntheticEvent) => void;
  value?: string;
  options?: IOption[];
}
const DropdownInput: React.FC<IDropdownInput> = ({
  label,
  options,
  value,
  onChange
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-purple_dark text-purple_dark rounded-md focus:outline-none focus:border-blue-500"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
