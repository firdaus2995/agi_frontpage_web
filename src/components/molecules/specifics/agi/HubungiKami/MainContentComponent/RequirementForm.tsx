import React from 'react';

import Image from 'next/image';

import { DividerPurple } from './Divider';

import {
  SelectRadio,
  TextInput,
  TextInputArea,
  TextInputPhone,
  UploadInput
} from './form/Input';

import CAPTCHA from '@/assets/images/captcha.svg';
import CLOCK from '@/assets/images/common/clock-gray.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service-gray.svg';
import EMAIL from '@/assets/images/common/email-gray.svg';

export const RequirementForm = () => {
  return (
    <div className="bg-white mt-[80px] mx-[136px] border rounded-xl border-gray_light overflow-hidden">
      <div className="p-[36px]">
        <p className="font-karla font-bold text-[56px]">Pengaduan Anda</p>
        <form className="mt-[36px]">
          {/* radio */}
          <SelectRadio
            title="Waktu yang dapat dihubungi"
            data={[
              { id: 'pagi', label: '8 am - 12 pm' },
              { id: 'sore', label: '1 pm - 5 pm' }
            ]}
            flexType="columns"
          />
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
          <div className="grid grid-cols-1 gap-8 mt-[36px]">
            <TextInputArea
              title="Detail Pengaduan"
              placeholder="Tulis detail pengaduan anda"
              onChangeText={() => {}}
              require
              maxLength={500}
            />
          </div>
          {/* Upload & Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div className="h-[150px] flex flex-col gap-4">
              <p className="font-opensans font-bold text-[16px]">
                Upload Dokumen
              </p>
              <div className="h-full grid grid-cols-3 gap-4">
                <UploadInput title="Upload KTP" />
                <UploadInput title="Upload Formulir" />
                <UploadInput title="Dokumen Penting" />
              </div>
            </div>
            <div className="h-[150px] border rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex flex-row">
                  <div className="w-[40px]">
                    <Image
                      src={CUSTOMER_SERVICE}
                      alt="Layanan Nasabah"
                      width={24}
                      height={24}
                    />
                  </div>

                  <p className="font-opensans font-semibold w-[180px]">
                    Layanan Nasabah
                  </p>
                  <p className="font-opensans text-purple_dark w-[250px]">
                    021 5789 8188
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px]">
                    <Image src={EMAIL} alt="Email" width={24} height={24} />
                  </div>

                  <p className="font-opensans font-semibold w-[180px]">Email</p>
                  <p className="font-opensans text-purple_dark w-[250px]">
                    customer@avrist.com
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px]">
                    <Image
                      src={CLOCK}
                      alt="Waktu Operasional"
                      width={24}
                      height={24}
                    />
                  </div>

                  <p className="font-opensans font-semibold w-[180px]">
                    Waktu Operasional
                  </p>
                  <p className="font-opensans text-purple_dark w-[250px]">
                    Senin - Jumat, 08.00 - 17.00 WIB
                  </p>
                </div>
              </div>
              <DividerPurple />
            </div>
          </div>
          {/* snk */}
          <div className="flex flex-row mt-[36px]">
            <div>
              <input type="checkbox" />
            </div>
            <span className="ml-[12px]">
              Saya /kami telah membaca, memahami dan memberikan persetujuan
              saya/kami kepada Avrist Life Insurance untuk mengumpulkan,
              menggunakan dan mengungkapkan data pribadi saya/kami sesuai dengan{' '}
              <span className="font-bold text-purple_dark">
                Deklarasi Privasi *
              </span>
            </span>
          </div>
          {/* submit */}
          <div className="mt-[36px] flex flex-row justify-between items-center">
            <Image src={CAPTCHA} alt="captha" width={277} height={84} />
            <button className="bg-purple_dark text-white h-[64px] w-[132px] rounded-lg">
              Kirim
            </button>
          </div>
        </form>
      </div>
      <div className="h-[8px] bg-purple_dark" />
    </div>
  );
};
