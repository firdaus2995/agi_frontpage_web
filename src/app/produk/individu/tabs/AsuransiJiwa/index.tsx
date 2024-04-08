import React from 'react';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import CardCategoryA from '@/components/molecules/specifics/avrast/Cards/CategoryA';

function AsuransiJiwa() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
      {[...Array(9)].map((_, index) => (
        <CardCategoryA
          key={index}
          symbol={HeartSymbol}
          title="Asuransi Jiwa"
          summary="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet"
          tags={['Asuransi Jiwa', 'Premi Tetap', 'Premi Berkala']}
          href={`/produk/individu/produk-asuransi-jiwa-` + index}
        />
      ))}
    </div>
  );
}

export default AsuransiJiwa;
