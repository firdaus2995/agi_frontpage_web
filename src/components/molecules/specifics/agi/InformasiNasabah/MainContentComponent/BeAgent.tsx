import Button from '@/components/atoms/Button/Button';

export const BeAgent = () => {
  return (
    <div className="flex flex-1 border-[1px] mt-[64px] mb-[26px] rounded-xl justify-between items-center">
      <span className="font-opensans text-purple_dark font-bold text-[24px] mx-[24px] my-[29px]">
        Tertarik menjadi agen Kami?
      </span>
      <div>
        <Button
          title="Karir"
          customButtonClass="bg-purple_dark mr-[24px]"
          customTextClass="text-white"
        />
      </div>
    </div>
  );
};
