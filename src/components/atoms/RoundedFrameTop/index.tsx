import React from 'react';

interface IRoundedFrameTop {
  frameColor?: string;
  bgColor?: string;
}

const RoundedFrameTop: React.FC<IRoundedFrameTop> = ({
  frameColor,
  bgColor
}) => {
  return (
    <div
      className={`relative ${frameColor ?? 'bg-avrast_product_bg'} -mt-1 mb-2`}
    >
      <span
        className={`w-full absolute z-20 top-2 h-20 ${bgColor ?? 'bg-purple_superlight'} rounded-t-[65px]`}
      />
      <div className="w-full flex flex-row z-10 top-0 h-20 rounded-t-[65px]">
        <span className="w-1/4 h-full bg-purple_light rounded-tl-[65px]" />
        <span className="w-1/4 h-full bg-green_border" />
        <span className="w-1/4 h-full bg-orange_border" />
        <span className="w-1/4 h-full bg-agi_grey rounded-tr-[65px]" />
      </div>
    </div>
  );
};

export default RoundedFrameTop;
