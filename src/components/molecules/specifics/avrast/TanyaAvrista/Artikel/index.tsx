'use client';
import React from 'react';

const sampleText = `Lorem ipsum dolor sit amet consectetur. Quis non est egestas urna.
Dictum pellentesque iaculis at tellus tortor sit dis nunc. Volutpat
dictum venenatis non eget et. Augue tortor aliquam sapien ultricies
egestas phasellus venenatis pulvinar. Consectetur magna dignissim
turpis est ut et sapien. Commodo morbi iaculis viverra eget
elementum rutrum duis. Magna urna et ullamcorper neque orci urna.
Aenean libero enim in sed. Fusce a ipsum ipsum vestibulum metus orci
libero aliquam. Augue vitae nam et volutpat lectus tempus quam
turpis eget.`;

const ArtikelTanyaAvrista = () => {
  return (
    <div className="w-full bg-purple_dark -mt-[1px]">
      <div className="w-full bg-white rounded-t-[65px] pt-16 px-20 md:px-40 xl:px-60 flex flex-row">
        <section className="w-[20%] flex flex-col">
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_dark rounded-tl-xl" />
            <p className="text-lg font-bold text-purple_dark">Lorem Ipsum</p>
          </span>
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_mediumlight" />
            <p className="text-lg font-bold text-purple_mediumlight">
              Lorem Ipsum
            </p>
          </span>
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_mediumlight" />
            <p className="text-lg font-bold text-purple_mediumlight">
              Lorem Ipsum
            </p>
          </span>
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_mediumlight" />
            <p className="text-lg font-bold text-purple_mediumlight">
              Lorem Ipsum
            </p>
          </span>
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_mediumlight" />
            <p className="text-lg font-bold text-purple_mediumlight">
              Lorem Ipsum
            </p>
          </span>
          <span className="flex flex-row gap-4 items-center">
            <div className="w-[6px] h-[49px] bg-purple_mediumlight rounded-bl-xl" />
            <p className="text-lg font-bold text-purple_mediumlight">
              Lorem Ipsum
            </p>
          </span>
        </section>
        <section className="w-[80%] flex flex-col gap-8">
          <h1 className="font-karla text-5xl font-semibold leading-[60px]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="font-karla text-xl">
            <span className="font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </span>{' '}
            Quis non est egestas urna. Dictum pellentesque iaculis at tellus
            tortor sit dis nunc. Volutpat dictum venenatis non eget et. Augue
            tortor aliquam sapien ultricies egestas phasellus venenatis
            pulvinar. Consectetur magna dignissim turpis est ut et sapien.
            Commodo morbi iaculis viverra eget elementum rutrum duis. Magna urna
            et ullamcorper neque orci urna. Aenean libero enim in sed. Fusce a
            ipsum ipsum vestibulum metus orci libero aliquam. Augue vitae nam et
            volutpat lectus tempus quam turpis eget.
          </p>
          <p className="font-karla text-xl">{sampleText}</p>
          <p className="font-karla text-xl">{sampleText}</p>
          <p className="font-karla text-xl">{sampleText}</p>
        </section>
      </div>
    </div>
  );
};

export default ArtikelTanyaAvrista;
