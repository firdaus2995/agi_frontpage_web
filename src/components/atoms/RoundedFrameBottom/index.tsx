import React from 'react';

interface IRoundedFrameBottom {
  frameColor?: string;
  bgColor?: string;
}

const RoundedFrameBottom: React.FC<IRoundedFrameBottom> = ({
  frameColor,
  bgColor
}) => {
  return (
    <div className={`relative ${bgColor ?? 'bg-avrast_product_bg'} mt-1 -mb-2`}>
      <span
        className={`w-full absolute z-20 bottom-2 h-20 ${frameColor ?? 'bg-white'} rounded-b-[65px]`}
      />
      <div className="w-full flex flex-row z-10 bottom-0 h-20 rounded-b-[65px]">
        <span className="w-1/4 h-full bg-purple_light rounded-bl-[65px] z-9" />
        <span className="w-1/4 h-full bg-green_border" />
        <span className="w-1/4 h-full bg-orange_border" />
        <span className="w-1/4 h-full bg-agi_grey rounded-br-[65px]" />
      </div>
    </div>
  );
};

export default RoundedFrameBottom;
