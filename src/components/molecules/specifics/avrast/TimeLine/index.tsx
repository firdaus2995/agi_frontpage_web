import React, { useState } from 'react';

interface IDataHistory {
  year: string;
  title: string;
  desc: string;
}

interface IFooterInformation {
  title: string;
  data: IDataHistory[];
}

const Timeline = ({ title, data }: IFooterInformation) => {
  const [selectedItem, setSelectedItem] = useState('2023');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  return (
    <ol className="items-center flex flex-col">
      <div className="flex justify-center items-center p-10">
        <p className="text-[56px] font-bold text-purple_dark">{title}</p>
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        {data.map((val, idx) => (
          <li key={idx} className="relative mb-10 sm:mb-0 w-full">
            <div className="flex items-center">
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              {selectedItem === val.year ? (
                <div className="z-10 flex items-center justify-center w-7 h-7 bg-purple_dark rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              ) : (
                <div
                  role="button"
                  onClick={() => handleItemClick(val.year)}
                  className="z-10 flex items-center justify-center w-3 h-3 bg-purple_dark rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                >
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
              )}
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div
              role="button"
              onClick={() => handleItemClick(val.year)}
              className="w-full relative mt-10 flex justify-center"
            >
              <div
                className={`p-4 border rounded-xl ${selectedItem === val.year ? 'bg-purple_dark text-white' : 'border-purple_dark text-purple_dark'}`}
              >
                {val.year}
              </div>
            </div>
          </li>
        ))}
      </div>
      <div className="w-full px-20 mt-10">
        <div className="mt-3 w-full flex flex-col gap-4 rounded-xl p-5 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
            {data.filter((val) => val.year === selectedItem)[0]?.title}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {data.filter((val) => val.year === selectedItem)[0]?.desc}
          </p>
        </div>
      </div>
    </ol>
  );
};

export default Timeline;
