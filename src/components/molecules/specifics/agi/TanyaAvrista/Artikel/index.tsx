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
      <div className="w-full bg-white rounded-t-[76px] xs:py-[3.125rem] md:py-[6.25rem] px-[2rem] md:px-[8.5rem] flex flex-row">
        <section className="w-full flex flex-col gap-8">
          <h1 className="font-karla xs:text-[2.25rem] md:text-[3.5rem] font-bold">
            {title}
          </h1>
          <p
            className="font-opensans text-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </div>
    </div>
  );
};

export default ArtikelTanyaAvrista;
