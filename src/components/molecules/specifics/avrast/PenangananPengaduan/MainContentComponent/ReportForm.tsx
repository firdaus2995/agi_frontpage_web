import React from 'react';
import { CardMenuDownload } from '../../KelolaPolis/MainContentComponent/CardMenu';
import Icon from '@/components/atoms/Icon';

type TextInputProps = {
  title: string;
  placeholder: string;
};
const TextInput = (props: TextInputProps) => {
  const { title, placeholder } = props;
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        <span className="text-red_error"> *</span>
      </p>
      <input
        className="mt-[8px] rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px]"
        placeholder={placeholder}
      />
    </div>
  );
};

const TextInputPhone = (props: TextInputProps) => {
  const { title, placeholder } = props;
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        <span className="text-red_error"> *</span>
      </p>
      <div className="flex flex-row mt-[8px]">
        <div className="rounded-[14px] border border-light-grey font-opensans font-normal text-[14px] px-[10px] py-[16px] mr-[8px]">
          <select>
            <option value="62">+62</option>
            <option value="63">+63</option>
            <option value="64">+64</option>
            <option value="65">+65</option>
          </select>
        </div>
        <input
          className="rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
const TextInputArea = (props: TextInputProps) => {
  const { title, placeholder } = props;
  const [text, setText] = React.useState('');
  return (
    <div>
      <p className="font-opensans font-bold text-[16px]">
        {title}
        <span className="text-red_error"> *</span>
      </p>
      <textarea
        className="mt-[8px] rounded-[14px] border border-light-grey w-full font-opensans font-normal text-[14px] px-[10px] py-[16px] h-[120px] resize-none"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        maxLength={500}
      />
      <p className="text-end">{text.length}/500</p>
    </div>
  );
};

type UploadBoxProps = {
  title: string;
  textWidth?: number;
};
const UploadBox = (props: UploadBoxProps) => {
  const { title, textWidth } = props;
  return (
    <div className="border border-light-grey rounded-[14px] flex flex-col items-center justify-center min-w-[172px] h-[120px] cursor-pointer">
      <Icon name="UploadIcon" height={24} width={24} color="purple_dark" />
      <p
        className="font-opensans font-normal text-[14px] text-center"
        style={{ width: textWidth }}
      >
        {title}
      </p>
    </div>
  );
};
const headUrl =
  'https://s3-alpha-sig.figma.com/img/f4e0/acce/b2f53690113f06fbade89ce61c73b026?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-OzqLL0R503Fb~8LBOUCM4dJXX7sQIRzDZPBA3u2GbIQjpiIBjdQlcnbjDyadKl0TabaoTjjxRlSyxXIxovqx3cmlbaCZWbifIUejtGta-nbTSDQNeWtkQuIefUl5~tv7T17eFWCtMBw02eNwkGVjcG4DtVBc~fM0VHD~UmEn9auqEmoC5FD1zhL4KXDEKsYx3Fi5Vn1HBdh~-s8ZCBGpxSxnicZxFZoyMz1zhbRxqbl4gCDRnWw~~JMhB7QqJ2DN6A7exW7n7yENkZE88hoMsiT8HyLNzPfZIzrQ4yO~FBnBBF~afSMRvSBAXl~V8kSR~NdG9Lq5YP~-9pa3wPFg__';
const emailUrl =
  'https://s3-alpha-sig.figma.com/img/739a/d716/53e25d6c64f62837b9102463edb6809e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Id-3PUhEU9tQX4HA~t6bFfnk42f8YIN8cu8JC2skLfQjW9Ej1eAeIohS5UEf4i9bUHl3hwG3YYb23pmIPv9yNpNcwKEpERiGPmEvT1CfYPtSKq9YGArx-0ecncjB20SfDIl0tkSixMuY03eXAbEbCwqSEt9vjLBhCkzNqe1weZ7UYo~ls-RIyZZ-NS88MwM5RmW49341XqbpGueuHkbF5eEi0uKzPqc2lu7fI5YFssuK4wNH31t1B~2Mmu2c-ZZJEOhzsGZ7zfFm6n4WZvU4ZOUB2rnNbDAxeDaXLtlTEfLr3tLCugBHY3wUSUDIHplKVOKfqVspqO~qvdENtNgBAw__';
const clockUrl =
  'https://s3-alpha-sig.figma.com/img/8c4c/dc90/8bdcd59b63cd6804c3b292031bce0935?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPZjPCwz5etLfwVfQ8PopebcdDYW~8pmwF43df9lE759aXwFKAivqAyCYc8c7w~c7XeOQ3dIwdb8wW4zAkeB6jl7fuDvk88u9Csqqx-L6wCwhLN6MJEGeeWn9Lm6CXEvaIcrR6WZXO5wfgm9jJ6dKzmW0nPBCJx34nHK4uUjsZIv~6mBoJ5y3iWdWuFem~k0hZvTYPviPIY1QEP9FEXfkZgjdphkZx0LsHuBYPJE4mT~d9Hs9h8lrQsub6r1nVoHoSrklbJvFbsTQgDOfMx~CaGTWnVD2IPyY1nMsveGSO0~gPk-H2zZLSC6cs6P93Oeicno~4fYCfYu5Nx2G~fkag__';
const capcayUrl =
  'https://s3-alpha-sig.figma.com/img/588e/36d1/1cade33270a77581f723552bb4e3473d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXCYY0RUwyHRjTkHCecLG-Pysvdp56v0Atm3ewGbIqplRNurlM6OFPrqaAv38pX0pqtgJGey090flQq5L7uNHOj68p6aGZnrlmrRRFla8jwWR8hiCJN4ylFXW0xqZhzxP0J3sQT8gJiPDuVdroP8A6e46zsKeBgmeoWwxsn0EWRvBGBtIIebwBoVKF81HcS6Vlm~4md98IKhyULxu-ZVIi5pAXoQuLYORYYNHJilWxAnIk6sZ05YLOv2QzB4fZffOCHzV0RxY97fxf-KVXnA7mVvVz6fhEH4AUJYlELbx5vDrf2E~rRFsAyADVVa~Bhy6UDuNZnHHEhWNlxiFW0Nkw__';
export const ReportForm = () => {
  return (
    <div className="mt-[80px] bg-purple_superlight">
      <div className="bg-white mt-[80px] mx-[136px] border rounded-xl border-gray_light overflow-hidden">
        <div className="p-[36px]">
          <p className="font-karla font-bold text-[56px]">Pengaduan Anda</p>
          <form className="mt-[36px]">
            {/* radio */}
            <div>
              <p className="font-opensans font-bold text-[16px]">
                Pemegang Polis <span className="text-red_error">*</span>
              </p>
              <div className="mt-[8px]">
                <label>
                  <input type="radio" value="option1" />
                  <span className="ml-[12px]">Ya</span>
                </label>
                <label className="ml-[32px]">
                  <input type="radio" value="option1" />
                  <span className="ml-[12px]">Tidak</span>
                </label>
              </div>
            </div>
            {/* name & email */}
            <div className="grid grid-cols-2 gap-8">
              <TextInput title="Nama" placeholder="Masukkan Nama Anda" />
              <TextInput
                title="Alamat Email"
                placeholder="Masukkan alamat e-mail anda"
              />
            </div>
            {/* no phone & domisili */}
            <div className="grid grid-cols-2 gap-8 mt-[36px]">
              <TextInputPhone
                title="No. Telepon"
                placeholder="Masukkan Nomor Telepon"
              />
              <TextInput
                title="Domisili"
                placeholder="Masukkan Domisili Anda"
              />
            </div>
            {/* Text area */}
            <div className="mt-[36px]">
              <TextInputArea
                title="Detail Pengaduan"
                placeholder="Tulis detail pengaduan anda"
              />
            </div>
            {/* Upload Doc & contact */}
            <div className="grid grid-cols-2 gap-8 mt-[36px]">
              {/* upload */}
              <div>
                <p className="font-opensans font-bold text-[16px]">
                  Upload Dokumen
                </p>
                <div className="grid grid-cols-3 gap-2 mt-[8px]">
                  <UploadBox title="Upload KTP" textWidth={64} />
                  <UploadBox title="Upload Formulir" textWidth={64} />
                  <UploadBox title="Dokumen Pendukung" textWidth={140} />
                </div>
              </div>
              {/* contact support */}
              <div className="border border-gray_light rounded-xl flex flex-col justify-between overflow-hidden">
                <div className="p-[24px]">
                  <div className="flex flex-row items-center">
                    <img src={headUrl} alt="head" height={24} width={24} />
                    <span className=" ml-[24px] font-opensans font-bold text-[16px] w-[185px]">
                      Layanan Nasabah
                    </span>
                    <span className="text-purple_dark font-normal text-[16px]">
                      021 5789 8188
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-row items-center mt-[12px]">
                    <img src={emailUrl} alt="head" height={24} width={24} />
                    <span className=" ml-[24px] font-opensans font-bold text-[16px] w-[185px]">
                      Email
                    </span>
                    <span className="text-purple_dark font-normal text-[16px]">
                      customer@avrist.com
                    </span>
                  </div>
                  {/*  */}
                  <div className="flex flex-row items-center mt-[12px]">
                    <img src={clockUrl} alt="head" height={24} width={24} />
                    <span className=" ml-[24px] font-opensans font-bold text-[16px] w-[185px]">
                      Waktu Operasional
                    </span>
                    <span className="text-purple_dark font-normal text-[16px]">
                      Senin - Jumat, 08.00 - 17.00 WIB
                    </span>
                  </div>
                </div>
                <div className="h-[8px] bg-purple_dark" />
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
      <div className="px-[136px] mt-[24px] mb-[26px]">
        <CardMenuDownload desc="Formulir Pengaduan" />
      </div>
    </div>
  );
};
