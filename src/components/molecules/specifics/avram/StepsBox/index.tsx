import React from 'react';

type StepsBoxProps = {
  iconRenderer: () => React.ReactNode;
  title: string;
  desc: string;
  customClass?: string;
};

const StepsBox: React.FC<StepsBoxProps> = ({
  iconRenderer,
  title,
  desc,
  customClass
}) => {
  return (
    <div
      className={`flex flex-col gap-6 p-6 rounded-xl shadow-md ${customClass ?? ''}`}
    >
      {iconRenderer()}
      <div className="flex flex-col gap-3">
        <p className="font-karla font-bold text-2xl">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default StepsBox;
