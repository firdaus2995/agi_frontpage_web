import React from 'react';
import { contentStringTransformer } from '@/utils/responseTransformer';
interface Props {
  content: any;
}

const HakCipta = ({ content }: Props) => {
  if (!content) return null;
  return (
    <div>
      <p className="font-karla font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop">
        {contentStringTransformer(content['h1-artikel'])}
      </p>
      <p className="font-karla font-bold text-banner-title-mobile lg:text-banner-title-desktop text-purple_dark mt-[24px]">
        {content['struktur-artikel']?.contentData[0]?.details[0]?.value ?? ''}
      </p>
      <p
        className="font-opensans font-normal text-tanya-avgen-detail-subtitle text-gray_body mt-[24px]"
        dangerouslySetInnerHTML={{
          __html:
            content['struktur-artikel']?.contentData[0]?.details[1]?.value ?? ''
        }}
      />
    </div>
  );
};

export default HakCipta;
