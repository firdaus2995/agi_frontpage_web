import React from 'react';

interface IGridContainer {
  children: React.ReactNode;
  gridCols?: number;
  gridColsSm?: number;
  px?: string;
  py?: string;
  pxSm?: string;
  pySm?: string;
  textTitle?: string;
  bgColor?: string;
}

const GridContainer = ({
  children,
  gridCols,
  gridColsSm,
  px,
  py,
  pxSm,
  pySm,
  textTitle,
  bgColor = 'white'
}: IGridContainer) => {
  return (
    <>
      <div className="flex justify-center pt-[80px]">
        <p className="font-bold font-karla text-center text-[36px] lg:text-[56px] text-purple_dark">
          {textTitle}
        </p>
      </div>
      <div
        className={`grid grid-cols-${gridCols} lg:grid-cols-${gridColsSm} px-[${px}] lg:px-[${pxSm}] py-[${py}] lg:py-[${pySm}] gap-[24px] bg-${bgColor}`}
      >
        {children}
      </div>
    </>
  );
};

export default GridContainer;
