import React from 'react';

type TagPillProps = {
  children: React.ReactNode;
};

const TagPill: React.FC<TagPillProps> = ({ children }) => {
  return (
    <span className="text-sm font-semibold py-1 px-2 rounded-sm text-purple_dark/80 bg-purple_dark/[.06]">
      {children}
    </span>
  );
};

export default TagPill;
