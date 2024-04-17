import { Card } from './Card';
import { CardAddress } from './CardAddress';

const maps =
  'https://s3-alpha-sig.figma.com/img/2abb/9d84/d52ede33029befb3fcf8b5d1f2673fc3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KwNTAtzMRUqsB1Sqmzhpw0YubOx~LmN~I-R5Mzw9yU8HmvmzcO6jlFgQI4wZe9Z4fsAatxp2GjURJNwGr1B3fAzzQ1DyyiQi-0L490rsLUJEvb~KUMRDQqrzr1PfZZdJg3ZuxOx-C~smb4IOELhIwGW9~5rNVuPIRoeD-yHl-fzLkNyTz0iRvCZS19rt2mN5kdNLXpWs3uuy6x6IWSfETTgUbM~50x5Rzn6~7-lImCvtBuHPpzWlFBYRMgfhMY5CMC-TR3UU8yZpqNwvO6Wk3-hptoryQxHrhT5cLCCQMQfVR1jLLonCyxNVvazWdW0EaBtp8A2U8q7~LkW7NEJ3CA__';
export const HighOffice = () => {
  return (
    <div className="mt-[100px]">
      <p className="font-karla font-bold text-[56px] text-center text-purple_dark">
        Lokasi Kantor Pusat Avrist Assurance
      </p>
      <Card className="bg-white h-[601px] mx-[136px] mt-[64px] p-[24px] grid grid-cols-3 gap-6">
        <CardAddress
          title="Kantor Pusat Jakarta"
          address="World Trade Center II Lt. 7 & 8, Jl. Jenderal Sudirman Jl. Setiabudi Raya Kav 29-31, RT.8/RW.3"
          workHour="Senin-Jumat 10.00 - 14.00 WIB"
          contact="(021) 5789 8188"
        />
        <Card className="col-span-2">
          <img src={maps} className="w-full h-full object-cover" alt="maps" />
        </Card>
      </Card>
    </div>
  );
};
