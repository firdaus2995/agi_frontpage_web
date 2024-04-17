import React from 'react';

const KeamananOnline = () => {
  return (
    <div>
      <p className="font-karla font-bold text-[56px]">Keamanan Online</p>
      <p className="font-karla font-bold text-[36px] text-purple_dark mt-[24px]">
        Kebijakan Keamanan Informasi
      </p>
      <p className="font-opensans font-normal text-[20px] text-gray_body mt-[24px]">
        PT. AVRIST ASSURANCE berkomitmen untuk:
      </p>
      <ol className="font-opensans font-normal text-[20px] text-gray_body mt-[24px] list-decimal">
        <li>
          Menerapkan sistem manajemen keamanan informasi berdasarkan ISO
          27001:2013, serta mematuhi peraturan perundangan dan persyaratan
          terkait lainnya.
        </li>
        <li>
          Terus-menerus mengoptimalkan dan meningkatkan keamanan informasi yang
          kami miliki melalui peningkatan manajemen keamanan informasi dan
          budaya korporasi yang tinggi untuk meraih kepuasan dan loyalitas
          pelanggan.
        </li>
        <li>
          Mengendalikan risiko keamanan informasi guna mencegah insiden akibat
          kebocoran informasi berdasarkan perundangan dan persyaratan yang
          relevan dengan:
          <div className="ml-10">
            <p>
              3.a. Menyediakan sumber daya yang dibutuhkan untuk menjamin sistem
              keamanan informasi.
            </p>
            <p>
              3.b. Membudayakan dan membina kompetensi keamanan informasi bagi
              seluruh pekerja dan mitra kerja.
            </p>
          </div>
        </li>
        <li>
          Meminimalkan dampak negatif, mencegah terjadinya kebocoran informasi
          dengan terus menerus meningkatkan kinerja dari indikator keamanan
          informasi yang relevan berdasarkan perundangan dan persyaratan
          keamanan informasi yang relevan.
        </li>
        <li>
          Memastikan aspek kerahasiaan, integritas, dan ketersediaan data
          terjamin di perusahaan dengan tetap memperhatikan aspek risiko dan
          peluang yang berlaku guna memenuhi kebutuhan atau harapan pihak
          berkepentingan
        </li>
      </ol>
    </div>
  );
};

export default KeamananOnline;
