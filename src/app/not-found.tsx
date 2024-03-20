'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/molecules/specifics/avrast/Header';

export default function NotFound() {
  const pathname = usePathname();
  // error avrast
  if (pathname.includes('/avrast'))
    return (
      <div>
        <Header />
        <div className="my-[96px] w-full flex flex-col items-center">
          <p className="font-karla font-bold text-[240px] text-purple_verylight">
            404
          </p>
          <div className="w-[324px] text-center">
            <p className="font-karla font-bold text-[24px]">
              Halaman tidak ditemukan
            </p>
            <p className="font-opensans text-[14px] mt-[12px]">
              Sepertinya halaman yang Anda cari tidak tersedia. Silakan periksa
              kembali URL atau kembali ke halaman utama kami.{' '}
            </p>
          </div>
          <Link
            href="/avrast"
            className="bg-purple_dark text-white font-opensans font-semibold text-[20px] rounded-lg py-[18px] px-[40px] mt-[36px]"
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    );

  return (
    <div>
      <div className="my-[96px] w-full flex flex-col items-center">
        <p className="font-karla font-bold text-[240px] text-purple_verylight">
          404
        </p>
        <div className="w-[324px] text-center">
          <p className="font-karla font-bold text-[24px]">
            Halaman tidak ditemukan
          </p>
          <p className="font-opensans text-[14px] mt-[12px]">
            Sepertinya halaman yang Anda cari tidak tersedia. Silakan periksa
            kembali URL atau kembali ke halaman utama kami.{' '}
          </p>
        </div>
        <Link
          href="/"
          className="bg-purple_dark text-white font-opensans font-semibold text-[20px] rounded-lg py-[18px] px-[40px] mt-[36px]"
        >
          Kembali Ke Beranda
        </Link>
      </div>
    </div>
  );
}
