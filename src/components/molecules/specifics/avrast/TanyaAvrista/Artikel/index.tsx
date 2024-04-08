'use client';
import React from 'react';

type Props = {
  title: string;
  content: string;
};

const ArtikelTanyaAvrista = (props: Props) => {
  const { content, title } = props;

  return (
    <div className="w-full bg-purple_dark -mt-[1px]">
      <div className="w-full bg-white rounded-t-[65px] pt-16 px-20 md:px-40 xl:px-60 flex flex-row">
        <section className="w-full flex flex-col gap-8">
          <h1 className="font-karla text-5xl font-semibold leading-[60px]">
            {title}
          </h1>
          <p
            className="font-karla text-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </div>
    </div>
  );
};

export default ArtikelTanyaAvrista;
