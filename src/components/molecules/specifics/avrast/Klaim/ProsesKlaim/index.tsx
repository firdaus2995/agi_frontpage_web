'use client';

import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import HeartIcon from '@/assets/images/avrast/component/panduan-pengajuan/icon-2.svg';
import CHEVRONRIGHTPURPLE from '@/assets/images/avrast/component/product-section/chevron-right-purple.svg';
import STEP1ICON1 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-1.svg';
import STEP1ICON2 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-2.svg';
import STEP1ICON3 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-3.svg';
import STEP1ICON4 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-4.svg';
import STEP1ICON5 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-5.svg';
import STEP1ICON6 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-6.svg';
import STEP1ICON7 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-7.svg';
import STEP1ICON8 from '@/assets/images/avrast/component/proses-klaim/step-1-icon-8.svg';
import STEP2ICON1 from '@/assets/images/avrast/component/proses-klaim/step-2-icon-1.svg';
import STEP2ICON2 from '@/assets/images/avrast/component/proses-klaim/step-2-icon-2.svg';
import STEP2ICON3 from '@/assets/images/avrast/component/proses-klaim/step-2-icon-3.svg';
import STEP2ICON4 from '@/assets/images/avrast/component/proses-klaim/step-2-icon-4.svg';
import STEP2ICON5 from '@/assets/images/avrast/component/proses-klaim/step-2-icon-5.svg';
import STEP4ICON1 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-1.svg';
import STEP4ICON2 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-2.svg';
import STEP4ICON3 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-3.svg';
import STEP4ICON4 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';

const data = [
  {
    category: 'Asuransi Jiwa Individu',
    data: [
      'Klaim Manfaat Hidup',
      'Klaim Kematian',
      'Klaim Rumah Sakit',
      'Klaim Cacat Total dan Tetap',
      'Klaim Kecelakaan',
      'klaim 2',
      'klaim 2 lagi'
    ]
  },
  {
    category: 'Asuransi Jiwa Korporasi',
    data: [
      'Klaim Manfaat Hidup 2',
      'Klaim Kematian 2',
      'Klaim Rumah Sakit 2',
      'Klaim Cacat Total dan Tetap 2',
      'Klaim Kecelakaan 2',
      'klaim 2',
      'klaim 2 lagi'
    ]
  },
  {
    category: 'Avrist Syariah',
    data: [
      'Klaim Manfaat Hidup 3',
      'Klaim Kematian 3',
      'Klaim Rumah Sakit 3',
      'Klaim Cacat Total dan Tetap 3',
      'Klaim Kecelakaan 3',
      'klaim 2',
      'klaim 2 lagi'
    ]
  },
  {
    category: 'Avrist DPLK',
    data: [
      'Klaim Manfaat Hidup 3',
      'Klaim Kematian 3',
      'Klaim Rumah Sakit 3',
      'Klaim Cacat Total dan Tetap 3',
      'Klaim Kecelakaan 3',
      'klaim 2',
      'klaim 2 lagi'
    ]
  }
];

const detailData = [
  {
    category: 'Asuransi Jiwa Individu',
    type: 'Klaim Manfaat Hidup',
    list: [
      'Perhatikan Informasi Sebelum Klaim',
      'Lengkapi Dokumen Pendukung',
      'Isi Formulir Klaim',
      'Kirim Formulir dan Dokumen Pendukung'
    ]
  },
  {
    category: 'Asuransi Jiwa Korporasi',
    type: 'Klaim Manfaat Hidup 2',
    list: [
      'Perhatikan Informasi Sebelum Klaim 2',
      'Lengkapi Dokumen Pendukung 2',
      'Isi Formulir Klaim 2',
      'Kirim Formulir dan Dokumen Pendukung 2'
    ]
  }
];

interface ProsesKlaimComponentProps {
  onSelectDetail: (val: boolean) => void;
  onChangeBannerImg: (val: number) => void;
}

const ProsesKlaim: React.FC<ProsesKlaimComponentProps> = ({
  onSelectDetail,
  onChangeBannerImg
}) => {
  const [selectedCategory, setSelectedCategory] = useState(data[0].category);
  const [selectedDetailCategory, setSelectedDetailCategory] =
    useState<number>(0);
  const [selectedData, setSelectedData] = useState('');
  const [isSelectedData, setIsSelectedData] = useState(false);
  const filteredData = data.find((item) => item.category === selectedCategory);

  const itemsPerPage = 5; // Jumlah item yang ditampilkan per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData
    ? filteredData.data.slice(startIndex, endIndex)
    : [];

  const totalPages = filteredData
    ? Math.ceil(filteredData.data.length / itemsPerPage)
    : 0;

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const renderStep = (idx: number) => {
    return (
      <div className="w-full flex flex-col items-center justify-start py-10 text-left p-4 border rounded-lg border-t-8 border-t-purple_dark">
        <h2 className="w-full text-[32px] font-bold mb-6 text-purple_dark">
          {
            detailData.filter(
              (val) =>
                val.category === selectedCategory && val.type === selectedData
            )[0]?.list[idx]
          }
        </h2>
        {detailData.filter(
          (val) =>
            val.category === selectedCategory && val.type === selectedData
        )[0]?.list[idx].length > 0 && renderDetailStep(idx)}
      </div>
    );
  };

  const detailStep1Data = [
    {
      title: 'Hospital cash plan',
      icon: STEP1ICON1
    },
    {
      title: 'Waiver of premium',
      icon: STEP1ICON2
    },
    {
      title: 'Hospital surgical',
      icon: STEP1ICON3
    },
    {
      title: 'Monthly income benefit',
      icon: STEP1ICON4
    },
    {
      title: 'Penyakit kritis',
      icon: STEP1ICON5
    },
    {
      title: 'Medical check up',
      icon: STEP1ICON6
    },
    {
      title: 'Cacat sebagian atau cacat tetap',
      icon: STEP1ICON7
    },
    {
      title: 'Atau payor/family term (karena cacat)',
      icon: STEP1ICON8
    }
  ];

  const detailStep2Data = [
    {
      title:
        'Surat keterangan asli atau diagnosa dari dokter yang memeriksa penyakit harus menandatangani surat ini',
      icon: STEP2ICON1
    },
    {
      title: 'Fotokopi seluruh rincian biaya perawatan',
      icon: STEP2ICON2
    },
    {
      title: 'Fotokopi hasil pemeriksaan medis',
      icon: STEP2ICON3
    },
    {
      title: 'Fotokopi KTP pemilik polis yang masih berlaku',
      icon: STEP2ICON4
    },
    {
      title: 'Fotokopi buku tabungan pemilik polis',
      icon: STEP2ICON5
    }
  ];

  const detailStep3Data = [
    {
      title: 'Kirim Dokumen',
      link: 'Dengan Email',
      icon: STEP4ICON1
    },
    {
      title: 'WTC 2. Jend. Sudirman Kav. 52-53 Jakarta 12190',
      link: '',
      icon: STEP4ICON2
    },
    {
      title: 'Layanan Nasabah',
      link: '021 5789 8188',
      icon: STEP4ICON3
    },
    {
      title: 'Tanya Avrista',
      link: 'Pelajari Lebih Lanjut',
      icon: STEP4ICON4
    }
  ];

  const renderDetailStep = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <div className="flex flex-col gap-4">
            <p>
              Dengan perlindungan dari kami, kamu dapat mengklaim delapan jenis
              manfaat hidup, hanya dengan menggunakan satu formulir.
            </p>
            <p>
              Formulir manfaat hidup ini dapat digunakan untuk beberapa manfaat
              berikut:
            </p>
            <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4">
              {detailStep1Data.map((val, idx) => (
                <div
                  key={idx}
                  className="flex flex-row gap-2 font-semibold items-center"
                >
                  <Image src={val.icon} alt={val.title} className="w-7" />
                  <p>{val.title}</p>
                </div>
              ))}
            </div>
            <p>
              Kamu juga dapat mengajukan klaim secara cepat dan mudah dengan
              fitur klaim di Avrist Life Insurance. Akses klaim dengan mengunduh
              aplikasi Avrist Life Insurance, gratis.
            </p>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-4">
            {detailStep2Data.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-2 font-semibold items-center"
              >
                <Image src={val.icon} alt={val.title} className="w-7" />
                <p>{val.title}</p>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="flex w-full md:flex-row xs:flex-col gap-4 shadow-xl justify-between rounded-lg border p-4">
            <div className="flex flex-col gap-2">
              <p className="text-[24px] font-bold">Klaim Manfaat Hidup</p>
              <div className="flex flex-row gap-2 text-purple_dark font-medium">
                <p className="p-2 bg-purple_dark/[0.06]">PDF Files</p>
                <p className="p-2 bg-purple_dark/[0.06]">605.59 KB</p>
              </div>
            </div>
            <div className="flex items-center justiffy-center">
              <div className="p-2 px-8 rounded-lg text-white font-medium bg-purple_dark">
                Unduh
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <p>
              Untuk polis yang dibeli melalui agen Avrist Life Insurance atau
              jalur penjualan Avrist Life Insurance lainnya sebelum 1 Desember
              2020 atau melalui Avrist Life Insurance pada periode pembelian
              setelah 1 Desember 2020, kamu bisa mengirimkan dokumen ke:
            </p>
            <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-2">
              {detailStep3Data.map((val, idx) => (
                <div
                  key={idx}
                  className="flex flex-row gap-10 font-bold items-center p-4 border rounded-lg shadow-lg"
                >
                  <Image src={val.icon} alt={val.title} className="w-1/3" />
                  <div className="flex flex-col gap-1 w-2/3">
                    <p>{val.title}</p>
                    <p className="text-purple_dark">{val.link}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full flex flex-col justify-center gap-4 relative pb-28 pt-20 ${isSelectedData ? 'bg-white' : 'bg-purple_light_bg'} rounded-b-[65px]`}
    >
      {!isSelectedData && (
        <div className="w-full flex flex-col items-center justify-center py-2 text-center">
          <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
            Kami proses klaim Anda dengan efisiensi
          </h2>
          <h2 className="text-[20px] mb-6">
            <span className="font-bold">Langkah pertama</span> adalah cek klaim
            yang Anda ajukan ada di polis Anda
          </h2>
        </div>
      )}

      <div className="w-full flex md:flex-row xs:flex-col gap-5 md:px-20 xs:px-5">
        <div className="w-1/4 xs:hidden md:block">
          <div
            className={`w-full flex flex-col ${isSelectedData ? 'bg-purple_light_bg' : 'bg-white'} rounded-lg`}
          >
            {!isSelectedData
              ? data.map((val, idx) => (
                  <div
                    key={idx}
                    role="button"
                    onClick={() => {
                      setSelectedCategory(val.category);
                    }}
                    className={`${idx === 0 && 'rounded-tl-lg'} ${idx + 1 === data.length && 'rounded-bl-lg'} ${selectedCategory !== val.category && 'opacity-50'} border-l-8 border-l-purple_dark p-4 font-semibold text-purple_dark`}
                  >
                    {val.category}
                  </div>
                ))
              : detailData
                  .filter(
                    (val) =>
                      val.category === selectedCategory &&
                      val.type === selectedData
                  )[0]
                  ?.list?.map((val, idx) => (
                    <div
                      key={idx}
                      role="button"
                      onClick={() => {
                        setSelectedDetailCategory(idx);
                        if (idx > 0) {
                          onChangeBannerImg(idx + 2);
                        } else {
                          onChangeBannerImg(2);
                        }
                      }}
                      className={`${idx === 0 && 'rounded-tl-lg'} ${idx + 1 === detailData.filter((val) => val.category === selectedCategory && val.type === selectedData)[0].list.length && 'rounded-bl-lg'} ${selectedDetailCategory !== idx && 'opacity-50'} border-l-8 border-l-purple_dark p-4 font-semibold text-purple_dark`}
                    >
                      {val}
                    </div>
                  ))}
          </div>
        </div>
        <div className="w-wull xs:block md:hidden">
          <div
            className={`w-full p-2 flex flex-col ${isSelectedData ? 'bg-purple_light_bg' : 'bg-white'} rounded-lg border-l-8 border-l-purple_dark font-semibold text-purple_dark`}
          >
            {!isSelectedData ? (
              <select
                id="selected-categories"
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  setSelectedCategory(selectedValue);
                }}
                className="p-2"
              >
                {data.map((val, idx) => (
                  <option
                    key={idx}
                    selected={val.category === selectedCategory}
                    value={val.category}
                    className="w-[80%]"
                  >
                    {val.category}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="selected-detail-categories"
                onChange={(e) => {
                  const idx = e.target.selectedIndex;
                  setSelectedDetailCategory(idx);
                  if (idx > 0) {
                    onChangeBannerImg(idx + 2);
                  } else {
                    onChangeBannerImg(2);
                  }
                }}
                className="p-2 bg-purple_light_bg"
              >
                {detailData
                  .filter(
                    (val) =>
                      val.category === selectedCategory &&
                      val.type === selectedData
                  )[0]
                  ?.list?.map((val, idx) => (
                    <option
                      key={idx}
                      selected={
                        val ===
                        detailData.filter(
                          (val) =>
                            val.category === selectedCategory &&
                            val.type === selectedData
                        )[0]?.list[selectedDetailCategory]
                      }
                      value={val}
                      className="w-[80%]"
                    >
                      {val}
                    </option>
                  ))}
              </select>
            )}
          </div>
        </div>
        <div className="md:w-3/4 xs:w-full flex flex-col gap-4">
          {!isSelectedData ? (
            <div className="flex flex-row gap-2">
              <Input
                type="text"
                placeholder="Cari jenis klaim"
                customInputClass="w-[90%]"
              />
              <Button
                title="Cari"
                customButtonClass="bg-purple_dark rounded-lg"
                customTextClass="text-white"
              />
            </div>
          ) : (
            <div className="flex md:flex-row xs:flex-col xs:divide-y md:divide-y-0 gap-4 justify-between border rounded-lg p-4 text-purple_dark font-semibold">
              <div className="flex rlex-row items-center gap-2">
                <Image src={HeartIcon} alt="heart-icon" className="w-7" />
                <p>{selectedCategory}</p>
              </div>
              <div
                className="flex rlex-row items-center gap-2"
                role="button"
                onClick={() => {
                  setSelectedData('');
                  setIsSelectedData(false);
                  onSelectDetail(false);
                  onChangeBannerImg(1);
                }}
              >
                <Icon name="chevronLeft" color="purple_dark" />
                Kembali
              </div>
            </div>
          )}
          {!isSelectedData && (
            <div className="w-full flex flex-col gap-2">
              {paginatedData.map((val, index) => (
                <div
                  key={index}
                  role="button"
                  onClick={() => {
                    setSelectedData(val);
                    setIsSelectedData(true);
                    onSelectDetail(true);
                    onChangeBannerImg(2);
                  }}
                  className="w-full p-4 bg-white border-2 rounded-lg flex flex-row justify-between font-black"
                >
                  {val}
                  <Image
                    src={CHEVRONRIGHTPURPLE}
                    alt="chevron-right"
                    className="w-4"
                  />
                </div>
              ))}
            </div>
          )}
          {!isSelectedData && (
            <div className="w-full flex flex-row justify-between mt-4">
              <div className="flex items-center text-sm">
                Menampilkan{'\u00A0'}
                <span className="font-bold text-purple_dark">
                  {startIndex + 1}-
                  {Math.min(
                    endIndex,
                    filteredData ? filteredData?.data.length : 0
                  )}
                </span>
                {'\u00A0'}dari{'\u00A0'}
                <span className="font-bold"> {filteredData?.data.length}</span>
                {'\u00A0'}hasil
              </div>
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <div
                      key={page}
                      role="button"
                      onClick={() => handlePageChange(page)}
                      className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                        currentPage === page ? 'text-purple_dark font-bold' : ''
                      }`}
                    >
                      {page}
                    </div>
                  )
                )}
                <span
                  className="mt-[3px]"
                  role="button"
                  onClick={() => handlePageChange(totalPages)}
                >
                  <Icon name="chevronRight" color="purple_dark" />
                </span>
              </div>
            </div>
          )}
          {selectedData && (
            <div className='text-[36px] font-bold'>{selectedData}</div>
          )}
          {selectedData && renderStep(selectedDetailCategory)}
        </div>
      </div>

      <div className="w-full absolute z-20 bottom-2 h-20 bg-purple_light_bg rounded-b-[65px]"></div>
      <div className="w-full flex flex-row absolute z-10 bottom-0 h-20 rounded-b-[65px]">
        <div className="w-1/4 h-full bg-purple_light rounded-bl-[65px]"></div>
        <div className="w-1/4 h-full bg-green_border"></div>
        <div className="w-1/4 h-full bg-orange_border"></div>
        <div className="w-1/4 h-full bg-agi_grey rounded-br-[65px]"></div>
      </div>
    </div>
  );
};

export default ProsesKlaim;
