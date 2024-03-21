interface IRadio {
  id: string;
  name: string;
  label: string;
}

const Radio = ({
  id,
  name,
  label,
}: IRadio) => {
  return (
    <div className="accent-purple_dark flex flex-row gap-[12px]">
      <input name={name} width={18} height={18} id={id} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio;
