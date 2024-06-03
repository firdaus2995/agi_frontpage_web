interface IRadio {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ id, name, label, onChange, value }: IRadio) => {
  return (
    <div className="accent-purple_dark flex flex-row gap-[12px]">
      <input
        name={name}
        width={18}
        height={18}
        id={id}
        type="radio"
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
