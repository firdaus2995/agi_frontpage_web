import React from 'react';

interface IMediumTag {
  title: string;
  customClass?: string;
}

const MediumTag = ({
  title,
  customClass,
  ...rest
}: IMediumTag &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'>) => {
  return (
    <p
      className={`px-2 py-1 bg-purple_dark/[.06] rounded-sm text-purple_dark/[.8] text-sm font-semibold ${customClass ?? ''}`}
      {...rest}
    >
      {title}
    </p>
  );
};

export default MediumTag;
