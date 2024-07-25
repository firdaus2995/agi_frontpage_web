import React from 'react';

interface Props {
  content: any;
}

const SyaratPengunaan = ({ content }: Props) => {
  if (!content) return null;
  return (
    <div>
      <p className="font-karla font-bold text-banner-title-mobile lg:text-banner-title-desktop text-purple_dark mt-[24px]">
        {content['struktur-artikel']?.contentData[1]?.details[0]?.value ?? ''}
      </p>
      <p className="font-opensans font-normal text-tanya-avgen-detail-subtitle text-gray_body mt-[24px]" dangerouslySetInnerHTML={{ __html: content['struktur-artikel']?.contentData[1]?.details[1]?.value ?? '' }} />
    </div>
  );
};

export default SyaratPengunaan;
