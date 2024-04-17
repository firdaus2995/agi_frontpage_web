import {
  RequirementForm,
  ContactSupport,
  FeedbackForm
} from './MainContentComponent';

export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-white flex flex-col ">
        <div className="mt-[20px] mx-[32px] md:mx-[136px] flex flex-col gap-20">
          <p className="font-karla font-bold text-[56px] text-center text-purple_dark flex flex-col">
            Pengaduan Nasabah
            <span className="text-[36px] text-black font-normal">
              Kami mempermudah Anda untuk mengajukan pengaduan
            </span>
          </p>
        </div>
        <RequirementForm />
        <ContactSupport />
        <FeedbackForm />
      </div>
    </div>
  );
};
