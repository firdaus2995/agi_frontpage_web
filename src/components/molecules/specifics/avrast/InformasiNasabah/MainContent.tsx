import { ContentCard, Banner, Content, BeAgent } from './MainContentComponent';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import ButtonMenu from '@/components/molecules/specifics/avrast/ButtonMenu';

const urlBanner =
  'https://s3-alpha-sig.figma.com/img/df5a/51cf/64f6b80abd4d1448b9b41944a94b8703?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhxfYigwLFTFT2r2IBF8FG99qapVc7OLmf22xD7mchCYitLojG4EVwAadb41nNHnnt8FQqKcu0n-gPxA9mbGOuC0IOITWA2mwmt~dcvqyWkJcvG7qbChkUfQaOr6oS7VwFLf1OF7Khg-N0xDyFIAO6PaDWUzp00vGLeiC2p9Lyj8Z7TTBeCZcDO2Laif2nJGpRaKyi8IAEcb0Xk90T8H7uMWaYQJBzWnjRKY9KvGkeJbdOlYmh2S8Xd44HwPjw-4xJw5V0tN1TAP0WTHPa373skd6By-BVAwJ4NqXUMNP0yOMQYn5p6L9SvzAM5shtAK4XNcQJk2msYkmIswC2K4GQ__';
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className="bg-white rounded-t-[80px] flex flex-col gap-6">
        <Banner alt="banner-informasi-nasabah" url={urlBanner} />
        <div className="mt-[100px] mx-[32px] md:mx-[136px]">
          <ButtonMenu
            buttonList={[
              'Informasi Nasabah',
              'Rumah Sakit Rekanan',
              'Formulir & Buku Panduan',
              'Performa Investasi'
            ]}
          />
          <Content />
          <ContentCard />
          <BeAgent />
        </div>
      </div>
      <RoundedFrameBottom />
    </div>
  );
};
