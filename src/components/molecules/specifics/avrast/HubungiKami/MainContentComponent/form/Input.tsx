import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Icon from '@/components/atoms/Icon';

type TextInputProps = {
  title: string;
  placeholder?: string;
  require?: boolean;
  onChangeText: (value: string) => void;
};
export const TextInput = (props: TextInputProps) => {
  const { title, placeholder, require, onChangeText } = props;
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        {require && <span className="text-red_error"> *</span>}
      </p>
      <input
        className="mt-[8px] rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px]"
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
};

export const TextInputPhone = (props: TextInputProps) => {
  const { title, placeholder, require, onChangeText } = props;
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        {require && <span className="text-red_error"> *</span>}
      </p>
      <div className="flex flex-row mt-[8px]">
        <div className="rounded-[14px] border border-light-grey font-opensans font-normal text-[14px] px-[10px] py-[16px] mr-[8px]">
          <select>
            <option value="62">+62</option>
          </select>
        </div>
        <input
          className="rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px]"
          placeholder={placeholder}
          type="tel"
          onChange={(e) => onChangeText(e.target.value)}
        />
      </div>
    </div>
  );
};

interface TextInputAreaProps extends TextInputProps {
  maxLength?: number;
}
export const TextInputArea = (props: TextInputAreaProps) => {
  const { title, placeholder, require, onChangeText, maxLength } = props;
  const [text, setText] = React.useState('');
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      onChangeText(e.target.value);
    },
    [onChangeText]
  );
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        {require && <span className="text-red_error"> *</span>}
      </p>
      <textarea
        className="mt-[8px] rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px] h-[120px] resize-none"
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
      {Boolean(maxLength) && (
        <p className="text-end">
          {text.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

type SelectRadioProps = {
  title: string;
  require?: boolean;
  data: { label: string; id: string }[];
};
export const SelectRadio = (props: SelectRadioProps) => {
  const { title, require, data } = props;
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        {require && <span className="text-red_error">*</span>}
      </p>
      <div className="mt-[8px]">
        {data.map((i) => (
          <label className="mr-[32px]" key={i.id}>
            <input type="radio" value={i.id} />
            <span className="ml-[12px]">{i.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

type SelectProps = {
  data: { label: string; id: string }[];
  placeholder: string;
  require?: boolean;
  title: string;
};
export const SelectDropdown = (props: SelectProps) => {
  const { data, placeholder, title, require } = props;
  const [selected, setSelected] = React.useState<(typeof data)[0]>();

  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        {require && <span className="text-red_error">*</span>}
      </p>
      <div className="mt-[8px]">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="rounded-[14px] border border-light-grey w-full px-[16px] py-[16px] flex flex-row justify-between items-center">
              <span
                className={`font-opensans font-normal text-[14px] ${selected ? 'text-black' : 'text-other-grey'}`}
              >
                {selected?.label ?? placeholder}
              </span>
              <span>
                <Icon
                  name="chevronDown"
                  color="purple_dark"
                  height={10}
                  width={10}
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {data.map((i, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-purple_superlight text-purple_dark'
                          : 'text-black'
                      }`
                    }
                    value={i}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-bold' : 'font-normal'
                          }`}
                        >
                          {i.label}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

type SearchInputProps = {
  placeholder?: string;
};
export const SearchInput = (props: SearchInputProps) => {
  const { placeholder } = props;
  return (
    <div className="flex flex-row">
      <input
        placeholder={placeholder}
        className="w-full rounded-xl p-[16px] bg-purple_dark/5 mr-[12px]"
      />
      <button className="bg-purple_dark rounded-lg font-opensans font-semibold text-white px-[40px]">
        Cari
      </button>
    </div>
  );
};
