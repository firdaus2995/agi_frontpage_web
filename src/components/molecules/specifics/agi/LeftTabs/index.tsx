import React from 'react';
import Icon from '@/components/atoms/Icon';

interface TabProps {
  val: string;
  isActive: boolean;
  handleTabClick: (val: string) => void;
}

interface LeftTabsProps {
  tabs: string[];
  activeTab: string;
  handleTabClick: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LeftTabs: React.FC<LeftTabsProps> = ({
  tabs,
  activeTab,
  handleTabClick,
  isOpen,
  setIsOpen
}) => {
  const Tab: React.FC<TabProps> = ({ val, isActive, handleTabClick }) => (
    <div
      role="button"
      onClick={() => handleTabClick(val)}
      className={`border-l-4 px-[15px] py-[12px] cursor-pointer text-left font-bold text-[18px] ${
        isActive
          ? 'border-purple_dark text-purple_dark'
          : 'border-purple_mediumlight text-purple_mediumlight'
      }`}
    >
      {val}
    </div>
  );

  return (
    <>
      <div className="sm:block hidden rounded-lg">
        <div className="flex flex-col shrink min-w-[210px] bg-purple_light_bg rounded-r-[12px] rounded-l-[4px] overflow-hidden">
          {tabs.map((val) => (
            <Tab
              key={val}
              val={val}
              isActive={activeTab === val}
              handleTabClick={handleTabClick}
            />
          ))}
        </div>
      </div>
      <div className="relative sm:hidden block">
        <div
          className="flex justify-between items-center border-l-4 border-purple_dark px-[15px] py-[12px] cursor-pointer rounded-lg font-bold text-purple_dark bg-purple_light_bg text-[18px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{activeTab}</span>
          <div
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <Icon name="chevronDown" color="purple_dark" />
          </div>
        </div>
        {isOpen && (
          <div className="absolute w-full mt-1 rounded-lg bg-purple_light_bg shadow-lg">
            {tabs.map((val) => (
              <Tab
                key={val}
                val={val}
                isActive={activeTab === val}
                handleTabClick={handleTabClick}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LeftTabs;
