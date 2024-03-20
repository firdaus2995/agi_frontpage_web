type Data = { id: string; label: string };
type LeftMenuProps = {
  data: Data[];
  active: string;
  onClick: (val: Data) => void;
};
export const LeftMenu = (props: LeftMenuProps) => {
  const { active, data, onClick } = props;
  return (
    <div>
      <div className="xs:hidden md:block">
        <div
          className={`flex flex-col bg-purple_light_bg rounded-lg w-[200px]`}
        >
          {data.map((val, idx) => (
            <div
              key={val.id}
              role="button"
              onClick={() => {
                onClick(val);
              }}
              className={`${idx === 0 && 'rounded-tl-lg'} ${idx + 1 === data.length && 'rounded-bl-lg'} ${active !== val.id && 'opacity-50'} border-l-8 border-l-purple_dark p-4 font-semibold text-purple_dark`}
            >
              {val.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
