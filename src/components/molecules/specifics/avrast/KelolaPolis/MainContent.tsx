import Image from 'next/image';
import { Banner, ButtonMenu } from '../InformasiNasabah/MainContentComponent';
import {
  Content,
  VideoInformation,
  DocumentPolicy
} from './MainContentComponent';
import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom.svg';

const urlBanner =
  'https://s3-alpha-sig.figma.com/img/4fd2/0dc7/7398de9b00f0da915c31eceb3cc03519?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PY9gpo5YhvphgR8dwLkteoqNCh5yFh3sFd~q1MyXz9ggUdsVo2s5CGTHOid2rwwBOym2d6pCWZtVOktqA3AumlD0ym4swAMQaVZOFaG1PYWgr4aRoKynlFVWMn2oBsFnqILT7J2vd-gr172FULUCos6qfzhOuGEBXndZh~xGq2XcyWvE5ZFwnCsWA0~kXSt-EWiwbSgOmQQ8HgahV-pdmHZybQbOzja~UyO~vL8cuJgMa7kQafFLOl8roxdLzMND6LWf-6h10sax0xyOJvh7KodC6o9JtzoCuC5y73StkGt3j5Aw1p73GLbxP1YaHY4lpwEPdvpbTeHV0skhHkD3bw__';
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-white rounded-t-[80px] flex flex-col gap-6">
        <Banner alt="banner-informasi-nasabah" url={urlBanner} />
        <div className="mt-[100px] mx-[32px] md:mx-[136px]">
          <ButtonMenu />
          <Content />
          <VideoInformation />
          <DocumentPolicy />
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
