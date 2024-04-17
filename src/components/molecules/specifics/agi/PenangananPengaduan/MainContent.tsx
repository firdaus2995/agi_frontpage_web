import Image from 'next/image';
import { Banner, ButtonMenu } from '../InformasiNasabah/MainContentComponent';
import {
  VideoInformation,
  ReportList,
  ContentCard,
  Content,
  ContentReportList,
  ReportForm
} from './MainContentComponent';
import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom-purple-light.svg';

const urlBanner =
  'https://s3-alpha-sig.figma.com/img/cd22/f9ac/13b97a0d53db1b7e5c99e7167b7e0dbc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUUlMIjoHVfQBfK9ab~qi6QKY9dwNge459Qck8OQ~~yQZZk~LimsNZ-QFvj6hyah9gH7AncnUSLMP48u6CRLvkLkGP3TGWVsBvX~0r5wF5eosdjsdzig0PxowYjWDqi-QkxMoTZqYJ-hIt4d2pet20-zfvidNOz1L12481hqZqjdlJrxzahuHP4cMy~hMyUXBFfvcjOYBGIytU4Y5btaU5GYF2naAH-OuPPwmOIYF6eCERGk7B7aAPrvbK-RQb27qE-87FEWUCa2Wvq7MG70KFn3qHyizYBVHgljzZaVFlMFKGu2oJfZ3XQnrXfE1NPd5cUL0KVYDMyepqDWtS7iNg__';
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-white rounded-t-[80px] flex flex-col gap-6">
        <Banner alt="banner-informasi-nasabah" url={urlBanner} />
        <div className="mt-[100px] mx-[32px] md:mx-[136px]">
          <ButtonMenu />
          <Content />
          <VideoInformation />
          <ContentCard />
          <ContentReportList />
          <ReportList />
        </div>
        <ReportForm />
      </div>
      <Image
        alt="border-bottom"
        className="w-full h-auto"
        src={ROUNDED_FRAME_BOTTOM}
        style={{ userSelect: 'none' }}
      />
    </div>
  );
};
