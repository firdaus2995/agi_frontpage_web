import React from 'react';
import { CardMenuChildren } from '../../KelolaPolis/MainContentComponent/CardMenu';

const data = [
  {
    category: 'Asuransi Jiwa Individu',
    data: [
      {
        id: '1',
        name: 'Pembayaran Melalui Link Pembayaran',
        list: [
          'Untuk pembayaran premi lanjutan (pembayaran ke-2 dan seterusnya) khusus polis Agency dengan metode pembayaran transfer.',
          'Pilihan pembayaran yang tersedia hanya melalui Kartu Kredit.',
          'Pastikan untuk memperbarui data email Anda. Klik di sini untuk memperbarui data email Anda.'
        ]
      },
      {
        id: '2',
        name: 'Auto Debit Dengan Kartu Kredit atau Rekening Tabungan',
        list: []
      },
      { id: '3', name: 'Pembayaran Dari Rekening Bank BCA', list: [] },
      { id: '4', name: 'Pembayaran Dari Rekening Bank Lainnya', list: [] },
      { id: '5', name: 'Pembayaran Melalui Teler', list: [] },
      { id: '6', name: 'Pembayaran melalui Alfamart dan Indomaret', list: [] }
    ]
  },
  {
    category: 'Asuransi Jiwa Korporasi',
    data: []
  },
  {
    category: 'Avrist Syariah',
    data: []
  },
  {
    category: 'Avrist DPLK',
    data: []
  }
];

export const TutorialPayment = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(
    data[0].category
  );

  const selectedData = React.useMemo(
    () => data.find((i) => i.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className={`w-full flex flex-col justify-center relative pb-28 pt-20`}>
      <div className="w-full flex md:flex-row xs:flex-col">
        <div className="xs:hidden md:block">
          <div
            className={`flex flex-col bg-purple_light_bg rounded-lg w-[200px]`}
          >
            {data.map((val, idx) => (
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
            ))}
          </div>
        </div>

        <div className="md:w-3/4 xs:w-full flex flex-col gap-4 ml-[48px]">
          {selectedData?.data.map((i) => (
            <CardMenuChildren desc={i.name} key={i.id}>
              <div className="font-opensans font-normal text-[20px] text-gray_body ml-[20px]">
                <ul className="list-disc">
                  {i.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </CardMenuChildren>
          ))}
        </div>
      </div>
    </div>
  );
};
