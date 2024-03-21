import Image from 'next/image';
// import SAMPLE_DATA from './sample-data.json';
// import { ProductData } from './types';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image-small.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
// import ProductComparisonDropdown from '@/components/molecules/specifics/avram/_investasi/ProductComparisonDropdown';
import Chart from '@/components/molecules/specifics/avram/Chart/Chart';
import DetailHeader from '@/components/molecules/specifics/avram/DetailHeader/DetailHeader';
import MainBanner from '@/components/molecules/specifics/avram/MainBanner';
// import FundListItem from '@/components/molecules/specifics/avram/MutualFundList/components/FundListItem';
import StepsBox from '@/components/molecules/specifics/avram/StepsBox';
import { ParamsProps } from '@/utils/globalTypes';

// const BandingkanProduk: React.FC<ParamsProps> = async ({ searchParams }) => {
const BandingkanProduk: React.FC<ParamsProps> = async () => {
  // const getProductsData = async (shouldGetFiltered?: boolean) => {
  //   return new Promise<ProductData[]>((resolve) => {
  //     setTimeout(() => {
  //       const productData = SAMPLE_DATA.productData as ProductData[];
  //       if (shouldGetFiltered) {
  //         const existedProducts = searchParams['product'];
  //         if (existedProducts) {
  //           console.log(existedProducts);
  //           resolve(
  //             productData.filter((item) => existedProducts.includes(item.name))
  //           );
  //           return;
  //         }
  //         resolve(productData.filter((_, index) => index < 5));
  //       }
  //       resolve(productData.filter((_, index) => index < 5));
  //     }, 1000);
  //   });
  // };

  // This is to get the data tabs
  // const products = await getProductsData();
  // const filteredProducts = await getProductsData(true);

  const PRODUCT_COMPARISON_CARD_DATA = [
    {
      title: 'Hitung Investasi',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe velit nostrum aliquam ipsum!',
      icon: (
        <Icon
          name="calculatorIcon"
          width={48}
          isSquare
          color="purple_verylight"
        />
      )
    },
    {
      title: 'Tim Investasi',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe velit nostrum aliquam ipsum!',
      icon: (
        <Icon
          name="multiPeopleIcon"
          width={48}
          isSquare
          color="purple_verylight"
        />
      )
    },
    {
      title: 'Promo',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe velit nostrum aliquam ipsum!',
      icon: (
        <Icon
          name="discountIcon"
          width={48}
          isSquare
          color="purple_verylight"
        />
      )
    },
    {
      title: 'FAQs',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe velit nostrum aliquam ipsum!',
      icon: (
        <Icon
          name="roundedQuestion"
          width={48}
          isSquare
          color="purple_verylight"
        />
      )
    }
  ];

  return (
    <div className="flex h-full flex-col bg-purple_dark/[.03] pb-[10rem]">
      <DetailHeader title="Bandingkan Produk" />
      <div className="flex flex-col gap-12 p-[80px]">
        {/* <ProductComparisonDropdown<string>
          options={products.map((item) => item.name)}
        /> */}
        <div className="bg-white p-9 rounded-lg shadow-md">
          <Chart />
        </div>
        <div>
          {/* {filteredProducts.map((item, index) => (
            <FundListItem key={index} item={item.fundData} />
          ))} */}
        </div>
      </div>
      <MainBanner
        imageUrl="https://i.ibb.co/mBF6JPS/Rectangle-21998.png"
        isWhiteColored
        renderTitle={() => (
          <p className="font-karla text-5xl font-light tracking-tighter">
            <span className="text-purple_dark font-bold">Hubungi</span> Kami
          </p>
        )}
        renderButton={() => (
          <Button>
            <div className="flex gap-2 items-center">
              <Image
                src={WHATSAPP_IMAGE}
                width={50}
                height={50}
                alt="Whatsapp"
              />
              <span className="font-karla text-2xl font-bold">
                0811 1960 1000
              </span>
            </div>
          </Button>
        )}
      />
      <div className="flex p-[80px] gap-6 flex-wrap justify-around">
        {PRODUCT_COMPARISON_CARD_DATA.map((item, index) => (
          <StepsBox
            key={index}
            title={item.title}
            desc={item.desc}
            iconRenderer={() => item.icon}
            customClass="grow basis-52"
          />
        ))}
      </div>
    </div>
  );
};

export default BandingkanProduk;
