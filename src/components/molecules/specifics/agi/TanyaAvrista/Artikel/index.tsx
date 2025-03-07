'use client';
import React from 'react';

type Props = {
  title: string;
  content: string;
};

const ArtikelTanyaAvrista = (props: Props) => {
  const { content, title } = props;

  return (
    <div className="w-full">
      <div className="w-full bg-white xs:py-[3.125rem] lg:py-[6.25rem] px-[2rem] lg:px-[8.5rem] flex flex-row">
        <section className="w-full flex flex-col gap-8">
          <h1 className="font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop font-bold">
            {title}
          </h1>
          <p
            className="font-opensans text-tanya-avgen-detail-subtitle"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </div>
    </div>
  );
};

export default ArtikelTanyaAvrista;
