import React from 'react';
import { GoToPageParams } from '../..';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';

type PaginationButtonProps = {
  onClick: (target: GoToPageParams) => void;
  isActive?: boolean;
  page: GoToPageParams;
  customWrapperClass?: string;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  isActive,
  page,
  customWrapperClass
}) => {
  const renderMainContent = () => {
    switch (page) {
      case 'prev':
        return (
          <p className="rotate-180">
            <Icon name="chevronRight" color="dark-purple" />
          </p>
        );
      case 'next':
        return (
          <p>
            <Icon name="chevronRight" color="dark-purple" />
          </p>
        );
      default:
        return (
          <span
            className={`${isActive ? 'font-bold text-dark-purple' : ''} ${customWrapperClass ?? ''}`}
          >
            {page}
          </span>
        );
    }
  };

  return (
    <Button.IconButton
      onClick={() => onClick(page)}
      customButtonClass="aspect-square min-w-[2rem]"
    >
      {renderMainContent()}
    </Button.IconButton>
  );
};

export default PaginationButton;
