import React from 'react';

import {
  SelectRadio,
  TextInput,
  TextInputArea,
  TextInputPhone,
  SelectDropdown
} from './form/Input';

const capcayUrl =
  'https://s3-alpha-sig.figma.com/img/588e/36d1/1cade33270a77581f723552bb4e3473d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXCYY0RUwyHRjTkHCecLG-Pysvdp56v0Atm3ewGbIqplRNurlM6OFPrqaAv38pX0pqtgJGey090flQq5L7uNHOj68p6aGZnrlmrRRFla8jwWR8hiCJN4ylFXW0xqZhzxP0J3sQT8gJiPDuVdroP8A6e46zsKeBgmeoWwxsn0EWRvBGBtIIebwBoVKF81HcS6Vlm~4md98IKhyULxu-ZVIi5pAXoQuLYORYYNHJilWxAnIk6sZ05YLOv2QzB4fZffOCHzV0RxY97fxf-KVXnA7mVvVz6fhEH4AUJYlELbx5vDrf2E~rRFsAyADVVa~Bhy6UDuNZnHHEhWNlxiFW0Nkw__';
export const RequirementForm = () => {
  return (
    <div className="mt-[64px] bg-purple_superlight">
      <div className="bg-white mt-[80px] mx-[136px] border rounded-xl border-gray_light overflow-hidden">
        <div className="p-[36px]">
          <p className="font-karla font-bold text-[56px]">
            Diskusi kebutuhan Anda disini!
          </p>
          <p className="mt-[36px] font-opensans text-[16px]">
            isi data berikut dan Kami akan menghubungi Anda.
          </p>
          <form className="mt-[36px]">
            {/* radio */}
            <SelectRadio
              title="Pemegang Polis"
              data={[
                { id: 'ya', label: 'Ya' },
                { id: 'tidak', label: 'Tidak' }
              ]}
              require
            />
            {/* name & email */}
            <div className="grid grid-cols-2 gap-8 mt-[36px]">
              <TextInput
                title="Nama"
                placeholder="Masukkan Nama Anda"
                onChangeText={() => {}}
                require
              />
              <TextInput
                title="Alamat Email"
                placeholder="Masukkan alamat e-mail anda"
                onChangeText={() => {}}
                require
              />
            </div>
            {/* no phone & domisili */}
            <div className="grid grid-cols-2 gap-8 mt-[36px]">
              <TextInputPhone
                title="No. Telepon"
                placeholder="Masukkan Nomor Telepon"
                onChangeText={() => {}}
                require
              />
              <TextInput
                title="Domisili"
                placeholder="Masukkan Domisili Anda"
                onChangeText={() => {}}
                require
              />
            </div>
            {/* Text area */}
            <div className="grid grid-cols-2 gap-8 mt-[36px]">
              <SelectDropdown
                title="Pilih Kebutuhan Anda"
                placeholder="Pilih"
                data={[
                  { id: '1', label: 'Placeholder' },
                  { id: '2', label: 'Lainnya' }
                ]}
                require
              />
              <TextInputArea
                title="Detail Kebutuhan"
                placeholder="Tulis detail kebutuhan anda"
                onChangeText={() => {}}
                require
                maxLength={500}
              />
            </div>
            {/* snk */}
            <div className="flex flex-row mt-[36px]">
              <div>
                <input type="checkbox" />
              </div>
              <span className="ml-[12px]">
                Saya /kami telah membaca, memahami dan memberikan persetujuan
                saya/kami kepada Avrist Life Insurance untuk mengumpulkan,
                menggunakan dan mengungkapkan data pribadi saya/kami sesuai
                dengan{' '}
                <span className="font-bold text-purple_dark">
                  Deklarasi Privasi *
                </span>
              </span>
            </div>
            {/* submit */}
            <div className="mt-[36px] flex flex-row justify-between items-center">
              <img src={capcayUrl} alt="captha" width={277} height={84} />
              <button className="bg-purple_dark text-white h-[64px] w-[132px] rounded-lg">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="h-[8px] bg-purple_dark" />
      </div>
    </div>
  );
};
