import Image from 'next/image';
import { LeftMenu } from './components/LeftMenu';
import ROUNDED_FRAME_BOTTOM from '@/assets/images/rounded-frame-bottom.svg';

const listMenu = [
  { id: '1', label: 'Ketentuan Umum' },
  { id: '2', label: 'Kewajiban Pengguna' },
  { id: '3', label: 'Ketersediaan Layanan' },
  { id: '2', label: 'Informasi Investasi' }
];
export const MainContent = () => {
  return (
    <div className=" w-full flex flex-col  relative bottom-[70px]">
      <div className="bg-white rounded-t-[80px] w-full min-h-[60px]">
        <div className="px-[136px] py-[100px] flex flex-row">
          <LeftMenu
            active={listMenu[0].id}
            data={listMenu}
            onClick={() => {}}
          />
          <div className="ml-[48px]">
            <p className="font-karla font-bold text-[56px]">
              Syarat Penggunaan Avrist Life Insurance
            </p>
            <p className="font-karla font-bold text-[36px] text-purple_dark mt-[24px]">
              Ketentuan Umum
            </p>
            <p className="font-opensans font-normal text-[20px] text-gray_body mt-[24px]">
              Lorem ipsum dolor sit amet consectetur. Nec in ipsum est vitae
              libero non placerat integer nunc. Nulla tincidunt enim luctus id
              in. Risus fames integer diam tristique. Nunc at suscipit ornare
              tortor ut eleifend lectus lorem malesuada. Quam non augue sit quis
              pretium placerat. Nisi leo id volutpat faucibus nec vitae
              elementum. Integer eu vitae faucibus sed mi arcu. Vitae arcu
              lectus faucibus orci in potenti ut nulla. Nisl viverra morbi purus
              purus blandit nulla. Tincidunt ipsum ut scelerisque donec nibh
              faucibus tortor. Enim ut facilisi elementum facilisis lorem et
              felis. Lacus eget id quis vel gravida eget. Et purus pellentesque
              a pretium mauris. Consequat vitae dolor praesent dignissim. Tortor
              faucibus quis lacinia nunc id. Faucibus odio pharetra adipiscing
              maecenas ac suspendisse sed dictum. Ut mi netus in rhoncus mollis.
              Malesuada consequat tempus ut porttitor nibh nulla accumsan turpis
              nam. Dis id felis nisi sed lectus varius nullam vulputate at.
              Vitae venenatis libero mus congue turpis. Penatibus congue viverra
              suspendisse consequat dignissim purus sed nunc suspendisse.
              Aliquam mi enim malesuada nunc turpis enim. Molestie id amet
              facilisi pretium ac. Proin sit et amet id id consectetur quis mi.
              Purus dignissim condimentum tortor sed auctor at. Eget neque lorem
              turpis elit arcu tristique. Tortor laoreet nibh faucibus ipsum
              elementum. Libero sed feugiat est sem vel sagittis. Ullamcorper
              sit pellentesque sed viverra sed mauris praesent imperdiet. Diam
              tortor est felis eget sed. Mus ornare duis purus amet proin ut ut.
              Tellus ut urna egestas velit augue. Natoque accumsan pellentesque
              nec quisque praesent nunc .
            </p>
          </div>
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
