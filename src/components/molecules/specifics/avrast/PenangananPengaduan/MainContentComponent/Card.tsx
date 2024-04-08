'use client';
import React from 'react';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mockData = [
  {
    id: '1',
    title: 'Aturan Asuransi',
    icon: 'https://s3-alpha-sig.figma.com/img/95f2/8ccf/85f1f96922050596728ebc6b6cf20cb0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xq6k6oTibWUzbFAZk~ZKYWGQsZLFI78LGaicUn5eMbYb1~IngDngts0lfn-eZV-iPwaibD1EXU9-jRyXEpileH3vne2QUCHyp6JPWHHOO8trTrgRmIvLTDt3eIBPbw8yys5aZtBMoxCVX21JpYku1KhabSH-zl7UaKAJM9W2h7oz-BiukAM0BXTDBpoW7qL3saqoCn4ksV46btokMN8NpdYpuhERBHsQRGMYOH2maRw7SrM6p0K6i8ftqA8jAdn2qhIlE7hWkSgvY6VbIhS~6QYdl20h3z5lX8Ad3BB0VwiuN1lYG9ySEH7qRioW0eo8U-MZvR2bfG6fa5smvCL9jQ__',
    btn: 'Lihat Detail',
    link: '/avrast/klaim-layanan/layanan/penanganan-pengaduan/aturan-asuransi'
  },
  {
    id: '2',
    title: 'Prosedur Pengaduan',
    icon: 'https://s3-alpha-sig.figma.com/img/012c/31a1/6bf14bab69ec6534d2412dc27d638a4b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Anoumbs7c5DTWCcQJBi1lWaOLD2qbwRCGG-tYDRJwsgrxu~TKqGVqmlYMRh0v7zrwi7tKGfCtv4Sm6~bmMLhH0JtTzWOpAIrdaIevZswKhti5aD8P1KOBh--pwbwRE5rRQCABZkABHBsBVYR8e5yl6ma23hTXu4TH0AoEn3AAI6rp04BLTYvEh-p8wtlvRHUV1ODGAgk2alkU1HFBiL8ZAY1hysVTxwgmIf-3GxI0YhfGeJJ0X2JmjzcK1Mk-8JccwcqIZhnfTqXIvdHQxcN0reUhP9mqymsw~d7SO0WwctZZ~4l6jzWjzLX-JbV08YGAMnsPutCc-hepY2wgvqsgA__',
    btn: 'Lihat Detail',
    link: ''
  },
  {
    id: '3',
    title: 'Saran Anda',
    icon: 'https://s3-alpha-sig.figma.com/img/8863/ccea/0bfe3743ae069a852d5d6a4e856ff5d0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Exg1X3Kag72Gnwi675jBehM5Uot2z4OutfzzjyQDpL1VncNcmY11BHTh-1dHFTVmcU-GUMmCVhwajR9sqZ8JSEbMVoIMVEIMnUsNrbEvT9EW2HpPWAumPwhqdyO9Way3IJwa61XdxXXxi5VzINzqu~qeGTiUV8WVJAMamuvBB7v-5yyr2QwIMn4V2APKoFYgtdXGNlKzbkE6259AIuAhQwfcrHLhpwhXPVwwVAB3FdXg1-5xG8YvmJUe0T~a~-yP7MS9UpauUGHMtoqFL3BCT92BQRIfokIB1gp7lQmbwbCkPXAJFQLNgapRQY4T9r2ljuEX4IMwFSGJSAE~hee4Yg__',
    btn: 'Beri Saran',
    link: '/hubungi-kami'
  }
];

export const ContentCard = () => {
  return (
    <div className="mt-[64px]">
      <div className="grid grid-cols-3 gap-5 xs:hidden md:grid">
        {mockData.map((i) => (
          <div
            key={i.id}
            className="cursor-pointer border-[1px] border-gray_light rounded-xl overflow-hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center p-6">
              <img src={i.icon} alt={i.title} className="w-20" />
              <div className="flex flex-col gap-2">
                <h5 className="mb-2 md:text-[24px] xs:text-[20px] tracking-tight font-bold font-karla text-[32px] text-gray_body mt-5 text-center">
                  {i.title}
                </h5>
                <Link href={i.link}>
                  <div
                    role="button"
                    className=" bg-purple_dark mx-10 flex text-white font-medium rounded-xl px-[20px] py-[8px]"
                  >
                    {i.btn}
                  </div>
                </Link>
              </div>
            </div>
            <div className="h-[8px] bg-purple_dark" />
          </div>
        ))}
      </div>
    </div>
  );
};
