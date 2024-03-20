import React from 'react';

import Advantage from "@/components/molecules/specifics/avram/_investasi/Adventage";
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import InvestmentPage from "@/components/molecules/specifics/avram/_investasi/Investment";
import RelatedPage from "@/components/molecules/specifics/avram/_investasi/RelatedPage";
import DetailHeader from '@/components/molecules/specifics/avram/DetailHeader/DetailHeader';
import { ParamsProps } from '@/utils/globalTypes';

// const JasaInvestasi: React.FC<ParamsProps> = ({ searchParams }) => {
  const JasaInvestasi: React.FC<ParamsProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-purple_dark/[.03]">
      <DetailHeader title="Jasa Investasi" />
      {/* <CustomerFund searchParams={searchParams} /> */}
      <Advantage />
      <InvestmentPage />
      <RelatedPage />
    </div>
  );
};

export default JasaInvestasi;
