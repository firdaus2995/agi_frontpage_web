import { DividerRainbow } from './Divider';
import { TextInput, TextInputArea } from './form/Input';
import { RatingEmoji } from './form/Rating';

export const FeedbackForm = () => {
  return (
    <div className="bg-white py-[80px] px-[136px]">
      <div className="border rounded-xl flex flex-col justify-between overflow-hidden">
        <div className="p-[36px]">
          <p className="font-bold font-karla text-[36px] text-purple_dark">
            Saran untuk Kami
          </p>
          <form className="mt-[36px]">
            <div>
              <TextInput title="Nama Anda" onChangeText={() => {}} />
            </div>
            <div className="mt-[36px]">
              <TextInput title="Email Anda" onChangeText={() => {}} />
            </div>
            <div className="mt-[36px]">
              <TextInputArea
                title="Alasan Anda berkunjung di website Kami?"
                onChangeText={() => {}}
              />
            </div>
            <div className="mt-[36px]">
              <TextInputArea
                title="Saran Anda untuk Kami meningkatkan produk dan layanan"
                onChangeText={() => {}}
              />
            </div>
            <div className="mt-[36px]">
              <RatingEmoji
                title="Penilaian Anda terhadap produk dan layanan Avrist Life Insurance"
                // onChange={() => {}}
              />
            </div>
            <div className="mt-[36px]">
              <button className="bg-purple_dark text-white h-[64px] w-[132px] rounded-lg">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <DividerRainbow />
      </div>
    </div>
  );
};
