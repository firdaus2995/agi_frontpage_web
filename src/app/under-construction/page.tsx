'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <div className="my-[96px] w-full flex flex-col items-center">
        <p className="font-karla font-bold text-under-construction-title-mobile lg:text-under-construction-title-desktop text-purple_verylight">
          Under Construction
        </p>
        <div className="w-[420px] text-center">
          <p className="font-karla font-bold text-banner-title-mobile">
            Halaman dalam proses pembuatan
          </p>
          <p className="font-opensans text-card-subtitle-desktop mt-[12px]">
            Sepertinya halaman yang Anda cari belum tersedia. Silakan periksa
            kembali URL atau kembali ke halaman utama kami.
          </p>
        </div>
        <Link
          href="/"
          className="bg-purple_dark text-white font-opensans font-semibold text-banner-btn-label rounded-lg py-[18px] px-[40px] mt-[36px]"
        >
          Kembali Ke Beranda
        </Link>
      </div>
    </div>
  );
}
