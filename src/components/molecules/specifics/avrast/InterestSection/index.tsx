import Image from 'next/image';
import CaptchaPicture from '@/assets/images/form-captcha.svg';
import Button from '@/components/atoms/Button/Button';
import Radio from '@/components/atoms/Radio';

// button variants: primary, secondary

const InterestSection = () => {
  return (
    <div className="w-full flex px-[136px] py-[72px] bg-purple_superlight justify-center">
      <div className="flex flex-col self-stretch bg-white p-[36px] gap-[36px] border border-gray_light border-b-8 border-b-purple_dark rounded-[12px]">
        <p className="font-karla font-bold text-[56px]">
          Saya tertarik dengan produk Avrist Life!
        </p>
        <div className="grid grid-cols-2 gap-[32px]">
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Saya adalah <span className="text-reddist">*</span>
            </p>
            <Radio
              id="calon_nasabah"
              name="tipe_nasabah"
              label="Calon Nasabah"
            />
            <Radio id="nasabah" name="tipe_nasabah" label="Nasabah" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Bapak/Ibu <span className="text-reddist">*</span>
            </p>
            <Radio id="bapak" name="jenis_kelamin" label="Bapak" />
            <Radio id="ibu" name="jenis_kelamin" label="Ibu" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Alamat Email <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukan alamat e-mail Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Nama <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukan nama Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Kota <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Kota terdekat dari domisili Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              No Telepon <span className="text-reddist">*</span>
            </p>
            <div className="flex flex-row gap-2">
              <select
                id="selected-product"
                className="p-2 border border-gray_light rounded-[14px]"
              >
                <option selected={true} value={'+62'} className="w-[80%]">
                  +62
                </option>
              </select>
              <input
                className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
                placeholder="Masukan nomor telepon"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Pilih produk <span className="text-reddist">*</span>
            </p>
            <select
              id="selected-product"
              className="p-2 border border-gray_light rounded-[14px]"
            >
              <option selected={true} value={'Pilih'} className="w-[80%]">
                Pilih
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Detail Kebutuhan <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Tulis detail kebutuhan Anda"
            />
            <p className="text-right">0/500</p>
          </div>
        </div>
        <div className="accent-purple_dark flex flex-row items-start gap-[12px]">
          <input
            id="setuju"
            type="checkbox"
            value=""
            className="mt-[6px] text-purple_dark border-gray_verylight rounded focus:purple_dark focus:ring-2 cursor-pointer"
          />
          <label className="cursor-pointer" htmlFor="setuju">
            Saya setuju memberikan data pribadi Saya kepada Avrist Life
            Insurance dan telah membaca{' '}
            <span className="text-purple_dark font-bold">Keamanan Online</span>{' '}
            Avrist Life Insurance. Selanjutnya, Saya bersedia untuk dihubungi
            oleh Avrist Life Insurance melalui media komunikasi pribadi Saya
            sesuai hari dan jam operasional yang berlaku di Avrist Life
            Insurance.
          </label>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Image alt="captcha" src={CaptchaPicture} />
          <Button
            title="Kirim"
            customButtonClass="rounded-lg bg-purple_dark"
            customTextClass="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default InterestSection;
