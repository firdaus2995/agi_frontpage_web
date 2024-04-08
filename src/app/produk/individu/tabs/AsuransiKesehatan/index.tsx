import React from 'react';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import CardCategoryA from '@/components/molecules/specifics/avrast/Cards/CategoryA';

function AsuransiKesehatan() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
      {[...Array(9)].map((_, index) => (
        <CardCategoryA
          key={index}
          symbol={HeartSymbol}
          title="Asuransi Kesehatan"
          summary="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet"
          tags={['Asuransi Kesehatan', 'Premi Tetap', 'Premi Berkala']}
          href={`/produk/individu/produk-asuransi-kesehatan-` + index}
        />
      ))}
    </div>
  );
}

export default AsuransiKesehatan;
