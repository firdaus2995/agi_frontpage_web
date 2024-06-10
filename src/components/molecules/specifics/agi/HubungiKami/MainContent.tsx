import {
  RequirementForm,
  ContactSupport,
  FeedbackForm
} from './MainContentComponent';

type Props = {
  formId?: string;
  formSaranId?: string;
};

export const MainContent = (props: Props) => {
  const { formSaranId } = props;
  return (
    <div className="w-full flex flex-col">
      <div className=" flex flex-col sm:gap-[4rem] xs:gap-[2.25rem] xs:py-[3.125rem] xs:px-[2rem] sm:p-0 sm:px-[8.5rem] sm:py-[6.25rem] xs:px-[1.3125rem]">
        <div className="font-karla mx-[2rem] md:mx-[8.5rem] flex flex-col text-center">
          <p className="font-bold sm:text-[3.5rem] xs:text-[2.25rem] text-purple_dark">
            Pengaduan Nasabah
          </p>
          <p className="text-[1.125rem] sm:text-[2.25rem]">
            Kami mempermudah Anda untuk mengajukan pengaduan
          </p>
        </div>
        <RequirementForm />
        <ContactSupport />
      </div>
      <FeedbackForm Id={formSaranId} />
    </div>
  );
};
