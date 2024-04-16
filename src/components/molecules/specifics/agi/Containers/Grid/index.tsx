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
      <div className="flex justify-center pt-[50px]">
        <p className="font-bold font-karla text-center text-[36px] sm:text-[56px] text-purple_dark">
          {textTitle}
        </p>
      </div>
      <div
        className={`grid grid-cols-${gridCols} sm:grid-cols-${gridColsSm} px-[${px}] sm:px-[${pxSm}] py-[${py}] sm:py-[${pySm}] gap-[24px] bg-${bgColor}`}
      >
        {children}
      </div>
    </>
  );
};

export default GridContainer;
