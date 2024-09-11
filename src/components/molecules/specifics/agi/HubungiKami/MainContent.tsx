import {
  RequirementForm,
  ContactSupport,
  FeedbackForm
} from './MainContentComponent';
import { contentStringTransformer } from '@/utils/responseTransformer';

type Props = {
  formId?: string;
  formSaranId?: string;
  pageData?: any;
};

export const MainContent = (props: Props) => {
  const { formSaranId, pageData, formId } = props;
  return (
    <div className="w-full flex flex-col">
      <div className=" flex flex-col gap-[5rem] xs:py-[5rem] xs:px-[2rem] lg:p-0 lg:px-[8.5rem] lg:py-[6.25rem] xs:px-[1.3125rem]">
        <div className="font-karla mx-[2rem] lg:mx-[8.5rem] flex flex-col text-center">
          <p className="font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop text-purple_dark">
            {contentStringTransformer(pageData['body-judul'])}
          </p>
          <p className="text-[1.125rem] lg:text-[2.25rem]">
            {contentStringTransformer(pageData['body-sub-judul'])}
          </p>
        </div>
        <RequirementForm Id={formId} />
        <ContactSupport pageData={pageData} />
      </div>
      <FeedbackForm Id={formSaranId} />
    </div>
  );
};
