import { LeftMenu } from '../SyaratPengunaan/components/LeftMenu';

const listMenu = [{ id: '1', label: 'Hak Cipta & Merk Dagang' }];
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col  relative bottom-[70px]">
      <div className="bg-white w-full min-h-[60px]">
        <div className="px-[136px] py-[100px] flex flex-row">
          <LeftMenu
            active={listMenu[0].id}
            data={listMenu}
            onClick={() => {}}
          />
          <div className="ml-[48px]">
            <p className="font-karla font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop">
              HAK CIPTA DAN MEREK DAGANG
            </p>
            <p className="font-opensans font-normal text-tanya-avgen-detail-subtitle text-gray_body mt-[24px]">
              Semua yang Anda lihat atau baca di situs ini harus diasumsikan
              telah dilindungi hak cipta kecuali ditentukan sebaliknya, dan
              tidak dapat disalin, digunakan atau didistribusikan dengan cara
              apapun tanpa izin tertulis dari Avrist, kecuali secara tegas
              ditentukan lain di dalam situs ini. Avrist tidak memberikan
              jaminan bahwa penggunaan material yang ditampilkan di situs ini
              tidak akan melanggar hak-hak pihak ketiga yang tidak dimiliki oleh
              atau berafiliasi dengan Avrist.
            </p>
            <p className="font-opensans font-normal text-tanya-avgen-detail-subtitle text-gray_body mt-[24px]">
              Gambar-gambar yang ditampilkan dalam situs ini adalah properti
              dari, atau digunakan dengan izin oleh Avrist. Penggunaan
              gambar-gambar tersebut oleh Anda, atau setiap orang lain yang
              diberikan kewenangan oleh Anda, dilarang kecuali apabila diizinkan
              secara khusus oleh Avrist. Setiap penggunaan gambar-gambar tanpa
              izin dapat melanggar peraturan dan perundangundangan yang berlaku,
              khususnya tentang hak cipta, merek dagang, kerahasiaan, dan
              peraturan-peraturan serta statuta-statuta tentang komunikasi.
            </p>
            <p className="font-opensans font-normal text-tanya-avgen-detail-subtitle text-gray_body mt-[24px]">
              Semua merek dagang, merek jasa, nama dagang, logo, dan ikon (“
              <span className="font-bold">Merek Dagang</span>”) merupakan milik
              Avrist, baik terdaftar maupun tidak terdaftar. Tidak satu pun isi
              situs ini yang dapat ditafsirkan sebagai memberikan, secara
              tersirat, estoppel, atau yang selainnya, lisensi atau hak
              penggunaan setiap Merek Dagang yang ditampilkan dalam situs ini
              tanpa izin tertulis dari Avrist. Penggunaan Anda atas Merek Dagang
              yang ditampilkan dalam situs ini, atau setiap isi lainnya dalam
              situs web ini, kecuali secara tegas ditentukan lain di dalam situs
              ini, dilarang keras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
