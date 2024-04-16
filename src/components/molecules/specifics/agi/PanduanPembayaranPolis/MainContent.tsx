import Image from 'next/image';
import { Banner, ButtonMenu } from '../InformasiNasabah/MainContentComponent';
import {
  Content,
  VideoInformation,
  TutorialPayment
} from './MainContentComponent';
import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom.svg';

const urlBanner =
  'https://s3-alpha-sig.figma.com/img/936c/eaaf/442f1324a300b0d5000d417f780aaef6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WVKS33aNuoqB7yIdvWEu8qFZmy2uwFeCZ3hHNlZGBawZhK3J~em1l54g17daKpyjNrlb3uEFVfbohdAtAXb3Xpqa-BGzxJEEWC~VMBDKv7FzVkBVMvvJp6dEYyBIUrPHgP5sU~flKrCEtCQ6BwOLZwJoUD1r~5YujT~LdYgGEXt4vGscCblx71mW6jr1hoHse1BfbBnQtsXHeWe6JJ52cK0tZMy0gFCn-eSPXIDaT7woXJliDZdmI56LGxkD3L5erd3wIhxMT~dv9hkmFX7w6tsL7tQ5JRS0r3ZFQ214AaNEhAg6f4V5xq8N9YLyYj9tvi915hVW8TRaNf3od3BePw__';
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-white rounded-t-[80px] flex flex-col gap-6">
        <Banner alt="banner-informasi-nasabah" url={urlBanner} />
        <div className="mt-[100px] mx-[32px] md:mx-[136px]">
          <ButtonMenu />
          <Content />
          <VideoInformation />
          <TutorialPayment />
        </div>
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
