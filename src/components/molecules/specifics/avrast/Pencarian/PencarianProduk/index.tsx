import React from 'react';
import Image from 'next/image';
import GROUP_PHOTO from '@/assets/images/group-photo.svg';
import Button from '@/components/atoms/Button/Button';

const PencarianProduk = () => {
  return (
    <div className="bg-purple_dark flex justify-center py-20 -my-[1px]">
      <div className="flex flex-row w-[78%] h-[392px]">
        <div className="w-[50%] bg-white rounded-l-2xl p-10 flex flex-col justify-between">
          <p className="text-[48px]">
            Solusi inovatif untuk{' '}
            <span className="text-purple_dark font-bold">nasabah</span>,
            <span className="text-purple_dark font-bold"> individu</span> dan{' '}
            <span className="text-purple_dark font-bold">korporasi</span>
          </p>
          <span>
            <Button
              title="Lihat Produk"
              customButtonClass="!bg-purple_dark"
              customTextClass="text-white font-semibold"
            />
          </span>
        </div>
        <div className="w-[50%] rounded-r-2xl bg-white flex">
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Image
              alt="product"
              src={GROUP_PHOTO}
              layout="fill"
              objectFit="cover"
              className="rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PencarianProduk;
