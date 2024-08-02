import React from 'react';

interface INewsCard {
  label: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

const NewsCard: React.FC<INewsCard> = ({
  label,
  title,
  date,
  description,
  tags
}) => {
  return (
    <div className="rounded-xl border-2 border-gray_light px-[1.5rem] py-[2.25rem] flex flex-col gap-[0.75rem]">
      <span className="flex flex-row gap-2">
        <p className="font-bold text-purple_dark text-sm leading-[19.6px]">{label}</p>
        <span className="w-[0.0625rem] h-auto bg-gray_body" />
        <p className="text-sm leading-[19.6px]">{date}</p>
      </span>
      <p className="text-2xl w-full lg:w-[74%] font-bold font-opensanspro xs:line-clamp-3 sm:line-clamp-none">{title}</p>
      <div
        className="text-body-text-1 line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />

      <div className="flex flex-row flex-wrap gap-2">
        {tags?.length > 0 &&
          tags.map((item, index) => (
            <p
              key={index}
              className="text-purple_dark font-semibold bg-gray_bglightgray px-2 py-1 text-sm leading-[19.6px] xs:line-clamp-1 sm:line-clamp-none"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default NewsCard;
