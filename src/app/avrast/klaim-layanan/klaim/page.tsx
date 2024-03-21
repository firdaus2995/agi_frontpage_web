'use client';
import React, { useEffect, useState } from 'react';

// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { useSearchParams } from 'next/navigation';
import FooterKlaim from '@/components/molecules/specifics/avrast/Klaim/FooterKlaim';
import InformasiKlaimComponent from '@/components/molecules/specifics/avrast/Klaim/InformasiKlaim';
import KlaimBanner from '@/components/molecules/specifics/avrast/Klaim/KlaimBanner/KlaimBanner';
import KlaimHeader from '@/components/molecules/specifics/avrast/Klaim/KlaimHeader/KlaimHeader';
import KlaimVideo from '@/components/molecules/specifics/avrast/Klaim/KlaimVideo';
import PanduanKlaim from '@/components/molecules/specifics/avrast/Klaim/PanduanKlaim';
import ProsesKlaim from '@/components/molecules/specifics/avrast/Klaim/ProsesKlaim';
import { ParamsProps } from '@/utils/globalTypes';

const InformasiKlaim: React.FC<ParamsProps> = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');
  const [isSelectedDetail, setIsSelectedDetail] = useState(false);
  const [bannerImg, setBannerImg] = useState(0);

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const handleSelectedDetail = (val: boolean) => {
    setIsSelectedDetail(val);
  };

  const handleChangeBannerImg = (val: number) => {
    setBannerImg(val);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-avrast_product_bg">
      <KlaimHeader title={tab} />
      <KlaimBanner changeImg={bannerImg} />
      <InformasiKlaimComponent
        onTabChange={handleTabChange}
        isSelectedDetail={isSelectedDetail}
        onChangeBannerImg={handleChangeBannerImg}
        tab={tab}
      />
      {tab === 'Informasi Klaim' && <PanduanKlaim />}
      {tab === 'Panduan & Pengajuan' && (
        <ProsesKlaim
          onSelectDetail={handleSelectedDetail}
          onChangeBannerImg={handleChangeBannerImg}
        />
      )}
      <KlaimVideo />
      <FooterKlaim />
    </div>
  );
};

export default InformasiKlaim;
