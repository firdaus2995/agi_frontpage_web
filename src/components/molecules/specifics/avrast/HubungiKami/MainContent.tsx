import Image from 'next/image';
import { Banner } from '../InformasiNasabah/MainContentComponent';
import {
  RequirementForm,
  ContactSupport,
  FeedbackForm,
  HighOffice,
  BranchOffice
} from './MainContentComponent';
import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom-purple-light.svg';

const urlBanner =
  'https://s3-alpha-sig.figma.com/img/8979/fdc9/c7f2e6205be2aab544e7176626db79fa?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojXvMYXj1Qy~cZdvaIfHbgaWcXkNF~0V1CI~gOQ1AZqEpeRF76dvfQvyumd1Ao-wKhJLucNvjPq1QsfaOFTyBSQW35wbQY9n-izOaHjdiAA7-ItV5qcalfWkLP5eBu6XMFBi7bQY69KY6jVSZiieF1iMd8kBD~ZWky~XlUCemXf09UTJHj~fvRdKsXAdX5ed7DonCbGA6glU181QMw2DbqkbqrM8tqrvD7fyY0uAPh0IJ0UY66Mt9y1HLDFssRkTryt2tCEcrjx3gefhe7~hVR6wTklKzoGyJxJ4K28QlxesnQ8fhLfwFSDB8xM7sOXTY1ctjDN6XWKUcmOk4~urig__';
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-purple_superlight rounded-t-[80px] flex flex-col gap-6">
        <Banner alt="banner-informasi-nasabah" url={urlBanner} />
        <div className="mt-[20px] mx-[32px] md:mx-[136px]">
          <p className="font-karla font-bold text-[56px] text-center text-purple_dark">
            Kami mengutamakan Anda. Prioritas Kami
          </p>
        </div>
        <RequirementForm />
        <ContactSupport />
        <FeedbackForm />
        <HighOffice />
        <BranchOffice />
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
