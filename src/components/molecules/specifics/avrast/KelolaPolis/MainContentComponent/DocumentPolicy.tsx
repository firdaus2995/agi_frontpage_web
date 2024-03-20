import { CardMenuChildren, CardMenuDownload, CardMenuLink } from './CardMenu';

export const DocumentPolicy = () => {
  return (
    <div>
      <CardMenuLink
        desc="Panduan Pembayaran Premi"
        href="panduan-pembayaran-premi"
      />
      <div className="mt-[24px]">
        <CardMenuChildren desc="Formulir Pelayanan Perubahan Polis">
          <div className="mt-[24px]">
            <CardMenuDownload desc="Perubahan Data Polis" />
          </div>
        </CardMenuChildren>
      </div>
      <div className="mt-[64px]">
        <CardMenuLink desc="Login untuk mengetahui informasi polis Anda" />
      </div>
    </div>
  );
};
